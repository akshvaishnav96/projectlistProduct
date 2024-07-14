"use client";

import React, { useMemo, useState } from "react";
import "./globals.css";
import { useEffect } from "react";

import { getProductsData } from "./utils/generateProducts";
import { getToken } from "./utils/generateToken";
import Loading from "./components/home/Loading";
import { Product } from "./components/home/Product";
import { v4 as uuidv4 } from "uuid";

import MainDiv from "./components/home/header/MainDiv";

export default function Page() {
  const [response, setResponse] = useState("");
  const [electricityData, setElectricityData] = useState([]);
  const [providers, setProviders] = useState([]);
  const [filters, setFilters] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [elec_ids, setElecIds] = useState([]);
  const [electricityId, setElectricityId] = useState([]);

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
    }
    getProducts();
  }, [response]);

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
    [electricityData, electricityId, providers,filters]
  );

  return <>{response ? <>{memoizedProducts}</> : <Loading />}</>;
}
