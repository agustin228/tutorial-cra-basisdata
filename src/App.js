import { Route, Routes } from "react-router-dom";
import Login from "./components/login.component";
import ScheduleTable from "./components/table.component";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/schedule" element={<ScheduleTable />} ></Route>
      {/* <Route path="/order" element={<Order/>}>
                  Order
        </Route> */}
    </Routes>
  );
}

export default App;
