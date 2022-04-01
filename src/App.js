import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { QueryClientProvider, QueryClient } from 'react-query'
import NotFound from "./components/NotFound/NotFound";
import GlobalStyles from "./styles/global.styled";
import StyledMain from './styles/main.styled'
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.styled";

function App() {
  const client = new QueryClient()

  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <StyledMain>
          <Navbar />
          <QueryClientProvider client={client}>
            <Routes>
              <Route path="/countryapi" element={<Home />} />
              <Route path="/countryapi/country/:country" element={<CountryDetails />} />
              <Route path="/countryapi/NotFound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </QueryClientProvider>
        </StyledMain>
      </ThemeProvider>
    </Router>
  )
}

export default App;
