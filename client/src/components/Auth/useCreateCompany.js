import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCompany } from "../../api/companyApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCreateCompany() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createCompanyQuery, isLoading } = useMutation({
    mutationFn: createCompany,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.response.data.message)
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, createCompanyQuery };
}
