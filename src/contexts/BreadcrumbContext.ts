import {createContext} from "react";
import { BreadcrumbLink } from "@/models/BreadcrumbLink";

type BreadcrumbContextType = {
  breadcrumb: BreadcrumbLink[],
  defineBreadcrumb: (list: BreadcrumbLink[]) => void,
}

const BreadcrumbContext = createContext<BreadcrumbContextType>({
  breadcrumb: [],
  defineBreadcrumb: (list: BreadcrumbLink[]) => {},
});

export default BreadcrumbContext;