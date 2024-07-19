import { FilterContext } from "@/app/contaxt/context";
import { useContext } from "react";

export default function AnchorTagButton({ data, id, name, i }) {
  const filterHandler = useContext(FilterContext);
  let funcData = filterHandler();

  return (
    <>
      <button
        tabIndex={i}
        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
        role="menuitem"
        onClick={() => funcData(name, id)}
      >
        {data}
      </button>
    </>
  );
}
