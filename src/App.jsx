import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Body from "./components/Body";
import appStore from "./utils/appStore"; // <-- Import your Redux store
import Feed from "./components/Feed";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={appStore}>
      {" "}
      {/* <-- Pass the store here */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
