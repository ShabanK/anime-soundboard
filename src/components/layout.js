import React from "react";
import { Button } from "reactstrap";

const Layout = () => {
  return (
    <div
      style={{
        backgroundRepeat: "none",
        backgroundPosition: "center",
        backgroundImage: "url('./bg/jojo1.jpg')",
        height: "164vh"
      }}
    >
      <header className="header"> ANIME SOUNDBOARD </header>
      <Button> I like testing </Button>
    </div>
  );
};

export default Layout;
