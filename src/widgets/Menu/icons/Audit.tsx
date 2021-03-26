import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
    <path d="M8.93,13.36c1.34,2.62,2.45,4.8,2.45,4.84a14.29,14.29,0,0,1-1.27-.87,10,10,0,0,1-3.64-6.95,8,8,0,0,1,0-1.74C6.5,8.64,7.32,10.19,8.93,13.36Z" transform="translate(-2 -2)"/>
    <path d="M13.49,15.51C12.69,17,12,18.22,12,18.22S9.24,12.89,9.22,12.8a18.53,18.53,0,0,1,2.85-.07c1.57,0,2.86,0,2.86,0Z" transform="translate(-2 -2)"/>
    <path d="M17.56,8.62A14,14,0,0,1,17.47,11a9.92,9.92,0,0,1-4.31,6.84c-.43.29-.52.36-.52.27l1.54-2.87c.84-1.6,1.93-3.69,2.42-4.73S17.53,8.62,17.56,8.62Z" transform="translate(-2 -2)"/>
    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM7.78,7c.06,0,.93-.35,2.15-.71L12,5.69l2.13.64A20.43,20.43,0,0,1,16.31,7a.22.22,0,0,1,.05.16.34.34,0,0,1-.25.24s-1-.26-2.09-.62L12,6.2l-2,.6c-1.09.33-2,.62-2,.62a.16.16,0,0,1-.16,0C7.69,7.36,7.67,7.13,7.78,7Zm9.64,6.16a10.21,10.21,0,0,1-3.91,5,12.09,12.09,0,0,1-1.44.86c-.07.05-.29-.06-.6-.24a10.4,10.4,0,0,1-5.54-9.4,5.45,5.45,0,0,1,.2-1.85.22.22,0,0,1,.2,0c.18,0,0-.36,2,3.58l.62,1.22,3.16,0,3.15,0,1.14-2.33,1.15-2.4a.33.33,0,0,1,.36,0A3.76,3.76,0,0,1,18,8.69,11.72,11.72,0,0,1,17.42,13.18Z" transform="translate(-2 -2)"/>
    <path d="M5.77,4.56A.34.34,0,0,1,5.67,4,30.4,30.4,0,0,1,8.9,2.93L12,2l3.2,1A27.3,27.3,0,0,1,18.46,4a.3.3,0,0,1,.07.23.53.53,0,0,1-.37.37c-.07,0-1.47-.4-3.13-.93l-3-.94-3,.9c-1.63.5-3,.93-3,.93s-.13,0-.23,0Z" transform="translate(-2.9 -2)"/>
    </Svg>
  );
};

export default Icon;