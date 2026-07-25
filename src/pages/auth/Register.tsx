import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../../layouts/AuthLayout";

type RegisterFormData = {
  businessName: string;
  ownerName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <h1 className="text-4xl font-bold text-yellow-400 mb-2">
        CFO.ai
      </h1>

      <p className="text-white mb-6">
        Create your account
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Business Name"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
          {...register("businessName")}
        />

        <input
          type="text"
          placeholder="Owner Name"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
          {...register("ownerName")}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
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
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-white">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-yellow-400 hover:underline"
        >
          Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;