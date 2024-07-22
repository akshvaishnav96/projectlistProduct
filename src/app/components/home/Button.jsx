import React from "react";

export default function Button({ text, classData }) {
  return (
    <button className={`text-white py-2 rounded ${classData}`}>{text}</button>
  );
}
