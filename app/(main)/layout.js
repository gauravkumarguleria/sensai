import React, { Suspense } from "react";
import { BarLoader, PacmanLoader } from "react-spinners";

function MainLayout({ children }) {
  //Redirect user after onboarding
  return (
    <div>
      <div className="container mx-auto mt-24 mb-20"></div>
      <Suspense fallback={<BarLoader />}>{children}</Suspense>
    </div>
  );
}

export default MainLayout;
