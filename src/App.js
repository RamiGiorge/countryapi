import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { QueryClientProvider, QueryClient } from 'react-query'
import NotFound from "./components/NotFound/NotFound";

function App() {
  const client = new QueryClient()

  return (
    <Router>
      <main>
        <Navbar />
        <QueryClientProvider client={client}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:country" element={<CountryDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </main>
    </Router>
  )
}

export default App;
