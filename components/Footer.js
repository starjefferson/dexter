import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";







export function Footer() {
    return (
        <footer className="grid grid-cols-1 py-5 bg-gray-100 md:grid-cols-2 md:py-15 lg:grid-cols-4 lg:px-20 lg:py-5">
            <div>
                <p className="text-2xl font-bold text-blue-500">Dexter</p>
                <p className="font-thin">About us</p>
                <p className="font-thin">Contactus </p>
                <p className="font-thin">Location</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-blue-500">Legal</p>
                <p className="font-thin">Privacy Policy</p>
                <p className="font-thin">Cookies</p>
                <p className="font-thin">Terms of use</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-blue-500">Business</p>
                    <p className="Font-thin">Customer</p>
                    <p className="font-thin">Management</p>
                    <p></p>
            </div>
            <div>
                <p className="text-2xl font-bold text-blue-500">Socials</p>
                <div className="flex gap-2 mt-4">
                   <FaFacebookF className="text-xl text-blue-500"/>
                   <FaInstagram className="text-xl text-blue-500"/>
                   <FaLinkedin  className="text-xl text-blue-500" />
                </div>
            </div>


        </footer>
    )
}