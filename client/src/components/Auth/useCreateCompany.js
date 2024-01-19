import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompany } from "../../api/companyApi";

export function useCreateCompany() {
  const queryClient = useQueryClient();

  const { mutate: createCompanyQuery, isLoading } = useMutation({
    mutationFn: createCompany,
    onSuccess: (company) => {
      console.log(company);
      queryClient.setQueryData(["company"], company);
    },
    onError: (err) => {
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, createCompanyQuery };
}
