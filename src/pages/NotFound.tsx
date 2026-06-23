import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] pt-10 flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-2 text-center text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
