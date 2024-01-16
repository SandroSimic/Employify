/* eslint-disable no-undef */
import { useQuery } from "@tanstack/react-query";
import { getJob } from "../../api/jobApi";
import { useParams } from "react-router-dom";

export function useJob() {
  const { jobId } = useParams();


  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["job", jobId],
    queryFn: () => getJob(jobId),
    retry: false
  });
  return { data, error, isLoading, refetch };
}
