import { useState } from "react";
import "./App.css";
import { DataStore } from "./app/datafea";

function App() {
  const { data, loading, error, DataFetch } = DataStore();

  return (
    <div>
      <button onClick={DataFetch}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default App;
