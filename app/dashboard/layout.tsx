"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";
import Loading from "@/components/LoadingUI";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((state) => state.user);

  if (user === undefined) {
    return <Loading fullScreen text="Loading..." />;
  }

  console.log(user, "Dashboard user");

  if (!user) redirect("/sign-in");

  return (
    <div className="flex">
      {/* Sidebar etc. */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
