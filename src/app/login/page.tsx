import LoginForm from "@/components/custom/forms/Login";
import RegistartionForm from "@/components/custom/forms/Registartion";
import RecoveryForm from "@/components/custom/forms/Recovery";
import CreateForm from "@/components/custom/forms/Create";

export default function Create() {
  return (
    <main className="flex flex-col min-h-screen  items-center justify-center overflow-hidden">
      <div className="w-[416px] p-7 rounded-2xl shadow">
        <LoginForm />
      </div>
    </main>
  );
}
