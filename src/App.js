import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { QueryClientProvider, QueryClient } from 'react-query'
import { Suspense } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const client = new QueryClient()

  return (
    <Router>
      <main>
        <Navbar />
        <QueryClientProvider client={client}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:country" element={<CountryDetails />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </main>
    </Router>
  )
}

export default App;
