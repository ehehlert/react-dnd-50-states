export default function Grid() {
  return (
    <div className="p-1">
      <div
        data-identifier="main-card"
        className="rounded-lg shadow-md grid grid-cols-3 gap-4 p-4 bg-white border border-black"
      >
        <div className=" bg-blue-200 p-4">
          <h2>Capitals</h2>
        </div>
        <div className=" bg-blue-200 p-4 col-span-2">
          <h2>States</h2>
        </div>
      </div>
    </div>
  );
}
