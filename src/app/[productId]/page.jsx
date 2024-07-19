"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useEffect } from "react";
import { getProductsData } from "../utils/generateProducts";
import Loading from "../components/home/Loading";
import { Product } from "../components/home/Product";
import { useRouter } from "next/navigation";

import Link from "next/link";
export default function Page({ params }) {
  const router = useRouter(); // Initialize useRouter
  const productId = params.productId;

  const [response, setResponse] = useState("");
  const [electricityData, setElectricityData] = useState([]);
  const [providers, setProviders] = useState([]);
  const [filters, setFilters] = useState([]);
  const [distributors, setDistributors] = useState([]);
  const [elec_ids, setElecIds] = useState([]);
  const [electricityId, setElectricityId] = useState([]);

  useEffect(() => {
    async function getProducts() {
      let resp = await getProductsData();
      setResponse(resp.status);
      let {
        elec_ids,
        distributors,
        filters,
        providers,
        All_plans,
        electricity,
      } = resp.data;

      electricity = electricity.filter((item) => item.id === Number(productId));
      if (electricity.length == 0) {
        router.push("/");
      }
      setElecIds(elec_ids);
      setDistributors(distributors);
      setFilters(filters);
      setProviders(providers);
      setElectricityData(All_plans.electricity);
      setElectricityId(electricity);
    }

    getProducts();
  }, [response, productId, router]);

  return (
    <>
      <Link href="/">
        <button className="px-5 py-2 bg-gray-200 m-5 rounded-2xl hover:bg-red-300">
          ⬅
        </button>
      </Link>
      {response ? (
        <>
          {electricityId.map(({ id }) => (
            <>
              <Product
                key={uuidv4()}
                electricityData={electricityData[id]}
                providerData={providers[electricityData[id]?.provider_id]}
                btnDisplay={false}
              />
            </>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
