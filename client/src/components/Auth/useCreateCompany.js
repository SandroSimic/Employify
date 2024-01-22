// useCreateCompany.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompany } from "../../api/companyApi";
import { useNavigate } from "react-router-dom";

export function useCreateCompany() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createCompanyQuery, isLoading } = useMutation({
    mutationFn: createCompany,
    onSuccess: (company) => {
      queryClient.invalidateQueries("user");
      navigate('/');
    },
    onError: (err) => {
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, createCompanyQuery };
}
