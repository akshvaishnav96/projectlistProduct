import React from "react";

export default function RateTag({ heading, data, tag }) {
  return (
    <div className="max-w-md mx-auto space-y-6 mx-3 shadow-md p-5">
      {heading} <span>⌽</span>
      <h1 className="font-bold text-3xl ">
        ＄{data}/<span className="font-thin text-lg">{tag}</span>
      </h1>
    </div>
  );
}
