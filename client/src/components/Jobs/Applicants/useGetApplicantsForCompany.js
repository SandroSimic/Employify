import { useQuery } from "@tanstack/react-query";
import { getApplicantsForCompany } from "../../../api/applicantApi";

export function useGetApplicantsForCompany() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["applicants"],
    queryFn: () => getApplicantsForCompany(),
    retry: 2,
  });
  return { data, error, isLoading, refetch };
}
