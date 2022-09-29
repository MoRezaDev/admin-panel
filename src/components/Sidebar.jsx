import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import { AnimatePresence, motion } from "framer-motion";

//importing icons....
import { HiHome } from "react-icons/hi";
import { MdOutlineBarChart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

//import context........
import { themeContext } from "../context/ThemeContextProvider";

//building style components.........
const SidebarContainer = styled.div`
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${(props) =>
    props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
  padding: 1.5rem 1rem;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};

  @media (max-width: 1280px) {
    transform: translateX(-100%);
  }
`;

const SideTitle = styled.div`
  margin: 20px 0;
  border-bottom: 1px silver solid;
  padding: 5px 0;
  margin-bottom: 50px;
  @media (max-height: 550px) {
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 1500;
  }
`;

const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Page = styled.div`
  a {
    text-decoration: none;
    padding: 1.3rem 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: ${(props) =>
      props.themeContent === "light" ? "#455a64" : "#cfd8dc"}; //
  }
  width: 95%;
  border-radius: 1rem;
  /* background-color: rgb(236, 239, 241); */
  transition: 0.2s ease-in-out;
  cursor: pointer;
  .title_span {
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) =>
      props.themeContent === "light" ? "rgb(196, 225, 245)" : "#121212"};
  }
`;

const ThemeContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 550px) {
    bottom: 20px;
  }

  .setting_icon {
    transition: all 0.2s ease-in-out;
    font-size: 2rem;
    cursor: pointer;
    @media (max-height: 550px) {
      font-size: 1.5rem;
    }
  }

  > span {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  &:hover {
    > span {
      transform: translateX(0.6rem);
    }
    > .setting_icon {
      transform: scale(1.1);
    }
  }
`;

const ThemeItems = styled(motion.div)`
  position: relative;
  > .item {
    > .theme-container {
      position: absolute;
      width: fit-content;
      top: -60px;
      left: 30px;
      background-color: ${(props) =>
        props.themeContent === "light"
          ? "rgb(236, 239, 241)"
          : "rgb(55, 71, 79)"}; //
      font-weight: bold;
      border-radius: 1rem;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      @media (max-height: 550px) {
        top: -90px;
        left: 60px;
      }
      > span {
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: ${(props) =>
            props.themeContent === "light" ? "rgb(196, 225, 245)" : "#121212"};
          border-radius: 0.5rem;
        }
      }
    }
  }
`;

const ModalDiv = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  widows: 100%;
  height: 100vh;
  animation: tr 0.6s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  @keyframes tr {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function Sidebar({
  isExpanded,
  collapseHandler,
  isModalMode,
  setIsExpanded,
  showThemeContainer,
  setShowThemeContainer,
}) {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(1);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const { theme, changeTheme } = useContext(themeContext);

  const sideRef = useRef();

  const changeSidebarItemColor = (value) => {
    setSelectedSidebarItem(value);
  };

  useEffect(() => {
    if (isExpanded) {
      sideRef.current.style.transform = "translateX(0)";
    } else {
      sideRef.current.style.transform = "translateX(-100%)";
    }
  }, [isExpanded]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    if (innerWidth < 1280) {
      collapseHandler();
    } else {
      {
        setIsExpanded(true);
      }
    }

    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, [innerWidth]);

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => collapseHandler()}>
        <SidebarContainer themeContent={theme} ref={sideRef}>
          {innerWidth < 1280 && (
            <div className="close-icon" style={{ textAlign: "right" }}>
              <GrFormClose
                cursor="pointer"
                onClick={collapseHandler}
                size={20}
              />
            </div>
          )}
          <SideTitle
            style={{ borderBottom: theme === "dark" && "1px solid #90a4ae66" }}
          >
            <h2>Admin Dashboard</h2>
          </SideTitle>
          <PagesContainer>
            <Page
              themeContent={theme}
              onClick={() => changeSidebarItemColor(1)}
              style={{
                backgroundColor:
                  selectedSidebarItem === 1
                    ? theme === "light"
                      ? "#eceff1"
                      : "rgb(55, 71, 79)"
                    : "",
              }}
            >
              <Link onClick={() => collapseHandler()} to="/">
                <HiHome />
                <span className="title_span">Home</span>
              </Link>
            </Page>
            <Page
              themeContent={theme}
              onClick={() => changeSidebarItemColor(2)}
              style={{
                backgroundColor:
                  selectedSidebarItem === 2
                    ? theme === "light"
                      ? "#eceff1"
                      : "rgb(55, 71, 79)"
                    : "",
              }}
            >
              <Link onClick={() => collapseHandler()} to="/dashboard">
                <MdOutlineBarChart />
                <span className="title_span">Dashboard</span>
              </Link>
            </Page>
            <Page
              themeContent={theme}
              onClick={() => changeSidebarItemColor(3)}
              style={{
                backgroundColor:
                  selectedSidebarItem === 3
                    ? theme === "light"
                      ? "#eceff1"
                      : "rgb(55, 71, 79)"
                    : "",
              }}
            >
              <Link onClick={() => collapseHandler()} to="/users">
                <FaUsers />
                <span className="title_span">Users</span>
              </Link>
            </Page>
            <Page
              themeContent={theme}
              onClick={() => changeSidebarItemColor(4)}
              style={{
                backgroundColor:
                  selectedSidebarItem === 4
                    ? theme === "light"
                      ? "#eceff1"
                      : "rgb(55, 71, 79)"
                    : "",
              }}
            >
              <Link onClick={() => collapseHandler()} to="/calendarp">
                <BsCalendarCheck />
                <span className="title_span">Calendar</span>
              </Link>
            </Page>
          </PagesContainer>
          <ThemeContainer>
            <FiSettings
              onClick={() => setShowThemeContainer(!showThemeContainer)}
              className="setting_icon"
              // size={30}
            />
            <span onClick={() => setShowThemeContainer(!showThemeContainer)}>
              Settings
            </span>
            <AnimatePresence>
              {showThemeContainer && (
                <ThemeItems themeContent={theme}>
                  <div className="item">
                    <motion.div
                      key="theme-container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="theme-container"
                    >
                      <span
                        id="light"
                        onClick={(e) => {
                          changeTheme(e);
                          setShowThemeContainer(false);
                        }}
                      >
                        Light
                      </span>
                      <span
                        id="dark"
                        onClick={(e) => {
                          changeTheme(e);
                          setShowThemeContainer(false);
                        }}
                      >
                        Dark
                      </span>
                    </motion.div>
                  </div>
                </ThemeItems>
              )}
            </AnimatePresence>
          </ThemeContainer>
        </SidebarContainer>
      </OutsideClickHandler>
      {isExpanded && isModalMode && <ModalDiv />}
    </>
  );
}

export default Sidebar;
