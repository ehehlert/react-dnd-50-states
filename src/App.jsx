import Grid from "./components/Grid";
import backgroundSVG from "./assets/cool-background.png";

function App() {
  return (
    <div
      className="bg-cover h-50vh bg-center flex flex-col"
      style={{
        backgroundImage: `url(${backgroundSVG})`,
      }}
    >
      <div className="flex-grow flex flex-col text-center">
        <h1 className="text-white font-bold text-4xl pt-5 ">ALL 50 STATES</h1>
      </div>
      <div className="container mx-auto p-4">
        <Grid />
      </div>
    </div>
  );
}

export default App;
