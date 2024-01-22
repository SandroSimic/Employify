import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../api/usersApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginUserQuery, isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      toast.success("Logged In");
      queryClient.setQueryData(["user"], user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return { isLoading, loginUserQuery };
}
