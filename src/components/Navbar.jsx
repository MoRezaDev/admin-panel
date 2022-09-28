import React, { useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";

//icons......
import { HiUser } from "react-icons/hi";
import { useState } from "react";

//import Theme Context.....................
import { themeContext } from "../context/ThemeContextProvider";

//styling componentsss................
const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background-color: ${(props) =>
    props.themeContent === "light" ? "rgb(236, 239, 241)" : "rgb(55, 71, 79)"};
  position: fixed;
  top: 0;

  @media (max-width: 960px) {
    padding: 20px;
  }
`;

const Nav2 = styled.div`
  .notification-container {
    position: absolute;
    top: 65px;
    right: 30px;
    width: 360px;
    height: 250px;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1rem;
    z-index: 12;
    @media (max-width: 400px) {
      width: 100vw;
      margin: auto;
      right: 0;
    }
    > .items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      position: relative;
      @media (max-width: 335px) {
        gap: 1rem;
      }
      .close-icon {
        position: absolute;
        right: 0;
        top: -2px;
        cursor: pointer;
      }
      .item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0 0.5rem;
        > .icon {
          min-width: 40px;
          min-height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(236, 239, 241);
          border-radius: 50%;
        }
        > .content {
          display: flex;
          flex-direction: column;
        }
      }
      .notification {
        width: 100%;
        background-color: rgb(236, 239, 241);
        padding: 1rem;
        margin-top: 10px;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        color: black;
        @media (max-width: 335px) {
          margin-top: -5px;
        }
      }
    }
  }
`;

const BurgerMenuContainer = styled.div`
  cursor: pointer;
`;

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

function Navbar({ sideChangeHandler }) {
  const [notificationShow, setNotificationShow] = useState(false);
  const { theme } = useContext(themeContext);

  return (
    <>
      <NavbarContainer themeContent={theme}>
        <BurgerMenuContainer>
          <GiHamburgerMenu
            color={theme === "dark" && "#cfd8dc"}
            onClick={sideChangeHandler}
          />
        </BurgerMenuContainer>
        <NotificationContainer
          onClick={() => setNotificationShow(!notificationShow)}
        >
          <IoMdNotificationsOutline color={theme === "dark" && "#cfd8dc"} />
          <span></span>
        </NotificationContainer>
      </NavbarContainer>
      <Nav2>
        <AnimatePresence>
          {notificationShow && (
            <OutsideClickHandler
              onOutsideClick={() => setNotificationShow(false)}
            >
              <motion.div
                key="notification-key"
                initial={{ opacity: 0, transform: "scale(0.5)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                exit={{ opacity: 0, transform: "scale(0.5)" }}
                className="notification-container"
              >
                <div className="items">
                  <div
                    onClick={() => setNotificationShow(false)}
                    className="close-icon"
                  >
                    <GrFormClose size={25} />
                  </div>
                  <div className="item">
                    <div className="icon">
                      <HiUser size={25} />
                    </div>
                    <div className="content">
                      <span>
                        You have <h4 style={{ display: "inline-block" }}>6 </h4>{" "}
                        undread messages
                      </span>
                      <span style={{ color: "#607d8b", fontSize: "14px" }}>
                        over 8 month ago
                      </span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <HiUser size={25} />
                    </div>
                    <div className="content">
                      <span>
                        <h4 style={{ display: "inline-block" }}>
                          Reza Akshabi
                        </h4>{" "}
                        has written a new comment on your profile
                      </span>
                      <span style={{ color: "#607d8b", fontSize: "14px" }}>
                        over 8 month ago
                      </span>
                    </div>
                  </div>
                  <div className="notification">
                    <span>See all notifications</span>
                  </div>
                </div>
              </motion.div>
            </OutsideClickHandler>
          )}
        </AnimatePresence>
      </Nav2>
    </>
  );
}

export default Navbar;
