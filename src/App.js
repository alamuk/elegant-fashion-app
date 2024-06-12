import { Route, Routes } from "react-router-dom";
//
// from user
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";
import Home from "./routes/home/Home";
import Authentication from "./routes/sing-in/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import Navigation from "./routes/navigation/Navigation";
// import { setCurrentUser } from "./store/user/user.action";
// App nested in <BrowserRouter> component
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);
  dispatch(checkUserSession());
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
