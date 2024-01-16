import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../api/jobApi";

export function useJobs() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getJobs(),
  });

  return { data, error, isLoading, refetch };
}
