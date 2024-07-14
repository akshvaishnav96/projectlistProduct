export default function AnchorTagButton({ data, id, i, func }) {
  return (
    <>
      <button
        tabIndex={i}
        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
        role="menuitem"
      >
        {data}
      </button>
    </>
  );
}
