import { useCreateCompany } from "../components/Auth/useCreateCompany";
import { useForm } from "react-hook-form";

const CreateCompanyPage = () => {
  const { createCompanyQuery, isLoading } = useCreateCompany();
  const { handleSubmit, register } = useForm();

  async function onSubmit(companyData) {
    const formData = new FormData();

    formData.append("companyName", companyData.companyName);
    formData.append("companyDescription", companyData.companyDescription);
    formData.append("companyImage", companyData.companyImage[0]);

    if (!formData) return;

    try {
      await createCompanyQuery(formData);
    } catch (error) {
      console.log(error.response);
    }
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <div className="createCompany">
      <h1>Create Company</h1>
      <form
        className="createCompany__form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="createCompany__form__actions">
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyName")}
          />
        </div>
        <div className="createCompany__form__actions">
          <label>Company Description</label>
          <textarea
            placeholder="Enter company description"
            {...register("companyDescription")}
          />
        </div>
        <div className="createCompany__form__actions">
          <label>Company Image</label>
          <input type="file" {...register("companyImage")} />
        </div>
        <button className="createCompany__button">Create Company</button>
      </form>
    </div>
  );
};

export default CreateCompanyPage;
