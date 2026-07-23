import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../../layouts/AuthLayout";

type ForgotPasswordFormData = {
  email: string;
};

const ForgotPassword = () => {
  const { register, handleSubmit } =
    useForm<ForgotPasswordFormData>();

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <h1 className="text-4xl font-bold text-yellow-400 mb-2">
        CFO.ai
      </h1>

      <p className="text-white mb-6">
        Forgot your password?
      </p>

      <p className="text-sm text-zinc-400 mb-6">
        Enter your email address and we'll send you a reset link.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
          {...register("email")}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500"
        >
          Send Reset Link
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

export default ForgotPassword;