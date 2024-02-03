import { useQuery } from "@tanstack/react-query";
import { getApplicantsForCompany } from "../../api/applicantApi";
import { getUsersCompany } from "../../api/companyApi";

export function useGetCompany(companyId) {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["company", companyId],
    queryFn: () => getUsersCompany(companyId),
    retry: 2,
  });
  return { data, error, isLoading, refetch };
}
