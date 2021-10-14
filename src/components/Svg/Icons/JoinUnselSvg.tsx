import React from "react";
import { SvgInputModel } from "../input.model";

function JoinUnselSvg(
  { height, width, className }: SvgInputModel = {
    height: "0",
    width: "0",
    className: "",
  }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width }}
      className={className}
      viewBox="0 0 52.492 36"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopColor="#545454"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M26.107 5.655c-4.52 0-8.186 4.278-8.186 9.556a9.863 9.863 0 004.351 8.444l-3 1.391-7.987 3.7a2.022 2.022 0 00-1.156 1.965v8.8a2.046 2.046 0 001.793 2.142h28.414a2.031 2.031 0 001.852-2.142v-8.8a2.021 2.021 0 00-1.156-1.965l-7.7-3.7-3.2-1.515a9.917 9.917 0 004.158-8.32c0-5.278-3.664-9.556-8.186-9.556zM12.9 9.016a6.319 6.319 0 00-4.659 2.257 8.74 8.74 0 00-1.939 5.44A8.271 8.271 0 009.895 23.6L.926 27.767A1.526 1.526 0 000 29.387v7.06c.048.936.534 1.723 1.446 1.737h5.963v-7.468a4.862 4.862 0 012.721-4.4l5.959-2.836a5.723 5.723 0 001.331-1.1 13.412 13.412 0 01-1.215-12.327 6.564 6.564 0 00-3.3-1.043zm26.622 0a6.323 6.323 0 00-3.413 1.156 13.52 13.52 0 01-1.158 12.1 6.117 6.117 0 001.568 1.328l5.729 2.721a4.943 4.943 0 012.662 4.4v7.467h6.134a1.6 1.6 0 001.448-1.737v-7.064a1.655 1.655 0 00-.926-1.62l-8.854-4.227a8.479 8.479 0 003.472-6.83 8.7 8.7 0 00-1.939-5.44 6.456 6.456 0 00-4.717-2.257z"
        transform="translate(0 -5.655)"
      ></path>
    </svg>
  );
}

export default JoinUnselSvg;
