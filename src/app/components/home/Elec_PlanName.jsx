import React from "react";
import Link from "next/link";
import PlanName from "./PlanName";
import ButtonBlue from "./ButtonBlue";

export default function Elec_PlanName({ electricityData }) {
  return (
    <div className=" my-4 mx-2 flex justify-between items-center flex-col text-gray-500">
      <PlanName planName={electricityData.plan_name} />

      <Link href={`/${electricityData.id}`}>
        <ButtonBlue text={"All details"} />
      </Link>
    </div>
  );
}
