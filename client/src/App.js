import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import CarPage from "./pages/carPage/CarPage"
import CreateCarPage from "./pages/createCarPage/CreateCarPage"
import { paths } from "./paths"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={ <HomePage /> } />
        <Route path={`${paths.car}/:id`} element={ <CarPage /> } />
        <Route path={paths.createCar} element={ <CreateCarPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
