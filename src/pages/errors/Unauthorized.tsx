import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">

      <h1 className="text-6xl font-bold text-red-500">
        401
      </h1>

      <h2 className="mt-4 text-3xl font-semibold text-white">
        Unauthorized Access
      </h2>

      <p className="mt-2 text-zinc-400 text-center">
        You do not have permission to access this page.
      </p>

      <Link
        to="/login"
        className="mt-6 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500"
      >
        Login
      </Link>

    </div>
  );
};

export default Unauthorized;