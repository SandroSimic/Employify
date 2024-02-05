/* eslint-disable react/prop-types */
import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { formatCleanDate } from "../../../utils/calculateTime";
import { useDeleteJob } from "../../Jobs/useDeleteJob";

const CompanyDashboardJobCard = ({ data }) => {
  const navigate = useNavigate();
  const { deleteJobQuery } = useDeleteJob();
  const deleteJob = () => {
    try {
      deleteJobQuery(data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="companyDashboard__card">
      <Link to={`/job/${data._id}`}>{data.position}</Link>
      <p>Applicants: {data.applicants.length}</p>
      <p>
        <span>Experience: </span> {data.experience}
      </p>
      <p>
        <span>Created At: </span>
        {formatCleanDate(data.createdAt)}
      </p>
      <div className="jobDetails__heading__actions">
        <button
          className="jobDetails__heading__actions--edit"
          onClick={() => navigate(`/job/update-job/${data._id}`)}
        >
          <MdEdit />
        </button>
        <button
          className="jobDetails__heading__actions--delete"
          onClick={deleteJob}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CompanyDashboardJobCard;
