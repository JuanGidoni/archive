import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./Pages";
import { DataProvider } from "./Context/DataContext";
import { Nav } from "./Organisms";
import { UnOrderList } from "./Molecules";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light" />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
