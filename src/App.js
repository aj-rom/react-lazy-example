import React, { lazy, Suspense } from "react";
// import Header from "./Header";
// import Body from "./Body";
const Header = lazy(() => import("./Header"));
const Body = lazy(() => import("./Body"));

export default function App() {
  const handleFallback = () => {
    return <p>Loading...</p>;
  };

  // const noSuspense = () => {
  //   return (
  //       <div className="App">
  //         <Header />
  //         <Body />
  //       </div>
  //   );
  // };

  const suspense = () => {
    return (
        <Suspense fallback={handleFallback()}>
            <div className="App">
                <Header />
                <Body />
            </div>
        </Suspense>
    );
  };

  return suspense();
}
