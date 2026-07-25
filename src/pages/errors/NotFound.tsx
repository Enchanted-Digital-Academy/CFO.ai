import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">

      <h1 className="text-7xl font-bold text-yellow-400">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold text-white">
        Page Not Found
      </h2>

      <p className="mt-2 text-zinc-400 text-center">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/login"
        className="mt-6 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500"
      >
        Back to Login
      </Link>

    </div>
  );
};

export default NotFound;