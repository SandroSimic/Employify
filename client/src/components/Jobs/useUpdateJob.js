import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateJob } from "../../api/jobApi";
import toast from "react-hot-toast";
export function useUpdateJob() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateJobQuery, isLoading } = useMutation({
    mutationFn: ({jobData, jobId}) => updateJob(jobData, jobId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast.success("Updated Job")
      navigate("/");
    },
    onError: (err) => {
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, updateJobQuery };
}
