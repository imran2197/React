function ErrorPage({
  code = "404",
  title = "Page Not Found",
  message = "Sorry, the page you are looking for doesn’t exist.",
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-7xl font-extrabold text-gray-800">{code}</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">{title}</h2>

      <p className="mt-2 text-gray-500 max-w-md">{message}</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          Retry
        </button>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
