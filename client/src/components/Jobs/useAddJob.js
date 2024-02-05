import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createJob } from "../../api/jobApi";
import toast from "react-hot-toast";

export function useAddJob() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createJobQuery, isLoading } = useMutation({
    mutationFn: createJob,
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

  return { isLoading, createJobQuery };
}
