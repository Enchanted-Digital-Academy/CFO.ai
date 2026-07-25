import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../../layouts/AuthLayout";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <h1 className="text-4xl font-bold text-yellow-400 mb-2">
        CFO.ai
      </h1>

      <p className="text-white mb-6">
        Welcome back!
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

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
          {...register("password")}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500"
        >
          Login
        </button>
      </form>

      <div className="mt-6 flex justify-between text-sm text-white">
        <Link
          to="/register"
          className="hover:text-yellow-400"
        >
          Register
        </Link>

        <Link
          to="/forgot-password"
          className="hover:text-yellow-400"
        >
          Forgot Password?
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;