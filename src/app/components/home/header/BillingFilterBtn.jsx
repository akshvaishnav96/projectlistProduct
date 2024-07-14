import NavBarDropDownButton from "../NavBarDropDownButton";
import AnchorTag from "../AnchorTag";
import { v4 as uuidv4 } from "uuid";

export default function BillingFilterBtn({ filters, name }) {
  return (
    <NavBarDropDownButton
      name={name}
      fetchData={filters.electricity.billing_options.map(
        (billing_option, i) => (
          <AnchorTag
            key={uuidv4()}
            i={i}
            data={
              <>
                {" "}
                <div>{billing_option.billing_option}</div>
                <div className="text-red-200">{billing_option.count}</div>
              </>
            }
          />
        )
      )}
    />
  );
}
