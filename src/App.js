import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Auth from "./routes/auth/auth";
import Shop from "./routes/shop/shop";
import Nav from "./routes/nav/nav";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
