import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/home/HomePage.tsx";
import AuthCallBackPage from "../src/pages/auth-callback/AuthCallBackPage.tsx";

function App() {
  // token => auth
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callback" element={<AuthCallBackPage />} />
      </Routes>
    </>
  );
}

export default App;
