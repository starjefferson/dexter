"use client"
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { LuView } from "react-icons/lu";
import { db } from "@/config/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Guestlist () {
    const {data:session} = useSession();
    const [guests,setGuests] = useState([]);
    const [loading, setLoading] = useState(true);
 
    useEffect(()=>{
        const fetchGuest = async () => {
            try {
              const q = query(collection(db, "guests"),where("user", "==", session?.user?.id));
              const snapShot = await getDocs(q);
              
              const compileGuest = [];
              snapShot.docs.forEach((doc)=>{
                compileGuest.push({
                    id: doc.id,
                    data: doc.data(),
                });
              });
              setGuests(compileGuest);
              console.log(compileGuest);
            }
            catch (errors){
                console.error("Error fetching guest lists", errors)
            }
            finally {
                setLoading(false);
            }
        }
        if(session) {
           fetchGuest();
        }
    },[session])
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <CircularProgress/>
            </div>
        )
    }

    return (
        <main className="min-h-screen max-w-5xl mx-auto my-10 p-4">
            <h1 className="text-4xl mb-10 text-center font-bold text-gray-700">All Guests</h1>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead sx={{backgroundColor:"#63b3ed"}}>
                        <TableRow>
                            <TableCell>FullName</TableCell>
                            <TableCell>PhoneNumber</TableCell>
                            <TableCell>RoomoomType</TableCell>
                            <TableCell>RoomNumber</TableCell>
                            <TableCell>CheckInDate</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {guests.map((guest)=>
                        <TableRow key={guest.id}>
                            <TableCell>{guest.data.fullname}</TableCell>
                            <TableCell>{guest.data.phoneNumber}</TableCell>
                            <TableCell>{guest.data.roomType}</TableCell>
                            <TableCell>{guest.data.roomNumberr}</TableCell>
                            <TableCell>{guest.data.checkInDate}</TableCell>
                            <TableCell><LuView className="text-2xl cursor-pointer"/></TableCell>
                            
                        </TableRow>
                        )}
                    </TableBody>
                </Table>

            </TableContainer>
        </main>
    )
}