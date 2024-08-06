
'use-client'

import Image from "next/image";
import logo  from '../assets/logo.png'

export default function Home() {
  return (
   
   <h1>Pantry tracker</h1>   ,
   <Image
      src={logo}
      width={100}
      height={100}
      alt="Picture of the author"
    />
  
  );
}
