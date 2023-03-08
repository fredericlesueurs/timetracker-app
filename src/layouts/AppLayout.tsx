import {ReactElement, useState} from "react";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Drawer from "../components/layouts/Drawer";
import Navbar from "../components/layouts/Navbar";
import BreadcrumbContext from "../contexts/BreadcrumbContext";
import { BreadcrumbLink } from "@/models/BreadcrumbLink";

type AppLayoutProps = {
  page: ReactElement;
}

export default function AppLayout({ page }: AppLayoutProps) {
    const [breadcrumb, setBreadcrumb] = useState<BreadcrumbLink[]>([]);

    return (
        <BreadcrumbContext.Provider value={{
            breadcrumb,
            defineBreadcrumb: (list: BreadcrumbLink[]) => setBreadcrumb(list),
          }}>
            <div className="drawer drawer-mobile">
              <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-gray-100">
                  <Navbar breadcrumbLinks={breadcrumb} />
                  <div className="p-5">
                    <Breadcrumb className="lg:hidden" breadcrumbLinks={breadcrumb} />
                    { page }
                  </div>
                </div>
                <Drawer />
            </div>
          </BreadcrumbContext.Provider>
    );
};