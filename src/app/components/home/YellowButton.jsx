import React from "react";

export default function YellowButton({ text }) {
  return (
    <button className="bg-yellow-500 text-white w-full py-2 rounded">
      {text}
    </button>
  );
}
