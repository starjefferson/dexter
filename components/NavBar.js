"use client"
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
export function NavBar () {
    const [dropDown,setDropDown] = useState(false);
    const toggleMenu = () =>{
        setDropDown(!dropDown);
    }
    return (
        <main className="bg-gray-100 shadow shadow-gray-300 w-full sticky top-0">
            <div className="h-[50px] flex justify-between items-center px-5">
                <h1 className="text-2xl font-bold text-blue-500">Dexter</h1>
                <ul className="hidden md:text-sm font-semibold md:flex gap-10 cursor-pointer">
                    <li>Home</li>
                    <li>Contact-us</li>
                    <li>About-us</li>
                </ul>
                <div className="hidden md:block">
                     <button className="w-[70px] h-[30px] bg-blue-500 rounded-md text-white">Login</button>
                </div>
                <div className="block md:hidden">
                    <CiMenuBurger onClick={toggleMenu} className="text-2xl text-blue-500 " />
                </div>
            </div>
           {dropDown && (
                <div className="flex flex-col gap-5 justify-center items-center">
                    <ul className="flex flex-col gap-3">
                        <li>Home</li>
                        <li>Contact-us</li>
                        <li>About-us</li>
                    </ul>
                    <button className="w-12 h-8 bg-blue-500 rounded-md text-white">Login</button>
                </div>
            )}

        </main>
    )
}