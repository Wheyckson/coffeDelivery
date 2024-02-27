import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { History } from "./pages/History";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:orderId/success" element={<Success />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}