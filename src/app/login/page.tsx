import { auth } from "@/../auth";
import LoginForm from "@/components/login/LoginForm";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
        <LoginForm />
      </div>
    </main>
  );
}
