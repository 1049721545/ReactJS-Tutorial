import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default function NavBar() {
  const [activeItem, setActiveItem] = useState("Home");

  function handleNavSelect(e, { name }) {
    setActiveItem(name);
  }

  return (
    <Segment inverted color="purple">
      <Menu secondary stackable inverted color="purple">
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={handleNavSelect}
        />
        <Menu.Item
          name="History"
          active={activeItem === "History"}
          onClick={handleNavSelect}
        />
      </Menu>
    </Segment>
  );
}
