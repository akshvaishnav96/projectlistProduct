import React from "react";
import NavBarDropDownButton from "../NavBarDropDownButton";
import AnchorTag from "../AnchorTag";
import { v4 as uuidv4 } from "uuid";

export default function ProvidersFilterBtn({ filters, name }) {
  return (
    <NavBarDropDownButton
      name={name}
      fetchData={filters.electricity.provider_options.map((provider, i) => (
        <AnchorTag
          id={provider.provider_id}
          i={i}
          key={uuidv4()}
          name={name}
          data={
            <>
              {" "}
              <div>{provider.provider_name}</div>
              <div className="text-red-200">{provider.count}</div>
            </>
          }
        />
      ))}
    />
  );
}
