import React from "react";

import Header from "../modules/Header";
import Footer from "../modules/Footer";

export default function Default(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="wrapper">
      <Header setOpen={setOpen} />
      {props.children}
      <Footer />
    </div>
  );
}
