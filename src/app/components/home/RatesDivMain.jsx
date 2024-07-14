import React from "react";
import RatesDiv from "./RatesDiv";

export default function RatesDivMain({ electricityData }) {
  return (
    <div className=" my-4 mx-2 flex text-gray-500  flex-wrap items-start ">
      {electricityData.expected_monthly_bill_amount ? (
        <RatesDiv
          data={electricityData.expected_monthly_bill_amount}
          heading={electricityData.expected_bill_amount_available}
          tag={"month"}
        />
      ) : (
        ""
      )}

      {electricityData.expected_annually_bill_amount ? (
        <RatesDiv
          data={electricityData.expected_annually_bill_amount}
          heading={electricityData.expected_bill_amount_available}
          tag={"year"}
        />
      ) : (
        ""
      )}
    </div>
  );
}
