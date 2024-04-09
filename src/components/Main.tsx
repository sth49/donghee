import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main id="main" role="main">
      {children}
    </main>
  );
};

export default Main;
