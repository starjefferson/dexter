import { MdDelete } from "react-icons/md";

export default function GuestPage () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:py-20 md:px-12 lg:py-20 lg:px-20">
            <div className="w-full md:w-[400px] md:h-[500px] md:shadow-md md:rounded-md py-5 px-5">
                <h1 className="text-3xl text-gray-600 text-center">Guest Details</h1>
                <div className="flex flex-col gap-4 mt-5">
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">Guest Name</p>
                        <p className="text-gray-800 text-xl">Augustine Emmanuel</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">Phone Number</p>
                        <p className="text-gray-800 text-xl">+2348193883720</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">Room Type</p>
                        <p className="text-gray-800 text-xl">Deluxe Room</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">Room Number</p>
                        <p className="text-gray-800 text-xl">001</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-xl">CheckInDate</p>
                        <p className="text-gray-800 text-xl">25/12/2025</p>
                    </div>

                    <div className="mt-5">
                        <button className="w-[60px] h-[50px] bg-red-500 text-white flex justify-center items-center rounded-md shadow-md cursor-pointer"><MdDelete className="text-2xl"/></button>
                    </div>
                </div>
            </div>
        </main>
    )
}