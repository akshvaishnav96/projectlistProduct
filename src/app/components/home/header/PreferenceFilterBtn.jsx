import React from "react";
import NavBarDropDownButton from "../NavBarDropDownButton";
import AnchorTag from "../AnchorTag";
import { v4 as uuidv4 } from "uuid";
export default function PreferenceFilterBtn({ filters, name, prefArr }) {
  return (
    <NavBarDropDownButton
      name={name}
      fetchData={prefArr.map((preference, i) => {
  
        return (
          <AnchorTag
            key={uuidv4()}
            i={i}
            name={preference.preference_name}
            data={
              <>
                {" "}
                <div>
                  {
                    filters.electricity.your_preference[preference]
                      .preference_value
                  }
                </div>
                <div className="text-red-200">
                  {filters.electricity.your_preference[preference].count}
                </div>
              </>
            }
          />
        );
      })}
    />
  );
}
