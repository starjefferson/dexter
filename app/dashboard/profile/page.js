import Image from "next/image";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async  function () {
  const session = await auth()
  console.log(session)

  if (!session) {
    redirect("/auth/login")
  }
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-23 md:px-12 lg:py-15 lg:px-16">
           <div className="w-full py-10 px-2 md:w-[350px] shadow-md rounded-md h-auto md:py-12 md:px-4">
              <div className="flex justify-center">
                <Image 
                src={session?.user?.image}
                alt=""
                width={100} 
                height={100}
                className="rounded-xl w-20 h-20"
                />
              </div>
              <h1 className="text-lg font-semibold text-gray-800 text-center">{session?.user.name}</h1>
              <p className="text-sm text-gray-600 text-center mb-6">@starjeff</p>
              <div className="flex justify-center  mt-3">
                  <button className="w-[90px] h-8 border rounded-2xl border-gray-700 ">Edit profile</button>
              </div>
              <div className="mt-5  flex flex-col">
                <p className="border-b border-gray-300 text-lg text-center">{session?.user?.email}</p>
                <p className="border-b border-gray-300 text-lg text-center">{session?.user?.id}</p>
              </div>
              <form action={async ()=>{
                "use server"
                await signOut();
              }}
                className="mt-3">
                <button className="w-full h-10 cursor-pointer bg-red-500 rounded-md text-white">LogOut</button>
              </form>
           </div>
           
        </main>
    )
}