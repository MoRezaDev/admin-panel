import React from "react";
import styled from "styled-components";

import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

//styling componentsss................
const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background-color: rgb(236, 239, 241);
  position: fixed;
  top: 0;
`;

const BurgerMenuContainer = styled.div``;

const NotificationContainer = styled.div`
  position: relative;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    top: -3px;
    right: -3px;
    width: 6px;
    height: 6px;
    background-color: rgb(41, 98, 255);
    border-radius: 50%;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <BurgerMenuContainer>
        <GiHamburgerMenu />
      </BurgerMenuContainer>
      <NotificationContainer>
        <IoMdNotificationsOutline />
        <span></span>
      </NotificationContainer>
    </NavbarContainer>
  );
}

export default Navbar;
