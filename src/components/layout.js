import React, { useState, useEffect } from "react";
import { Container, Button, Navbar } from "reactstrap";
import { IoIosRefresh } from "react-icons/io";

const Layout = () => {
  const [bg, setBg] = useState("./bg/jojo1.jpg");

  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          fontFamily: "Saira Stencil One",
          padding: 0
        }}
        fluid
      >
        <Navbar className="sticky-top navbar">
          <p className="banner">ANIME SOUNDBOARD</p>
          <IoIosRefresh className="iconRe" />
        </Navbar>
      </Container>
    </>
  );
};

export default Layout;

// {/* <div style={{ flex: 1, display: "flex", height: "10%" }}>
//   <div className="col-3" style={{ flex: 1 }}></div>
//   <div
//     className="col-6"
//     style={{
//       marginTop: "3%",
//       backgroundColor: "red",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "Saira Stencil One",
//       fontSize: "500%",
//       color: "whitesmoke"
//     }}
//   >
//     <p>ANIME SOUNDBOARD</p>
//   </div>
//   <div
//     className="col-3"
//     style={{
//       backgroundColor: "blue",
//       justifyContent: "center",
//       alignItems: "flex-end",
//       marginBottom: "1%"
//     }}
//   >
//     _
//   </div> */}
// {/* </div> */}

// {/* <header
//   className="header"
//   style={{
//     display: "flex",
//     marginTop: "3%",
//     justifyContent: "flex-end",
//     alignItems: "center"
//   }}
// >
//   {" "}
//   <p
//     style={{
//       width: "83%"
//     }}
//   >
//     ANIME SOUNDBOARD
//   </p>
//   <Button
//     className="danger"
//     style={{}}
//     onClick={() => setBg("./bg/jotaro.jpg")}
//   >
//     Change
//   </Button>
// </header> */}

/* <div
          style={{ height: "10%", backgroundColor: "white", display: "flex" }}
        >
          <div
            className="col-8"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "blue",
              color: "whitesmoke"
            }}
          >
            <h1 style={{ align: "center" }}>ANIME SOUNDBOARD</h1>
          </div>
          <div
            className="col-2"
            style={{
              backgroundColor: "yellow"
            }}
          ></div>
        </div> */
