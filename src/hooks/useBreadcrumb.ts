import {BreadcrumbLink} from '@/models/BreadcrumbLink';
import {useContext, useEffect} from "react";
import BreadcrumbContext from '../contexts/BreadcrumbContext';

export default function useBreadcrumb(links: BreadcrumbLink[]) {
  const { defineBreadcrumb } = useContext(BreadcrumbContext);

  useEffect(() => {
    defineBreadcrumb(links);
  }, [defineBreadcrumb, links]);

  useEffect(() => () => {
    defineBreadcrumb([]);
  }, [defineBreadcrumb])
}