import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Suspense } from "react";

const App = () => {
  return (
    <>
      <Header />

      {/* ✅ Lazy loading wrapper */}
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default App;