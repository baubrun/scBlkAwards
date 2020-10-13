import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, ModalHeader, ModalBody, } from "reactstrap";
import { messageModalState, resetModalMsg } from "../../app/redux/messageModal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    marginTop: "20%",
  },
}));

const MsgModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { message, error } = useSelector(messageModalState);
  const toggleModal = () => setShowModal(!showModal);
  const classes = useStyles(error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toggleModal();
    }
  }, [message]);

  return (
    <Modal
      className={classes.modal}
      isOpen={showModal}
      // toggle={() => toggleModal()}
    >
      <ModalHeader
        toggle={() => {
          toggleModal();
          dispatch(resetModalMsg());
        }}
      >
        Modal title
      </ModalHeader>
      <ModalBody
        style={{
          backgroundColor: error ? "red" : "green",
        }}
      >
        {message}
      </ModalBody>
    </Modal>
  );
};

export default MsgModal;
