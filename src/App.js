import { useState } from "react";
import Card from "./components/Card/Card";
import useFetch from "./sevices/useFetch";

function App() {

  const [n, setN] = useState(20)
  const { isLoading, error, countries } = useFetch()

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {countries?.map((country, i) => (
        i < n ? <Card country={country} key={country.name.common} /> : null
      ))}
      <button onClick={() => setN(prev => prev + 20)}>fetch more</button>
    </div>
  );
}

export default App;
