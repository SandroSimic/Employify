import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../api/usersApi";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: registerUserQuery, isLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, registerUserQuery };
}
