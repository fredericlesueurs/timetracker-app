import { BreadcrumbLink } from "@/models/BreadcrumbLink";
import Link from "next/link";

type BreadcrumbProps = {
    className?: string;
    breadcrumbLinks: BreadcrumbLink[];
};

export default function Breadcrumb({ breadcrumbLinks, className }: BreadcrumbProps) {
    return (
        <div className={`text-sm breadcrumbs flex-1 ml-3 ${className}`}>
            <ul>
                { breadcrumbLinks.map((breadcrumbLink, key) => !breadcrumbLink.href ? <li key={key}>{breadcrumbLink.name}</li> : <li key={key}><Link href={`${breadcrumbLink.href}`}>{breadcrumbLink.name}</Link></li>) }
            </ul>
        </div>
    );
}