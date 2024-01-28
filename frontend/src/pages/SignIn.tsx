import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-clients";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const navigate = useNavigate();

  const { showToast } = useAppContext();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: () => {
      showToast({ message: "Login Successful", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data: SignInFormData) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign In</h2>
      <label className="text-gray-700 text-sm font-bold">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-bold flex-1"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-bold flex-1"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password should be atleast 6 characters.",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <span>
        <Button type="submit" variant="secondary">
          Sign In
        </Button>
      </span>
    </form>
  );
};

export default SignIn;
