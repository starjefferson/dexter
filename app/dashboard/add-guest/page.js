"use client"
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { db } from "@/config/firebase.config";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import {useState} from "react";
import {Dialog} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogContent} from "@mui/material";
import {DialogActions} from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import { redirect } from "next/navigation";


const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is required").min(5),
    phone: yup.number().required("Phone number is required").min(11),
    roomType: yup.string().oneOf(["standard-room", "special-room", "deluxe-room", "super-deluxe-room"]),
    roomNumber: yup.string().oneOf(["001", "002", "003", "004"]),
    checkInDate: yup.date().required("Date is required"),

})

export default function AddGuest() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const {data: session} = useSession();

    const handleClose = () => setOpen(false);

    const {handleSubmit,handleChange,values,errors,touched} = useFormik({
        initialValues: {
            fullname: '',
            phone: '',
            roomType: '',
            roomNumber: '',
            checkInDate: '',
        },
        onSubmit: async(values, {resetForm}) => {
            try {
                resetForm();
                setLoading(true);
                await addDoc(collection(db,"guests"),{
                    user: session.user?.id,
                    fullname: values.fullname,
                    phone: values.phone,
                    roomType: values.roomType,
                    roomNumber: values.roomNumber,
                    checkInDate: values.checkInDate,
                    timeCreated: new Date(),
                })
                setOpen(true)
                setLoading(false);
              resetForm();

            }
            catch (errors) {
                resetForm
                setLoading(false);
              console.log("Unable to book room:", errors);
            }
        },
        validationSchema: schema,
    });
    return (
        <main className="min-h-screen flex justify-center px-4 md:px-10 lg:px-16 lg:py-12">
            <div className="w-full md:w-[350px] h-auto rounded-md shadow-md px-4 ">
                <h1 className="text-center text-3xl font-bold text-gray-700">New Guest</h1>
                <p className="text-center text-sm">Fill form to Book</p>
                <form onSubmit={handleSubmit}
                 className="flex flex-col gap-3 mt-5">
                    <div>
                        <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder="Enter Fullname"
                        label="Fullname"
                        id="fullname"
                        onChange={handleChange}
                        value={values.fullname}
                        />
                        {touched.fullname && errors.fullname ? <span className="text-xs text-red-500">{errors.fullname} </span>: null}
                    </div>

                    <div>
                        <TextField
                        fullWidth
                        size="small"
                        type="tel"
                        placeholder="Enter PhoneNumber"
                        label="Phone Number"
                        id="phone"
                        onChange={handleChange}
                        value={values.phone}/>
                        {touched.phone && errors.phone ? <span className="text-xs text-red-500">{errors.phone} </span>: null}
                    </div>
                    <FormControl>
                        <InputLabel id="roomType-label">Room Type</InputLabel>
                        <Select 
                        labelId="roomType-label" 
                        name="roomType"
                        size="small"
                        label="RoomType"
                        id="roomType"
                        onChange={handleChange}
                        value={values.roomType}
                        >

                            <MenuItem value="standard-room" >Standard room</MenuItem>
                            <MenuItem value="special-room" >Special room</MenuItem>
                            <MenuItem value="deluxe-room">Deluxe room</MenuItem>
                            <MenuItem value="super-deluxe-room">Super-deluxe room</MenuItem>
                        </Select>
                        {touched.roomType && errors.roomType ? <span className="text-xs text-red-500">{errors.roomType} </span>: null}
                    </FormControl>

                    <FormControl>
                        <InputLabel id="roomNumber-label">Room Number</InputLabel>
                        <Select 
                        labelId="roomNumber-label" 
                        name="roomNumber"
                        size="small"
                        label="RoomNumber"
                        id="roomNumber"
                        onChange={handleChange}
                        value={values.roomNumber}
                        >
                        
                            <MenuItem value="001" >001</MenuItem>
                            <MenuItem value="002" >002</MenuItem>
                            <MenuItem value="003">003</MenuItem>
                            <MenuItem value="004">004</MenuItem>
                        </Select>
                        {touched.roomNumber && errors.roomNumber ? <span className="text-xs text-red-500">{errors.roomNumber} </span>: null}
                    </FormControl>

                    <div>
                        <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:true}}
                        label="check-in date"
                        type="date"
                        id="checkInDate"
                        onChange={handleChange}
                        value={values.checkInDate}/>

                        {touched.checkInDate && errors.checkInDate ? <span className="text-xs text-red-500">{errors.checkInDate} </span>: null}
                    </div>
                    <button type="submit" className="text-white w-full rounded-md bg-blue-500 h-8 text-sm font-">
                        {loading ? "Booking..." : "Book Now"}</button>
                </form>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <Typography>Room has being booked</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
                </DialogActions>
            </Dialog>

        </main>
    );
}