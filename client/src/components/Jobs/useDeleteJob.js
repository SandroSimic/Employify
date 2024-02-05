import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteJob } from "../../api/jobApi";
import toast from "react-hot-toast";

export function useDeleteJob() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: deleteJobQuery, isLoading } = useMutation({
    mutationFn: deleteJob,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["jobs"] });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.response.data.message)
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, deleteJobQuery };
}
