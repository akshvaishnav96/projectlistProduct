import React from "react";
import Paragraph from "./Paragraph";
import RatesPara from "./RatesPara";

export default function ProductBenifits({electricityData}) {
  return (
    <div className=" my-4 mx-2 flex justify-between  flex-col">
      <Paragraph data={electricityData.view_contract} />
      <Paragraph data={electricityData.view_bonus} />
      <Paragraph data={electricityData.view_benefit} />
      <Paragraph data={electricityData.contract_length} />
      <Paragraph data={electricityData.view_exit_fee} />

      {electricityData.rates.daily_supply_charges ? (
        <>
          {" "}
          <RatesPara
            text={"Daily supply charges:"}
            data={electricityData.rates.daily_supply_charges}
          />
        </>
      ) : (
        ""
      )}
      {electricityData.rates.plan_rate_limits[0].description ? (
        <>
          <RatesPara
            text={""}
            data={electricityData.rates.plan_rate_limits[0].description}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
