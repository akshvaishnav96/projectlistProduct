import React from "react";

export default function RatesPara({ text, data }) {
  return (
    <p className="ml-2 text-sm text-black  bg-blue-100 p-2 m-2">
      {text}
      {data}
    </p>
  );
}
