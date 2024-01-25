// useLogout.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../api/usersApi";

export function useLogout() {
  const queryClient = useQueryClient();

  const {
    mutate: logout,
    isLoading,
    data,
  } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ["user"] });
    },
  });

  return { logout, isLoading, data };
}
