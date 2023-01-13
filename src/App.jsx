import React from "react";
import ModalDialog from "./lib/index.jsx";

let background = {};
let styleText = {};
let containerModal = {};

const App = () => {
  return (
    <div>
      <ModalDialog
        text="Modal Dialog Test okokok"
        background={background}
        containerModal={containerModal}
        styleText={styleText}
      />
    </div>
  );
};

export default { App };
