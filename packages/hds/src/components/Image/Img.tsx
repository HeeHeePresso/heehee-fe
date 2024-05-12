import React, { ComponentPropsWithoutRef, forwardRef, useEffect, useState } from 'react';
import { imageStyle, ratios } from './Image.css';
import Image from 'next/image';
import noImage from '../../systems/images/noImage.png';

interface Img extends ComponentPropsWithoutRef<typeof Image> {
  width: number;
  height: number;
  ratio: '1/1' | '16/9' | '3/4';
}

const Img = forwardRef<HTMLImageElement, Img>(({ src, ratio, alt, width, height }, ref) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const changeSrcFunc = () => {
    setImgSrc(noImage);
  };

  return (
    <Image
      ref={ref}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${ratios[ratio]} ${imageStyle}`}
      onError={changeSrcFunc}
    />
  );
});

export default Img;
