import { useMutation, useQueryClient } from "react-query";
import Button from "./ui/Button";
import * as apiClient from "../api-clients";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({
        message: "Logged out",
        type: "SUCCESS",
      });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({
        message: error.message,
        type: "ERROR",
      });
    },
  });
  const handleSignOut = () => {
    mutation.mutate();
  };
  return (
    <Button variant="primary" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOut;
