import React from "react";
import { SvgInputModel } from "../input.model";

function DitoCreditsSvg(
  { height, width, className }: SvgInputModel = {
    height: "100%",
    width: "100%",
    className: "",
  }
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width }}
      className={className}
      data-name="Group 17"
      viewBox="0 0 15.543 10.574"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="gray"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linear-gradient)"
        d="M269.56 317.919v1.675c0 .569-1.517 1.043-3.382 1.043s-3.35-.458-3.35-1.027v-.19l-.032-1.327h.016c.253.49 1.644.869 3.319.869s3.4-.474 3.4-1.043h.032z"
        data-name="Path 179"
        transform="translate(-254.016 -310.063)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M152.594 112.074v1.659h-.032c0 .585-1.564 1.043-3.414 1.043a8.11 8.11 0 01-2.133-.237l-.032.032a3.692 3.692 0 00-1.169-.648v-.032l-.047-1.754c.111.537 1.58.964 3.366.964s3.429-.458 3.429-1.027z"
        data-name="Path 180"
        transform="translate(-140.893 -111.062)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M152.6 79.668c0 .569-1.565 1.027-3.429 1.027s-3.271-.427-3.382-.964c0-.016-.016-.047-.016-.063 0-.569 1.517-1.043 3.4-1.043 1.873-.016 3.427.458 3.427 1.043z"
        data-name="Path 181"
        transform="translate(-140.894 -78.624)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M261.8 265.514l-.017-.369-.033-1.51c.117.571 1.67 1.024 3.556 1.024s3.556-.487 3.606-1.074h.017v1.746h-.029c0 .6-1.619 1.108-3.59 1.108s-3.242-.405-3.51-.925z"
        data-name="Path 182"
        transform="translate(-253.386 -257.642)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M188.608 312.059a3.391 3.391 0 00.932-1.454h.079c.348.032.7.047 1.075.047h.158V311l.032 1.328h-.174a8.189 8.189 0 01-2.054-.221z"
        data-name="Path 183"
        transform="translate(-182.522 -302.97)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M221.267 254.386v.079l.032 1.47h-.158c-.4 0-.759-.016-1.106-.047h-.079a3.244 3.244 0 00.158-1.027 3.2 3.2 0 00-.079-.68h.079c.332.032.664.047 1.027.047l.142.079a.172.172 0 00-.016.079z"
        data-name="Path 184"
        transform="translate(-212.888 -248.471)"
      ></path>
      <path
        fill="url(#linear-gradient)"
        d="M186.029 167.737a8.11 8.11 0 002.133.237c1.849 0 3.414-.458 3.414-1.043h.032v1.869c-1.723 0-3.129.411-3.3.932l-.142-.079q-.522 0-1-.047h-.079a3.19 3.19 0 00-1.09-1.849z"
        data-name="Path 185"
        transform="translate(-179.858 -164.029)"
      ></path>
      <g
        fill="url(#linear-gradient)"
        data-name="Group 16"
        transform="translate(0 3.257)"
      >
        <path
          d="M6.748 168.585a3.459 3.459 0 00-1.122-1.885 3 3 0 00-1.2-.664 3.053 3.053 0 00-1-.158 3.4 3.4 0 10-.063 6.8 3.467 3.467 0 002.339-.9 3.432 3.432 0 00.948-1.5 3.147 3.147 0 00.158-1.011c.003-.223-.06-.46-.06-.682z"
          data-name="Path 186"
          transform="translate(0 -165.883)"
        ></path>
        <path
          d="M268.531 229.608v.032c-.047.553-1.58 1.011-3.414 1.011s-3.255-.427-3.366-.964v-.079a.2.2 0 01.016-.095c.174-.522 1.58-.932 3.3-.932h.047c1.868 0 3.417.458 3.417 1.027z"
          data-name="Path 187"
          transform="translate(-253.003 -226.684)"
        ></path>
      </g>
      <path
        fill="url(#linear-gradient)"
        d="M76.374 197.735a.522.522 0 11.522-.522.316.316 0 10.632 0 1.166 1.166 0 00-.838-1.106v-.126a.316.316 0 10-.632 0v.126a1.1 1.1 0 00-.838 1.106 1.16 1.16 0 001.154 1.154.522.522 0 110 1.043.526.526 0 01-.522-.522.316.316 0 10-.632 0 1.152 1.152 0 00.838 1.112v.253a.316.316 0 00.632 0V200a1.14 1.14 0 00.774-1.438 1.152 1.152 0 00-1.09-.827z"
        data-name="Path 188"
        transform="translate(-72.792 -191.692)"
      ></path>
    </svg>
  );
}

export default DitoCreditsSvg;