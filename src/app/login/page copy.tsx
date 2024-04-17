import LoginForm from "@/components/custom/forms/Login";
import RegistartionForm from "@/components/custom/forms/Registartion";
import RecoveryForm from "@/components/custom/forms/Recovery";
import CreateForm from "@/components/custom/forms/Create";

export default function Create() {
  return (
    <main className="flex flex-col gap-24 min-h-screen  items-start justify-between ml-[100px] overflow-hidden py-20">
      <div className="flex flex-col justify-center items-center gap-16 text-center m-auto">
        <h2 className="text-4xl">Login group</h2>
        <div className="w-[416px] p-7 rounded-2xl shadow">
          <LoginForm />
        </div>
        <div className="w-[416px] p-7 rounded-2xl shadow">
          <RegistartionForm />
        </div>
        <div className="w-[416px] p-7 rounded-2xl shadow">
          <RecoveryForm />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-16 text-center m-auto">
        <h2 className="text-4xl">Chanel group</h2>
        <div className="w-[416px] p-7 rounded-2xl shadow">
          <CreateForm />
        </div>
      </div>
    </main>
  );
}
