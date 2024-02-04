/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Modal from "../../UI/Modal";
import { useGetApplicantsForCompany } from "../../Jobs/Applicants/useGetApplicantsForCompany";

const CompanyDashboardApplicants = () => {
  const { data } = useGetApplicantsForCompany();
  const [rowData, setRowData] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MessageCellRenderer = (props) => {
    const handleViewMessageClick = () => {
      setSelectedMessage(props.data.Message);
      setIsModalOpen(true);
    };

    return (
      <button
        style={{
          backgroundColor: "var(--primary-color)",
          padding: ".5rem",
          cursor: "pointer",
          border: "none",
          color: "white",
        }}
        onClick={handleViewMessageClick}
      >
        View Message
      </button>
    );
  };

  const ColorCellRenderer = (props) => {
    const handleDownload = () => {
      const cvLink = props.data.CV;
      window.open(cvLink, "_blank");
    };

    return (
      <div>
        <button
          style={{
            backgroundColor: "var(--primary-color)",
            padding: ".5rem",
            cursor: "pointer",
            border: "none",
            color: "white",
          }}
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (data && data.applicants) {
      const formattedData = data.applicants.map((applicant) => ({
        "Applicant Name": applicant.user.username,
        "Applicant Email": applicant.user.email,
        "Applied Job": applicant.job.position,
        Message: applicant.userMessage,
        CV: applicant.userCV,
      }));

      setRowData(formattedData);
    }
  }, [data]);

  const colDefs = [
    { field: "Applicant Name" },
    { field: "Applicant Email" },
    { field: "Applied Job" },
    {
      headerName: "Message",
      field: "Message",
      cellRenderer: MessageCellRenderer,
    },
    {
      headerName: "CV",
      field: "CV",
      cellRenderer: ColorCellRenderer,
    },
  ];

  const frameworkComponents = {
    colorCellRenderer: ColorCellRenderer,
  };

  return (
    <>
      <div
        className="ag-theme-quartz-auto-dark"
        style={{ height: "100%", width: "100%", padding: "5rem" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          frameworkComponents={frameworkComponents}
        />
      </div>
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          setCloseModal={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        >
          <p className="modal__info__message">{selectedMessage}</p>
        </Modal>
      )}
    </>
  );
};

export default CompanyDashboardApplicants;
