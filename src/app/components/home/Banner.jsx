export default function Banner({ text }) {
  return (
    <>
      <div className="my-3 relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p
            className="text-sm leading-6 text-gray-900"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </div>
        <div className="flex flex-1 justify-end"></div>
      </div>
    </>
  );
}
