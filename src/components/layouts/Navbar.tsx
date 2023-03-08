import { BreadcrumbLink } from "@/models/BreadcrumbLink";
import Breadcrumb from "./Breadcrumb";
import profile from '@public/images/profile.png';
import Image from "next/image";

type NavbarProps = {
    breadcrumbLinks: BreadcrumbLink[];
};

export default function Navbar({breadcrumbLinks}: NavbarProps) {
    return (
        <div className="navbar bg-base-100 h-16 border-b-2">
            <div className="flex-none lg:hidden">
            <label htmlFor="drawer" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            </div>
            <div className="flex-1 lg:hidden">
                <a className="btn btn-ghost normal-case text-xl">️🐰⏱️ Time Tracker</a>
            </div>
            <Breadcrumb className="hidden lg:flex" breadcrumbLinks={breadcrumbLinks} />
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={profile} alt="Profile image"/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}