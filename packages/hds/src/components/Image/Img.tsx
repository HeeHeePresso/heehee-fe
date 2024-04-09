import React,{forwardRef, useState} from 'react';
import { container, imageStyle, ratios } from './Image.css';
import Image from 'next/image';
import noImage from "../../../../../src/Images/noImage.png";

interface Image {
  src: string;
  ratio: "1/1" | "16/9" | "3/4";
}

const Img = forwardRef<HTMLImageElement, Image>(({src, ratio}, ref) => {
  //이미지 비율 입력받았을때 할 것
  // const [w,h] = ratio.split("/").map(Number);

  //이미지 src를 저장하는 useState
  const [imgSrc,setImgSrc] = useState(src);
  //이미지 src 새로 저장하는 setState함수
  const changeSrcFunc = () => {
    setImgSrc(noImage);
  } 

  return (
    <div className={container}>
      <Image ref={ref} src={imgSrc} alt="img" width={100} height={100} className={`${ratios[ratio]} ${imageStyle}`} onError={changeSrcFunc}/>
    </div>
  );
});

export default Img;