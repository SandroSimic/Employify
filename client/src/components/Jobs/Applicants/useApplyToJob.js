import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { applyToJob } from "../../../api/jobApi";
import toast from "react-hot-toast";

export function useApplyToJob() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: applyToJobQuery, isLoading } = useMutation({
    mutationFn: ({ jobId, applicantData }) => applyToJob(jobId, applicantData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast.success("You Applied for this job");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.response.data.message)
    },
  });

  return { isLoading, applyToJobQuery };
}
