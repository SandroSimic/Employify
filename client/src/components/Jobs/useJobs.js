import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../api/jobApi";

export function useJobs(params) {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["jobs", params],
    queryFn: () => getJobs(params),
    retry: 2,
  });
  return { data, error, isLoading, refetch };
}
