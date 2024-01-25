import { useQuery } from "@tanstack/react-query";
import { getTopJobs } from "../../api/jobApi";

export function useTopJobs() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["topJobs"],
    queryFn: getTopJobs,
  });

  return { data, error, isLoading, refetch };
}
