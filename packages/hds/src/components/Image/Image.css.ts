import { style} from '@vanilla-extract/css';

export const container = style({
   width: '100%',          
 });
 
 export const imageStyle = style({
   width: '100%',          
   height: 'auto',         
   backgroundColor : "black",
 });
 
 export const ratios = {
   '16/9': style({
     aspectRatio : "16/9"
   }),
   '3/4': style({
      aspectRatio : "3/4"
   }),
   '1/1': style({
      aspectRatio : "1/1"
   }),
 };
