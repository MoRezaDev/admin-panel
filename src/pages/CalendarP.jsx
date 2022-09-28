import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

//icons....
import { IoAddSharp, IoClose } from "react-icons/io5";

//import themecontext..........
import { themeContext } from "../context/ThemeContextProvider";

const date = new Date();

const locales = {
  "e-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Meeting",
    allDay: true,
    start: new Date(date.toLocaleDateString()),
    end: new Date(date.toLocaleDateString()),
  },
  {
    title: "Confrance",
    allDay: true,
    start: new Date(date.toLocaleDateString()),
    end: new Date(date.toLocaleDateString()),
  },
];

//building styled Components..........
const CalendarContainer = styled.div`
  background-color: ${(props) =>
    props.themeContent === "light" ? "rgb(236, 239, 241)" : "rgb(55, 71, 79)"};
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};
  margin-left: 280px;
  margin-top: 100px;
  padding: 0 45px;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .calendar-container {
      z-index: 3;
    }

    > .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgb(41, 98, 255);
      cursor: pointer;
    }

    .add-container {
      position: absolute;
      right: 0%;
      top: 10%;
      background-color: #fff;
      border-radius: 1rem;
      width: 40%;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      z-index: 10;
      > button {
        width: 40%;
        background-color: rgb(41, 98, 255);
        border: none;
        padding: 1rem;
        border-radius: 1rem;
        color: #fff;
        cursor: pointer;
      }

      .red-border {
      }
      @media (max-width: 980px) {
        width: 50%;
      }
      @media (max-width: 700px) {
        width: 350px;
      }
      @media (max-width: 500px) {
        top: 70px;
        left: 80px;
      }
      @media (max-width: 437px) {
        position: fixed;
        width: 90vw;
        margin: auto;
      }
    }
    .first-item {
      display: flex;
      justify-content: space-between;
      padding: 0 5px 0 0;

      .close-icon {
        cursor: pointer;
      }
    }
    .input-items {
      border: 1px solid silver;
      padding: 10px;
      border-radius: 1rem;
      width: 50%;
    }
  }
`;

const initial = {
  opacity: 0,
  transform: "translateX(0) translateY(0)",
};
const animate = {
  opacity: 1,
  transform: "translateX(-20%) ",
};

const exit = {
  opacity: 0,
};

function CalendarP() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [errors, setErrors] = useState({});

  //calling context.............
  const { theme } = useContext(themeContext);

  //define Refs......
  const eventRef = {
    title: useRef(),
    start: useRef(),
    end: useRef(),
  };

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
    setShowAddEvent(false);
  };

  console.log(errors);
  return (
    <CalendarContainer themeContent={theme}>
      <div className="container">
        <div className="title">
          <h1>Calendar</h1>
        </div>
        <div
          onClick={() => setShowAddEvent(!showAddEvent)}
          className="icon-container"
        >
          <IoAddSharp size={22} color="#fff" />
        </div>
        <AnimatePresence>
          {showAddEvent && (
            <motion.div
              key="add-event"
              initial={initial}
              animate={animate}
              exit={exit}
              className="add-container"
            >
              <div className="first-item">
                <input
                  ref={eventRef.title}
                  className="input-items"
                  type="text"
                  placeholder="Add title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
                <div
                  onClick={() => setShowAddEvent(false)}
                  className="close-icon"
                >
                  <IoClose size={22} />
                </div>
              </div>

              <DatePicker
                ref={eventRef.start}
                className="input-items"
                shouldCloseOnSelect={true}
                isClearable
                placeholderText="Start Date"
                showTimeSelect
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                ref={eventRef.end}
                className="input-items"
                shouldCloseOnSelect
                isClearable
                placeholderText="End Date"
                showTimeSelect
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
              <button onClick={handleAddEvent} style={{ marginTop: "10px" }}>
                Add Event
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="calendar-container">
        <Calendar
          popup={true}
          tooltipAccessor="title"
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, width: "100%" }}
        />
      </div>
    </CalendarContainer>
  );
}

export default CalendarP;
