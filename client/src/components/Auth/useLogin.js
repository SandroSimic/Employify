import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../api/usersApi";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginUserQuery, isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err.response.data.message);
      console.log(err);
    },
  });

  return { isLoading, loginUserQuery };
}
