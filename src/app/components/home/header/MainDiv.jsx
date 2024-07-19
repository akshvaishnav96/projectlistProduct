import React from "react";
import Header from "./Heading";
import ContractFilterButton from "./contractFilterButton";
import ProvidersFilterBtn from "./ProvidersFilterBtn";
import BillingFilterBtn from "./BillingFilterBtn";
import SolorFilterBtn from "./SolorFilterBtn";
import CostFilterBtn from "./CostFilterBtn";
import PreferenceFilterBtn from "./PreferenceFilterBtn";
import { FilterContext } from "../../../contaxt/context";
import { useContext } from "react";

export default function MainDiv({ electricityId, filters }) {
  const filterHandler = useContext(FilterContext);
  let funcData = filterHandler();

  const prefArr = Object.keys(filters.electricity.your_preference).map(
    (item) => {
      return item;
    }
  );
  return (
    <div className="heading uppercase flex justify-around items-center p-4 uppercase ">
      <Header text={` electricity only (${electricityId.length})`} />

      <div>
        {filters.electricity.provider_options ? (
          <ProvidersFilterBtn filters={filters} name="Providers" />
        ) : (
          ""
        )}

        {filters.electricity.contract_length_options ? (
          <ContractFilterButton filters={filters} name="Contract Length" />
        ) : (
          ""
        )}

        {filters.electricity.billing_options ? (
          <BillingFilterBtn name="Billing Options" filters={filters} />
        ) : (
          ""
        )}
        {filters.electricity.solar_sorting ? (
          <SolorFilterBtn name="Solor Sorting" filters={filters} />
        ) : (
          ""
        )}
        {filters.electricity.estimated_cost_sorting ? (
          <CostFilterBtn name="Cost Sorting" filters={filters} />
        ) : (
          ""
        )}

        {prefArr.length > 0 ? (
          <PreferenceFilterBtn
            name="Preference"
            filters={filters}
            prefArr={prefArr}
          />
        ) : (
          ""
        )}

        <button
          className="mx-2 border p-2 rounded-2xl hover:bg-red-200"
          onClick={() => funcData()}
        >
          Remove Filters
        </button>
      </div>
    </div>
  );
}
