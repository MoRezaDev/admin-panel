import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//importing icons....
import { HiHome } from "react-icons/hi";
import { MdOutlineBarChart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

//import context........
import { themeContext } from "../context/ThemeContextProvider";
import { useState } from "react";

//building style components.........
const SidebarContainer = styled.div`
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  padding: 1.5rem 1rem;
  overflow-y: auto;
`;

const SideTitle = styled.div`
  margin: 20px 0;
  border-bottom: 1px silver solid;
  padding: 5px 0;
  margin-bottom: 50px;
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
    color: #455a64;
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
    background-color: rgb(196, 225, 245);
  }
`;

const ThemeContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  .setting_icon {
    transition: all 0.2s ease-in-out;
  }

  span {
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    span {
      transform: translateX(0.6rem);
    }
    .setting_icon {
      transform: scale(1.1);
    }
  }
`;

function Sidebar() {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(1);

  const changeSidebarItemColor = (value) => {
    setSelectedSidebarItem(value);
  };
  return (
    <SidebarContainer>
      <SideTitle>
        <h2>Admin Dashboard</h2>
      </SideTitle>
      <PagesContainer>
        <Page
          onClick={() => changeSidebarItemColor(1)}
          style={{
            backgroundColor: selectedSidebarItem === 1 ? "#eceff1" : "",
          }}
        >
          <Link to="/">
            <HiHome />
            <span className="title_span">Home</span>
          </Link>
        </Page>
        <Page
          onClick={() => changeSidebarItemColor(2)}
          style={{
            backgroundColor: selectedSidebarItem === 2 ? "#eceff1" : "",
          }}
        >
          <Link to="/dashboard">
            <MdOutlineBarChart />
            <span className="title_span">Dashboard</span>
          </Link>
        </Page>
        <Page
          onClick={() => changeSidebarItemColor(3)}
          style={{
            backgroundColor: selectedSidebarItem === 3 ? "#eceff1" : "",
          }}
        >
          <Link to="/users">
            <FaUsers />
            <span className="title_span">Users</span>
          </Link>
        </Page>
        <Page
          onClick={() => changeSidebarItemColor(4)}
          style={{
            backgroundColor: selectedSidebarItem === 4 ? "#eceff1" : "",
          }}
        >
          <Link to="/calendar">
            <BsCalendarCheck />
            <span className="title_span">Calendar</span>
          </Link>
        </Page>
      </PagesContainer>
      <ThemeContainer>
        <FiSettings className="setting_icon" size={30} />
        <span> Settings</span>
      </ThemeContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
