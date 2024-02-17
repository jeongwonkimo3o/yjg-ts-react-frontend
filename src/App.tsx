import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Main from "./pages/Main";
import Join from "./pages/auth/Join";
import FindMyAccount from "./pages/auth/FindMyAccount";
import Mypage from "./pages/Mypage";
import Master from "./pages/Master";
import Management from "./components/master/Management";
import Salon from "./pages/salon/Salon";
import SalonPending from "./pages/salon/SalonPending";
import SalonPrice from "./pages/salon/SalonPrice";
import FindResult from "./pages/auth/FindResult";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/findIdPw" element={<FindMyAccount />} />
        <Route path="/findIdPw/result" element={<FindResult />} />
        <Route path="/main" element={<Main />}>
          <Route path="mypage" element={<Mypage />} />
          <Route path="master" element={<Master />} />
          <Route path="master/management" element={<Management />} />
          <Route path="salon" element={<Salon />} />
          <Route path="salon/pending" element={<SalonPending />} />
          <Route path="salon/priceCorrection" element={<SalonPrice />} />
          <Route path="admin" element />
          <Route path="restaurant" element />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
