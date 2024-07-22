import React from "react";
import Link from "next/link";
import PlanName from "./PlanName";
import Button from "./Button";

export default function Elec_PlanName({ electricityData }) {
  return (
    <div className=" my-4 mx-2 flex justify-between items-center flex-col text-gray-500">
      <PlanName planName={electricityData.plan_name} />

      <Link href={`/${electricityData.id}`}>
        <Button text={"All details"} classData={"bg-blue-500 px-4 py-2"} />
      </Link>
    </div>
  );
}
