"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {Alert, Card, CardHeader, Typography } from "@mui/material";


export default function Home() {
   const [active, setActive] = useState(1);

  return (
    <main>
      <div className="w-full h-[50px] bg-blue-100 text-center flex items-center justify-center">
        <p>Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise! <Link className="underline" href="https://www.earlycode.net">Learn more.</Link></p>
      </div>
      <div className=" flex items-center gap-20 h-182 w-full bg-gray-100 pl-25 ">
        <div className="flex-col gap-2">
          <div>
            <h1 className="text-5xl/15 font-medium ">Capture, organize, and<br/> tackle your to-dos from <br/>anywhere.</h1>
            <p className="text-xl">Escape the clutter and chaos—unleash your productivity<br/> with Trello.</p>

            <div className="flex items-center mt-5">
              <input className="w-[300px] h-[45px] bg-white border pl-3 border-gray-300 rounded-sm"
              type="text"
              name="email"
              placeholder="Email"
              />
              <button className="ml-2 w-[150px] h-[45px] bg-blue-600 text-white rounded-sm hover:bg-blue-700">Sign up-it's free</button>
            </div>

            <p className="text-md mt-5">By entering my email, I acknowledge the <Link className="underline" href="https://www.earlycode.net">Atlassian Privacy Policy</Link></p>

            <Link className="underline" href="https://www.earlycode.net"><p className="mt-10">Watch video</p></Link>
          </div>
        </div>
        
        <div>
          <video
          src="updatedhero-mobile-final (1).mp4"
          alt="image"
          width={600}
          height={600}
          className="mt-20 ml-5"
          />
        </div>
      </div>

      <div className="w-full b-white flex flex-col gap-2 ml-50">
        <h1 className="mt-3 text-sm font-semibold">TRELLO 101</h1>
        <h2 className="font-[500] text-4xl">Your productivity powerhouse</h2>
        <p className="text-xl font-medium mt-3">Stay organized and efficient with Inbox, Boards, and Planner. Every<br/> to-do, idea, or responsibility—no matter how small—finds its place,<br/> keeping you at the top of your game.</p>

        <div className="w-full h-screen flex items-center justify-center mt-15">
            <div className="flex gap-10 w-full">
               <div className="flex flex-col gap-4 w-1/3">
                        <div onClick={() => setActive(1)}
                      className={
                        "cursor-pointer p-4 rounded-lg border-l-4 ${active === 1 ? ' border-blue-600 bg-blue-50' : 'border-transparent'}"}>
                          <h2>Inbox</h2>
                          <p>When it's on your mind, it goes in your<br/> inbox. Capture your To-do's from<br/> anywhere anytime</p>
                        </div>
                    

                    <div onClick={() => setActive(2)}
                      className={
                        "cursor-pointer p-4 rounded-lg border-l-4 ${active === 2 ? ' border-blue-600 bg-blue-50' : 'border-transparent'}"}>
                        <h2>Boards</h2>
                        <p>Your to-do list may be long, but it can be<br/> manageable! Keep tabs on everything<br/> from "to-dos to tackle" to "mission<br/> accomplished!”</p>
                    </div>

                    <div onClick={() => setActive(3)}
                      className={
                        "cursor-pointer p-4 rounded-lg border-l-4 ${active === 3 ? ' border-blue-600 bg-blue-50' : 'border-transparent'}"}>
                          <p>Drag, drop, get it done. Snap your top tasks into your calendar and make time for what truly matters.</p>
                    </div>
                </div>

                 <div>
                    <div>
                      {active === 1 && (
                        <Image
                        src="/habby1.jpg"
                        alt="image-1"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg transition-opacity duration-500"
                        />
                      )}
                    </div>

                    <div>
                      {active === 2 && (
                        <Image
                        src="/habby2.jpg"
                        alt="image-2"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg transition-opacity duration-500"
                        />
                      )}
                    </div>
                    

                    <div>
                      {active === 3 && (
                        <Image
                        src="/habby3.jpg"
                        alt="image-2"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg transition-opacity duration-500"
                        />
                      )}
                    </div>
                </div>
             </div>
        </div>
      </div>

      <div className="w-full h-200 bg-blue-500 text-white pt-10">
        <h1 className="text-4xl font-semibold text-center">From message to action</h1>
        <p className="mt-3 text-xl text-center">Quickly turn communication from your favorite apps into to-dos, keeping all<br/> your discussions and tasks organized in one place.</p>

        <div className="w-full flex justify-center items-center mt-15">
            <div className=" bg-white flex w-270 h-95 p-8 rounded-md">
              <Image
              src="/email-todos.webp"
              alt="image"
              width={600}
              height={500}
              />

              <div className="ml-15 mt-15">
                <h1 className="text-lg font-semibold text-gray-700">EMAIL MAGIC</h1>
                <p className="text-gray-700 text-lg mt-10">Easily turn your emails into to-dos! Just<br/> forward them to your Trello Inbox, and<br/> they’ll be transformed by Atlassian<br/> Intelligence (AI) into organized to-dos<br/> with all the links you need.</p>
            </div>

            </div>
            
        </div>
      </div>
    </main>
  );
}

