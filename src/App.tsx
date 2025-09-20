import Table from "./components/Table";
import "./App.css";

function App() {

  return (
      <div className="flex flex-col gap-3 p-6">
        <h1 className="font-semibold text-2xl px-3">Información Buses: </h1>
        <div className="p-3">
          <Table></Table>
        </div>
      </div>
  );
}

export default App;
