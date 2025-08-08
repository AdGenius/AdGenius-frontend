"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAuthStore((state) => state.user);

  if (user === undefined) {
    return <div>Loading...</div>;
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
