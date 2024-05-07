import React, { forwardRef, useState } from 'react';
import { container, imageStyle, ratios } from './Image.css';
import Image from 'next/image';
import noImage from '../../../../../src/Images/noImage.png';

interface Image {
  src: string;
  ratio: '1/1' | '16/9' | '3/4';
}

const Img = forwardRef<HTMLImageElement, Image>(({ src, ratio }, ref) => {
  const [imgSrc, setImgSrc] = useState(src);
  const changeSrcFunc = () => {
    setImgSrc(noImage);
  };

  return (
    <div className={container}>
      <Image
        ref={ref}
        src={imgSrc}
        alt="img"
        width={100}
        height={100}
        className={`${ratios[ratio]} ${imageStyle}`}
        onError={changeSrcFunc}
      />
    </div>
  );
});

export default Img;
