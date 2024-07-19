import React from "react";
import NavBarDropDownButton from "../NavBarDropDownButton";
import AnchorTag from "../AnchorTag";
import { v4 as uuidv4 } from "uuid";
export default function CostFilterBtn({ filters, name }) {
  return (
    <NavBarDropDownButton
      name={name}
      fetchData={filters.electricity.estimated_cost_sorting.map((cost, i) => (
        <AnchorTag
          key={uuidv4()}
          i={i}
          name={name}
          id={cost.value}
          data={
            <>
              {" "}
              <div>{cost.value}</div>
            </>
          }
        />
      ))}
    />
  );
}
