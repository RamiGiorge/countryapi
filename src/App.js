import { useState } from "react";
import Card from "./components/Card/Card";
import useFetch from "./sevices/useFetch";

function App() {

  const [dark, setDark] = useState(false)
  const [n, setN] = useState(20)
  const { isLoading, error, countries } = useFetch()

  return (
    <main className={dark ? 'dark-mode' : ''}>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section className="countryGrid">{countries?.map((country, i) => (
        i < n ? <Card country={country} key={country.name.common} /> : null
      ))}
      </section>
      <button onClick={() => setN(prev => prev + 20)}>fetch more</button>
      <button onClick={() => setDark(!dark)}>Toggle Dark</button>
    </main>
  );
}

export default App;
