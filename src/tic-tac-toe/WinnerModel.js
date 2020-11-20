import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import WinnerImage from "../images/win.jpg";

function WinnderModal(props) {
  return (
    <Modal
      onClose={() => props.onClose}
      open={props.open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Congratulations</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={WinnerImage} wrapped />
        <Modal.Description>
          <Header>Winner!</Header>
          <p>Congratulations! You won the game!</p>
          <p>Do you want to start a new game?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={props.onClose}>
          Nah, I'm alright
        </Button>
        <Button
          content="Yeee, let go"
          labelPosition="right"
          icon="checkmark"
          onClick={props.onNewGame}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default WinnderModal;
