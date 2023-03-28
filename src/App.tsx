import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Router from "./components/Router";
import LocationBar from "./components/LocationBar/LocationBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LocationBar />
      <main>
        <Router />
      </main>
    </BrowserRouter>
  );
}

export default App;
