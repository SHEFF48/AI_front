import { getServerSession } from "next-auth";
import { authConfig } from "../configs/auth";

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center ml-[100px] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4  animate-bounce">
        <h1 className="text-4xl uppercase">Profile page</h1>
        <p className="text-3xl">under construction</p>
        {session?.user?.name && <h2>You are {session?.user?.name}</h2>}
      </div>
    </main>
  );
}
