import React, { useState, useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";

//importing icons.................
import { IoAddSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import { usersData } from "../data/data";
import AddUser from "../components/AddUser";
import PaginatedItems from "../components/PaginatedItems";

//importing Theme Context and .....
import { themeContext } from "../context/ThemeContextProvider";

//building style components............
const UserContainer = styled.div`
  background-color: ${(props) =>
    props.themeContent === "light" ? "rgb(236, 239, 241)" : "rgb(55, 71, 79)"};
  margin-left: 280px;
  margin-top: 100px;
  padding: 0 45px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  min-height: 100vh;
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};

  @media (max-width: 1280px) {
    margin-left: 0;
    padding: 0 10px;
  }
  @media (max-width: 700px) {
    overflow: auto;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span:first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .button-container {
    width: 40px;
    height: 40px;
    background-color: rgb(41, 98, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: box-shadow 0.2s linear;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .animated {
      animation: tr 0.2s ease-in-out;
      @keyframes tr {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .data_list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.find((item) => item.id === action.payload.id)) {
        state.push(action.payload);
      }
      return [...state];
    case "REMOVE":
      const newSelectedItems = state.filter(
        (user) => user.id !== action.payload.id
      );
      return [...newSelectedItems];
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

function Users() {
  const [isAddUserShow, setIsAddUserShow] = useState(false);

  const [animateButton, setAnimateButton] = useState(true);

  const [selectedItems, dispatch] = useReducer(reducer, []);
  const [data, setData] = useState([]);

  //calling context...................
  const { theme } = useContext(themeContext);

  const collapseAddModal = () => {
    setIsAddUserShow(false);
  };

  const notify = () =>
    toast.success("User Created Succesfully, Please Check end of page", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const deleteHandler = () => {
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (!selectedItems.find((item) => item.id === data[i].id)) {
        newArray.push(data[i]);
      }
    }
    setData(newArray);
    dispatch({ type: "CLEAR" });
  };


  useEffect(() => {
    setData(usersData);
  }, []);

  if (data.length === 0) return <h1>Loading...........</h1>;
  
  return (
    <UserContainer themeContent={theme}>
      <NavContainer>
        <span>Users</span>
        <div className="button-container">
          {selectedItems.length > 0 ? (
            <div
              onClick={deleteHandler}
              onAnimationEnd={() => setAnimateButton(false)}
              className={animateButton ? "buttons animated" : "buttons"}
            >
              <MdDelete color="#fff" size={25} />
            </div>
          ) : (
            <div
              onClick={() => setIsAddUserShow(true)}
              onAnimationEnd={() => setAnimateButton(false)}
              className={animateButton ? "buttons animated" : "buttons"}
            >
              <IoAddSharp color="#fff" size={25} />
            </div>
          )}
        </div>
        <AnimatePresence>
          {isAddUserShow && (
            <AddUser
              key="hi"
              notify={notify}
              data={data}
              setData={setData}
              collapseAddModal={collapseAddModal}
            />
          )}
        </AnimatePresence>
      </NavContainer>
      <Contents>
        <div className="data_list">
          <PaginatedItems
            selectedItems={selectedItems}
            dispatch={dispatch}
            data={data}
            setAnimateButton={setAnimateButton}
          />
        </div>
      </Contents>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </UserContainer>
  );
}

export default Users;
