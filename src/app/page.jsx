"use client";

import React, { useMemo, useState } from "react";
import "./globals.css";
import { useEffect, useCallback } from "react";

import { getProductsData } from "./utils/generateProducts";
import { getToken } from "./utils/generateToken";
import Loading from "./components/home/Loading";
import { Product } from "./components/home/Product";
import { v4 as uuidv4 } from "uuid";
import { FilterContext } from "./contaxt/context";
import { filterArr } from "./utils/getFilterElectricityData";
import { filterData } from "./utils/filterButtonNav/providers";

import MainDiv from "./components/home/header/MainDiv";

export default function Page() {
  const [response, setResponse] = useState("");
  const [electricityData, setElectricityData] = useState([]);
  const [providers, setProviders] = useState([]);
  const [filters, setFilters] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [elec_ids, setElecIds] = useState([]);
  const [electricityId, setElectricityId] = useState([]);
  const [elc_main, setElec_main] = useState([]);

  useEffect(() => {
    async function getProducts() {
      // get token from cookie or genereate new token
      let token = await getToken();

      // get products data
      let resp = await getProductsData();

      // if any response is false then return with no products found

      if (token.status == false || resp.status === false) {
        return <h1>No Products Found</h1>;
      }

      // set response on state variables
      setResponse(resp.status);
      const {
        elec_ids,
        distributors,
        filters,
        providers,
        All_plans,
        electricity,
      } = resp.data;

      setElecIds(elec_ids);
      setDistributors(distributors);
      setFilters(filters);
      setProviders(providers);
      setElectricityData(All_plans.electricity);
      setElectricityId(electricity);
      setElec_main(electricity);
    }
    getProducts();
  }, [response]);

  let filterHandler = useCallback(() => {
    return function filterHandler(name, id) {
      let data = filterArr(electricityData);

      let ids;

      switch (name) {
        case "Providers":
          ids = filterData(data, id, "provider_id");
          break;

        case "Contract Length":
          ids = filterData(data, id, "contract_length");
          break;

        case "Billing Options":
          ids = filterData(data, id, "billing_options");

          break;

        default:
          ids = elc_main;

          break;
      }

      setElectricityId((prev) => (prev = ids));
    };
  }, [electricityId]);

  // memorize the returning data
  const memoizedProducts = useMemo(
    () => (
      <>
        <MainDiv electricityId={electricityId} filters={filters} />

        {electricityId.map(({ id }) => (
          <div key={uuidv4()}>
            <Product
              key={uuidv4()}
              electricityData={electricityData[id]}
              providerData={providers[electricityData[id]?.provider_id]}
            />
          </div>
        ))}
      </>
    ),
    [electricityData, electricityId, providers, filters]
  );

  return (
    <>
      <FilterContext.Provider value={filterHandler}>
        {response ? memoizedProducts : <Loading />}
      </FilterContext.Provider>
    </>
  );
}
