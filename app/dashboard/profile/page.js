import Image from "next/image"

export default function () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-23 md:px-12 lg:py-15 lg:px-16">
           <div className="w-full py-10 px-2 md:w-[350px] shadow-md rounded-md h-auto md:py-12 md:px-4">
              <div className="flex justify-center">
                <Image 
                src="/black-coca.webp"
                alt=""
                width={100} 
                height={100}
                className="rounded-xl w-[100px] h-[100px]"
                />
              </div>
              <h1 className="text-lg font-semibold text-gray-800 text-center">jefferson Okoene</h1>
              <p className="text-sm text-gray-600 text-center mb-6">@starjeff</p>
              <div className="flex justify-center  mt-3">
                  <button className="w-[115px] h-10 border rounded-2xl border-gray-700 ">Edit profile</button>
              </div>
              <div className="mt-5  flex flex-col">
                <p className="border-b border-gray-300 text-lg text-center">jeffersonokoene@gmail.com</p>
                <p className="border-b border-gray-300 text-lg text-center">UserId: 1234</p>
              </div>
           </div>
           
        </main>
    )
}