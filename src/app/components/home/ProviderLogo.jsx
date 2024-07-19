import Image from "next/image";
import React from "react";

export default function ProviderLogo({ src }) {
  return (
    <div className=" my-4 mx-2 flex justify-between items-center flex-col">
      <Image
        src={src}
        alt=""
        srcSet=""
        width={300}
        height={200}
        style={{ height: "auto", width: "auto" }}
      />
    </div>
  );
}
