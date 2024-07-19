import { v4 as uuidv4 } from "uuid";
import ProviderLogo from "./ProviderLogo";
import RatesDivMain from "./RatesDivMain";
import ProductBenifits from "./ProductBenifits";
import Description from "./Description";
import YellowButton from "./YellowButton";
import Elec_PlanName from "./Elec_PlanName";
import Banner from "./Banner";

export function Product({ electricityData, providerData }) {
  return (
    <>
      <div key={uuidv4()} className="my-5 mx-5 m-auto">
        <div className="border rounded-lg p-4 shadow-md ">
          {electricityData.view_discount ? (
            <Banner text={electricityData.view_discount} />
          ) : (
            ""
          )}
          <div className="main flex-wrap justify-between flex-wrap md:flex items-center">
            <ProviderLogo src={providerData.logo} />
            <Elec_PlanName electricityData={electricityData} />
            <ProductBenifits electricityData={electricityData} />
            <RatesDivMain electricityData={electricityData} />
          </div>
          <Description desc={electricityData.show_desc} />
          <YellowButton text={"Switch & Save Today"} />
        </div>
      </div>
    </>
  );
}
