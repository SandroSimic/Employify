import { useQuery } from "@tanstack/react-query";
import { getApplicants } from "../../../api/applicantApi";

export function useGetApplicants() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["applicants"],
    queryFn: () => getApplicants(),
    retry: 2,
  });
  return { data, error, isLoading, refetch };
}
