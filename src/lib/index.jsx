import { React, useState } from "react";
import Cross from "./img/Cross.svg";
import PropTypes from "prop-types";

const ModalDialog = (props) => {
  let modalBackground = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 5,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(64, 64, 64)",
    opacity: 0.8,
  };

  let styleBackground = { ...modalBackground, ...props.background };

  let modalContainer = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: "white",
    width: "35%",
    height: "50px",
    boxShadow: "2px 5px 5px 2px",
  };

  let styleContainerModal = { ...modalContainer, ...props.containerModal };

  let modalBtn = {
    position: "absolute",
    zIndex: 8,
    top: 0,
    right: 0,
    cursor: "pointer",
  };

  const [modal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      {modal ? (
        <div style={styleBackground} onClick={closeModal}>
          <div style={styleContainerModal}>
            <p style={props.styleText}>{props.text}</p>

            <img
              src={Cross}
              alt="cross-icon"
              onClick={closeModal}
              style={modalBtn}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

ModalDialog.propTypes = {
  background: PropTypes.object,
  containerModal: PropTypes.object,
  styleText: PropTypes.object,
  text: PropTypes.string,
};

export default ModalDialog;
