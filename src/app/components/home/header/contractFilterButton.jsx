import React from "react";
import NavBarDropDownButton from "../NavBarDropDownButton";
import AnchorTag from "../AnchorTag";
import { v4 as uuidv4 } from "uuid";

export default function contractFilterButton({ filters, name }) {
  return (
    <NavBarDropDownButton
      name={name}
      fetchData={filters.electricity.contract_length_options.map(
        (contract, i) => (
          <AnchorTag
            key={uuidv4()}
            i={i}
            name={name}
            id={contract.contract_length}
            data={
              <>
                {" "}
                <div>{contract.contract_length}</div>
                <div className="text-red-200">{contract.count}</div>
              </>
            }
          />
        )
      )}
    />
  );
}
