import React from "react";
import Image from "next/image";

interface Props {
    src : string;
    ratio? : {}; 
}
const Img = ({src}:Props) => {
    return <Image src={src} alt="img" width={200} height={200}/>
}
export default Img;
