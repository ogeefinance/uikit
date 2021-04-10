import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M12,2A10,10,0,0,0,2,12,10.38,10.38,0,0,0,9.66,22V18.69a2.42,2.42,0,0,1-1.28,0A2.45,2.45,0,0,1,7,17.49c-.23-.38-.63-.8-1-.77L5.8,15.56A2.4,2.4,0,0,1,8,16.89a1.31,1.31,0,0,0,.76.65,1.63,1.63,0,0,0,1-.09A2.7,2.7,0,0,1,10.39,16h0c-2.61-.39-3.64-1.77-4.06-2.86a4.59,4.59,0,0,1,.72-4.4.16.16,0,0,0,0-.12A3.79,3.79,0,0,1,7.2,6.1a4,4,0,0,1,2.22.83l.28.17c.12.07.08,0,.2,0A8.79,8.79,0,0,1,12,6.83a8.69,8.69,0,0,1,2.13.3h.09l.08,0c2-1.23,2-.83,2.5-1a3.88,3.88,0,0,1,.11,2.56,4.8,4.8,0,0,1,.76,4.52c-.42,1.09-1.45,2.47-4.06,2.86h0a2.56,2.56,0,0,1,.73,1.83V22A10.38,10.38,0,0,0,22,12,10,10,0,0,0,12,2Z" transform="translate(-2 -2)"/>
    </Svg>
  );
};

export default Icon;