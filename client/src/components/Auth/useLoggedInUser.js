import { useQuery } from "@tanstack/react-query";
import { loggedInUser } from "../../api/usersApi";
export function useLoggedInUser() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => loggedInUser(),
  });


  return { data, error, isLoading, refetch };
}
