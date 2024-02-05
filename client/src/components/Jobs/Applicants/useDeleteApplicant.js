import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApplicant } from "../../../api/applicantApi";
import toast from "react-hot-toast";

export function useDeleteApplicant() {
  const queryClient = useQueryClient();

  const { mutate: deleteApplicantQuery, isLoading } = useMutation({
    mutationFn: deleteApplicant,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["applicants"] });
    },
    onError: (err) => {
      toast.error(err.response.data.message)
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, deleteApplicantQuery };
}
