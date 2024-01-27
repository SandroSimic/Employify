import { BsClock } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { FiClipboard } from "react-icons/fi";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import JobDetailBox from "../components/Jobs/JobDetailBox";
import { useJob } from "../components/Jobs/useJob";
import { useLoggedInUser } from "../components/Auth/useLoggedInUser";
import Spinner from "../components/UI/Spinner";

import { formatCleanDate } from "../utils/calculateTime";
import Modal from "../components/UI/Modal";
import { useState } from "react";
import { useDeleteJob } from "../components/Jobs/useDeleteJob";

const JobDetailPage = () => {
  const navigate = useNavigate();
  const { data: job, isLoading } = useJob();
  const { isLoading: isDeleting, deleteJobQuery } = useDeleteJob();
  const { data: user } = useLoggedInUser();
  const isUserCompany = user?.companyId._id === job?.companyId._id;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteJob = () => {
    try {
      deleteJobQuery(job._id);
    
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isModalOpen);
  return (
    <>
      <section className="jobDetails">
        {job && (
          <div className="jobDetails__wrapper">
            <div className="jobDetails__heading">
              <div className="jobDetails__heading__info">
                <div className="jobDetails__heading__title">
                  <div className="jobDetails__heading__image">
                    <img src={job.companyId.companyImage} />
                  </div>
                  <h1>{job.position}</h1>
                </div>
                {isUserCompany && (
                  <div className="jobDetails__heading__actions">
                    <button
                      className="jobDetails__heading__actions--delete"
                      onClick={openModal}
                    >
                      <MdDelete />
                    </button>
                    <button
                      className="jobDetails__heading__actions--edit"
                      onClick={() => navigate(`/job/update-job/${job._id}`)}
                    >
                      <MdEdit />
                    </button>
                  </div>
                )}
              </div>
              <div className="jobDetails__heading__jobInfo">
                <h2>{job.companyId.companyName}</h2>
                <p>{job.location}</p>
              </div>
            </div>
            <div className="jobDetails__main">
              <div className="jobDetails__main__desc">
                <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
              </div>
              <div className="jobDetails__main__info">
                <div className="jobDetails__main__info__location">
                  <div>
                    <LuMapPin />
                    <h3>{job.location}</h3>
                  </div>
                  <p>
                    Please send us you detailed CV to apply for this job post
                  </p>
                </div>
                <div className="jobDetails__main__info__salary">
                  <h3>${job.salary}</h3>
                  <p>Avg. {job.salaryType}</p>
                </div>
                <div className="jobDetails__main__info__condition">
                  <JobDetailBox
                    icon={<BsClock />}
                    jobType={job.jobType}
                    jobTypeDesc={"Job Type"}
                  />
                  <JobDetailBox
                    icon={<FaUsers />}
                    jobType={job.applicants}
                    jobTypeDesc={"Applicants"}
                  />
                  <JobDetailBox
                    icon={<CiCalendar />}
                    jobType={formatCleanDate(job.createdAt)}
                    jobTypeDesc={"Date Of Post"}
                  />
                  <JobDetailBox
                    icon={<FiClipboard />}
                    jobType={job.experience}
                    jobTypeDesc={"Experience"}
                  />
                  <button className="jobDetails__main__info__condition__btn">
                    Apply for this job
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isLoading && <Spinner />}
      </section>
      <Modal closeModal={isModalOpen} setCloseModal={closeModal}>
        <div className="modal__title">
          <h1>Are you sure you want to delete this job?</h1>
        </div>
        <div className="modal__actions">
          <button
            className="modal__actions__btn__delete"
            disabled={isDeleting}
            onClick={deleteJob}
          >
            Delete
          </button>
          <button className="modal__actions__btn__cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default JobDetailPage;
