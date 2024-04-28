import LoginForm from "@/components/custom/forms/Login";
import RegistartionForm from "@/components/custom/forms/Registartion";
import RecoveryForm from "@/components/custom/forms/Recovery";
import CreateForm from "@/components/custom/forms/Create";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../configs/auth";

export default async function page() {
  const session = await getServerSession(authConfig);

  session && redirect("/messages");

  return (
    <main className="flex flex-col min-h-screen  items-center justify-center overflow-hidden">
      <div className="w-[416px] p-7 rounded-2xl shadow">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
