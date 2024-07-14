import React from "react";
import LoaderLogo from "../../svg/Loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
      <div>
        <h1 className="text-xl md:text-7xl font-bold flex items-center">
          L
          <LoaderLogo />
          ading . . .
        </h1>
      </div>
    </div>
  );
}
