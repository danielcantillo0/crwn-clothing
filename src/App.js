import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import SignIn from "./routes/sign-in/sign-in";
import Nav from "./routes/nav/nav";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/shop" />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
