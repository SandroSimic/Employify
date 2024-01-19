import { useQuery } from "@tanstack/react-query";
import { loggedInUser } from "../../api/usersApi";

export function useLoggedInUser() {
  const {
    data: user,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => loggedInUser(),
  });

  return { user, error, isLoading, refetch };
}
