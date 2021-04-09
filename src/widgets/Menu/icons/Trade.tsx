import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M17.21,22a2,2,0,0,1-.78-.16A2,2,0,0,1,15.2,20V18.33a.79.79,0,1,1,1.57,0V20a.42.42,0,0,0,.73.31L20,17.86a1.58,1.58,0,0,0,0-2.27L17.5,13.14a.43.43,0,0,0-.47-.09.42.42,0,0,0-.26.41V15.2A.78.78,0,0,1,16,16H6.69a.78.78,0,0,0,0,1.56H7.94a.79.79,0,0,1,0,1.57H6.69a2.35,2.35,0,1,1,0-4.69H15.2v-1a2,2,0,0,1,1.23-1.85A2,2,0,0,1,18.6,12l2.46,2.45a3.15,3.15,0,0,1,0,4.49L18.6,21.41a2,2,0,0,1-1.39.59ZM13.8,18.33a.78.78,0,0,0-.78-.79H10.91a.79.79,0,0,0,0,1.57H13A.78.78,0,0,0,13.8,18.33ZM7.6,12.39a2,2,0,0,0,1.24-1.86V9.65h8.47a2.34,2.34,0,1,0,0-4.68H8.84V4A2,2,0,0,0,7.6,2.16a2,2,0,0,0-2.2.42L2.94,5A3.09,3.09,0,0,0,2,7.27a3.13,3.13,0,0,0,.94,2.25L5.4,12a2,2,0,0,0,1.41.58,2.17,2.17,0,0,0,.79-.15ZM7,3.6A.42.42,0,0,1,7.27,4V5.75a.78.78,0,0,0,.78.78h9.26a.78.78,0,0,1,0,1.56H8.05a.78.78,0,0,0-.78.78v1.66a.42.42,0,0,1-.28.41.42.42,0,0,1-.49-.09L4,8.41a1.58,1.58,0,0,1-.48-1.14A1.6,1.6,0,0,1,4,6.13L6.5,3.69a.42.42,0,0,1,.31-.13A.4.4,0,0,1,7,3.6Z"/>
      <rect width="24" height="24" fill="none"/>
    </Svg>
  );
};

export default Icon;
