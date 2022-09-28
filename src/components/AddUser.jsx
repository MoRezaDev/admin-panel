import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import { HiUser } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";

//import validator......
import { validator } from "../helper/validator";
import { useEffect } from "react";

//importing ThemeContext...........
import { themeContext } from "../context/ThemeContextProvider";

//building Style components........
const AddUserContainer = styled(motion.div)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};

  .form-container {
    width: 600px;
    height: 70%;
    background-color: ${(props) =>
      props.themeContent === "light"
        ? "rgb(236, 239, 241)"
        : "rgb(55, 71, 79)"};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    @media (max-width: 630px) {
      width: 95vw;
    }
    .title {
      margin-bottom: 2rem;
    }
    > .input-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .items {
        width: 95%;
        position: relative;
        margin: auto;

        > span {
          position: absolute;
          top: 15px;
          left: 15px;
          color: #607d8b;
          background-color: ${(props) =>
            props.themeContent === "light"
              ? "rgb(236, 239, 241)"
              : "rgb(55, 71, 79)"};
          padding: 0 10px 0 10px;
          transition: all 0.1s ease;
        }
      }
      input {
        border: 1px solid silver;
        padding: 1rem;
        border-radius: 1rem;
        position: relative;
        font-size: 1rem;
        z-index: 1;
        width: 100%;
        background-color: ${(props) =>
          props.themeContent === "light"
            ? "#ffffff36"
            : "rgba(55, 71, 79, 0.214)"}; //

        &:focus {
          outline: none;
          border: 2px solid #2962ff;
        }
      }
    }
    .gender-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      > .title {
        margin-bottom: 0.5rem;
      }
      > .items-container {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
    .status-container {
      padding: 1rem;
      display: flex;
      gap: 0.5rem;
    }
    .buttons-container {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1rem;
      gap: 1.5rem;
      > button {
        padding: 0.5rem 1.5rem;
        border: none;
        background-color: #2962ff;
        color: #fff;
        font-size: 0.9rem;
        border-radius: 0.5rem;
        transition: 0.2s ease;
        cursor: pointer;
        &:hover {
          background-color: #1f48b9;
        }
      }
      > span {
        cursor: pointer;
        color: #2962ff;
      }
    }
  }
`;

function AddUser({ data, setData, collapseAddModal, notify }) {
  const [dataValidate, setDataValidate] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});
  const spanRef = useRef();
  const spanRef2 = useRef();

  const collectionRefs = {
    name: useRef(),
    email: useRef(),
    radio: useRef(),
    role: useRef(),
    status: useRef(),
  };

  //calling context.......
  const { theme } = useContext(themeContext);

  const clickHandler = () => {
    if (Object.keys(errors).length > 0) {
      setShowError(true);
    } else {
      setData([
        ...data,
        {
          id: data.length + 1,
          fullName: collectionRefs.name.current.value,
          email: collectionRefs.email.current.value,
          gender: collectionRefs.radio.current.checked ? "Male" : "Female",
          role: collectionRefs.role.current.checked ? "Admin" : "Member",
          status: collectionRefs.status.current.checked ? "Disabled" : "Active",
          icon: <HiUser size={22} />,
          dots: <BiDotsVerticalRounded size={20} />,
          checkValue: data.length + 1,
        },
      ]);
      notify();
      collapseAddModal();
    }
  };

  const changeHandler = (e) => {
    if (e.target.type === "text") {
      setDataValidate({ ...dataValidate, [e.target.id]: e.target.value });
    } else {
      setDataValidate({ ...dataValidate, role: e.target.value });
    }
  };

  const focusHandler = () => {
    setShowError(false);
    spanRef.current.style.transform =
      "translateY(-25px) translateX(-10px) scale(0.7)";
    spanRef.current.style.zIndex = "2";
    spanRef.current.style.color = "#2962ff";
  };

  const blurHandler = (e) => {
    if (e.target.value.length === 0) {
      spanRef.current.style.transform = "scale(1)";
      spanRef.current.style.color = "#607d8b";
      spanRef.current.style.zIndex = "0";
      spanRef.current.style.transform = "translateY(0)";
    }
  };

  const focusHandler2 = () => {
    setShowError(false);
    spanRef2.current.style.transform =
      "translateY(-25px) translateX(-10px) scale(0.7)";
    spanRef2.current.style.zIndex = "2";
    spanRef2.current.style.color = "#2962ff";
  };

  const blurHandler2 = (e) => {
    if (e.target.value.length === 0) {
      spanRef2.current.style.transform = "scale(1)";
      spanRef2.current.style.color = "#607d8b";
      spanRef2.current.style.zIndex = "0";

      spanRef2.current.style.transform = "translateY(0)";
    }
  };

  useEffect(() => {
    setErrors(validator(dataValidate));
  }, [dataValidate]);
  console.log("dataValidate", dataValidate);
  console.log("errors", errors);
  console.log(Object.keys(errors).length);
  return (
    <AddUserContainer
      themeContent={theme}
      onClick={collapseAddModal}
      key="con"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      exit={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <motion.div className="form-container">
          <div className="title">
            <h2>Add User</h2>
          </div>
          <div className="input-container">
            <div className="items">
              <span ref={spanRef}>Full Name*</span>

              <input
                onChange={changeHandler}
                value={dataValidate.name}
                className="icon-placeholder"
                onFocus={focusHandler}
                onBlur={blurHandler}
                ref={collectionRefs.name}
                type="text"
                id="name"
              />
              {showError && (
                <p
                  style={{
                    marginLeft: "15px",
                    marginTop: "5px",
                    fontSize: "14px",
                    color: "red",
                  }}
                >
                  {errors.name}
                </p>
              )}
            </div>
            <div className="items">
              <span ref={spanRef2}>Email*</span>

              <input
                onChange={changeHandler}
                value={dataValidate.email}
                className="icon-placeholder"
                onFocus={focusHandler2}
                onBlur={blurHandler2}
                ref={collectionRefs.email}
                type="text"
                id="email"
              />
              {showError && (
                <p
                  style={{
                    marginLeft: "15px",
                    marginTop: "5px",
                    fontSize: "14px",
                    color: "red",
                  }}
                >
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="gender-container">
            <div className="title">
              <h4>Gender</h4>
            </div>

            <div className="items-container">
              <label>Male</label>
              <input
                ref={collectionRefs.radio}
                type="radio"
                name="radio1"
                value="Male"
              />
              <label>Feamle</label>
              <input type="radio" name="radio1" vale="Feamle" />
            </div>
          </div>
          <div className="gender-container">
            <div className="title">
              <h4>Role</h4>
            </div>
            <div className="items-container">
              <label>Admin</label>
              <input
                onChange={changeHandler}
                ref={collectionRefs.role}
                type="radio"
                name="radio2"
                value="admin"
              />
              <label>Member</label>
              <input
                onChange={changeHandler}
                type="radio"
                name="radio2"
                value="member"
              />
              {showError && (
                <p
                  style={{
                    display: "inline",

                    fontSize: "14px",
                    color: "red",
                  }}
                >
                  {errors.role}
                </p>
              )}
            </div>
          </div>
          <div className="status-container">
            <input ref={collectionRefs.status} type="checkbox" />
            <label>Disabled</label>
          </div>
          <div className="buttons-container">
            <button onClick={clickHandler}>Add</button>
            <span onClick={collapseAddModal}>Cancel</span>
          </div>
        </motion.div>
      </div>
    </AddUserContainer>
  );
}

export default AddUser;
