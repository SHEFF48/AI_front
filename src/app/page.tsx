import { redirect } from "next/navigation";

export default function Home() {
  redirect("/messages");
  return (
    <main className="flex min-h-screen  items-start justify-between ml-[100px] overflow-hidden">
      <h1>Main page</h1>
    </main>
  );
}
