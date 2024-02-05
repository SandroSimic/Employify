// useLogout.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../api/usersApi";
import toast from "react-hot-toast";

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
    onError: (err) => {
      toast.error(err.response.data.message)
    },
  });

  return { logout, isLoading, data };
}
