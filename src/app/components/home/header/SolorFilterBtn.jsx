import React from "react";
import NavBarDropDownButton from "../NavBarDropDownButton";
import AnchorTag from "../AnchorTag";
import { v4 as uuidv4 } from "uuid";

export default function SolorFilterBtn({ filters, name }) {
  return (
    <NavBarDropDownButton
      name={name}
      fetchData={filters.electricity.solar_sorting.map((solar_sorting, i) => (
        <AnchorTag
          key={uuidv4()}
          i={i}
          data={
            <>
              {" "}
              <div>{solar_sorting.value}</div>
            </>
          }
        />
      ))}
    />
  );
}
