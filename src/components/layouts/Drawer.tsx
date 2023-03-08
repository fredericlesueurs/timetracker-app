import {HiOutlineHome, HiOutlineUserGroup} from "react-icons/hi2";
import Link from "next/link";

export default function Drawer() {
    return (
        <div className="drawer-side">
            <label htmlFor="drawer" className="drawer-overlay"></label>
            <aside className="bg-base-100 shadow-2xl w-80 border-r-2">
              <div className="hidden flex-row justify-items-center items-center h-16 border-b-2 border-primary lg:flex">
                <a className="btn btn-ghost normal-case text-2xl m-2">️🐇⏱️ Time Tracker</a>
                <div className="text-xs text-opacity-50 text-center h-full flex items-center justify-items-center"><span>v0.0.1</span></div>
              </div>
              <ul className="menu p-4 w-80 text-base-content">
                <li>
                  <Link className="flex gap-4" href="/">
                    <span className="flex-none">
                      <HiOutlineHome size="1.5em"/>
                    </span>
                    <span className="flex-1 text-sm">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-4" href="/clients">
                    <span className="flex-none">
                      <HiOutlineUserGroup size="1.5em"/>
                    </span>
                    <span className="flex-1 text-sm">
                      Clients
                    </span>
                  </Link>
                </li>
              </ul>
            </aside>
        </div>
    );
}