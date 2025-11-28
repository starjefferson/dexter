"use client"
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
    fullname: yup.string().required("Fullname is required").min(5),
    phone: yup.number().required("Phone number is required").min(11),
    roomType: yup.string().oneOf(["standard-room", "special-room", "deluxe-room", "super-deluxe-room"]),
    roomNumber: yup.string().oneOf(["001", "002", "003", "004"]),
    checkInDate: yup.date().required("Date is required"),

})

export default function AddGuest() {
    const {handleSubmit,handleChange,values,errors,touched} = useFormik({
        initialValues: {
            fullname: '',
            phone: '',
            roomType: '',
            roomNumber: '',
            checkInDate: '',
        },
        onSubmit: () => {},
        validationSchema: schema,
    });
    return (
        <main className="min-h-screen flex justify-center px-4 md:px-10 lg:px-16 lg:py-12">
            <div className="w-full md:w-[350px] h-auto rounded-md shadow-md px-4 ">
                <h1 className="text-center text-3xl font-bold text-gray-700">New Guest</h1>
                <p className="text-center text-sm">Fill form to Book</p>
                <form className="flex flex-col gap-3 mt-5">
                    <div>
                        <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder="Enter Fullname"
                        label="Fullname"
                        id="fullname"
                        />
                    </div>
                    <div>
                        <TextField
                        fullWidth
                        size="small"
                        type="tel"
                        placeholder="Enter PhoneNumber"
                        label="Phone Number"
                        id="phone"/>
                    </div>
                    <FormControl>
                        <InputLabel id="roomType-label">Room Type</InputLabel>
                        <Select 
                        labelId="roomType-label" 
                        name="roomType"
                        size="small"
                        label="RoomType"
                        id="roomType">
                            <MenuItem value="standard-room" >Standard room</MenuItem>
                            <MenuItem value="special-room" >Special room</MenuItem>
                            <MenuItem value="deluxe-room">Deluxe room</MenuItem>
                            <MenuItem value="super-deluxe-room">Super-deluxe room</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel id="roomNumber-label">Room Number</InputLabel>
                        <Select 
                        labelId="roomNumber-label" 
                        name="roomNumere"
                        size="small"
                        label="RoomNumber"
                        id="roomNumber">
                            <MenuItem value="001" >001</MenuItem>
                            <MenuItem value="002" >002</MenuItem>
                            <MenuItem value="003">003</MenuItem>
                            <MenuItem value="004">004</MenuItem>
                        </Select>
                    </FormControl>

                    <div>
                        <TextField
                        fullWidth
                        size="small"
                        InputLabelProps={{shrink:true}}
                        label="check-in date"
                        type="date"
                        id="checkInDate"/>
                    </div>
                    <button type="submit" className="text-white w-full rounded-md bg-blue-500 h-8 text-sm font-">
                        Book Now</button>
                </form>
            </div>
        </main>
    );
}