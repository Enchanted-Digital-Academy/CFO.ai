import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../../layouts/AuthLayout";

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const { register, handleSubmit } =
    useForm<ResetPasswordFormData>();

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <h1 className="text-4xl font-bold text-yellow-400 mb-2">
        CFO.ai
      </h1>

      <p className="text-white mb-6">
        Reset your password
      </p>

      <p className="text-sm text-zinc-400 mb-6">
        Create a new password for your account.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
          {...register("password")}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
          {...register("confirmPassword")}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500"
        >
          Reset Password
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-white">
        <Link
          to="/login"
          className="text-yellow-400 hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;