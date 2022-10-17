import { useState, useEffect } from "react";
import TableList from "./Components/TableList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://swapi.dev/api/films");
      const json = await res.json();
      setData(json.results);
    };
    fetchData();
  }, [setData]);

  return (
    <div>
      <TableList items={data} />
    </div>
  );
}

export default App;
