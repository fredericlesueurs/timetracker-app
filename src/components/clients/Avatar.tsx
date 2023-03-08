import { useCallback } from "react";
import Client from "../../models/Client";
import profile from '@public/images/profile.png';
import Image from "next/image";

type AvatarProps = {
    client: Client;
    className?: string;
  };
  
  export default function Avatar({client, className}: AvatarProps) {
    const getInitials = useCallback((name: string): string => {
      return name.split(' ').map((element) => element.charAt(0)).join('');
    }, [])
  
    return (
      client.logo ?
        <div className="avatar">
          <div className={`mask mask-squircle ${className}`}>
            <Image src={profile} alt={`Logo de l'entreprise ${client.name}`}/>
          </div>
        </div> :
        <div className="avatar placeholder">
          <div className={`mask mask-squircle bg-primary uppercase ${className}`}>
            <span className={`text-white`}>{getInitials(client.name)}</span>
          </div>
        </div>
    );
  }