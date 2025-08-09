// components/ui/NotFound.tsx
import Link from "next/link";

interface NotFoundProps {
  title?: string;
  message?: string;
  homeHref?: string;
}

export default function NotFound({
  title = "Page Not Found",
  message = "Sorry, we couldn't find the page you're looking for.",
  homeHref = "/",
}: NotFoundProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">{title}</h2>
      <p className="mt-2 text-gray-500">{message}</p>
      <Link
        href={homeHref}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
