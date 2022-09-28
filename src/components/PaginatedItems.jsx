import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

//importing Theme Context.........
import { themeContext } from "../context/ThemeContextProvider";

//build styled components.....
const PaginatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 700px) {
    overflow: auto;
  }
  .data-cart {
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    display: grid;
    grid-template-columns: 1fr 1fr 5fr 2fr 2fr 2fr 0.3fr;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    @media (max-width: 1050px) {
      grid-template-columns: 1fr 1fr 4fr 2fr 2fr 2fr 0.3fr;
    }
    @media (max-width: 700px) {
      width: 680px;
    }
    .status {
      width: fit-content;
      padding: 0.5rem 0.8rem;
      border-radius: 1.5rem;
    }
    .active {
      background-color: #2962ff;
      color: #fff;
      font-size: 0.8rem;
      cursor: default;
    }
    .disabled {
      background-color: ${(props) =>
        props.themeContent === "light" ? "#eee" : "rgb(55, 71, 79)"};
      font-size: 0.8rem;

      position: relative;
      right: 10px;
      cursor: default;
    }

    .icon {
      width: 40px;
      height: 40px;
      background-color: ${(props) =>
        props.themeContent === "light"
          ? "rgb(236, 239, 241)"
          : "rgb(55, 71, 79)"};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: rgb(196, 225, 245);
      }
    }
    .title-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      > span:first-child {
        font-weight: bold;
      }
      > span:last-child {
        color: #607d8b;
        font-size: 0.8rem;
      }
    }
  }
  .paginated {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    @media (max-width: 700px) {
      width: 95vw !important;
      position: sticky;
      bottom: 0px;
    }
    @media (max-width: 380px) {
      justify-content: center;
      width: 95vw !important;
    }
    > .paginate-container {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3rem;
      @media (max-width: 350px) {
        gap: 2rem;
      }
    }
    .page-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 5rem;
      transition: all 0.5s ease;
    }
    .page-link-container {
      cursor: pointer;
    }
    .active-page {
      background-color: rgba(41, 98, 255, 0.514);
      color: #fff;
    }
    .disabled-buttons {
      opacity: 0.5;
    }
    .contents {
      display: flex;
      align-items: center;

      > .row {
        position: relative;
        display: flex;
        align-items: center;
        > .per-page-container {
          background-color: #609760;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.3rem 0.5rem;
          border-radius: 1rem;
          position: absolute;
          top: -1rem;
          left: -2rem;
        }
      }
    }
  }
`;

function PaginatedItems({ data, selectedItems, dispatch, setAnimateButton }) {
  //Binding Paginate States.............
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  //call context.............
  const { theme } = useContext(themeContext);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  if (!currentItems) return <h1>Loading....</h1>;

  console.log("selected Items:", selectedItems);
  return (
    <PaginatedContainer themeContent={theme}>
      {data.length > 0 &&
        currentItems.map((item) => {
          return (
            <div key={item.id} className="data-cart">
              <div className="input-radio">
                <input
                  onClick={(e) => {
                    if (e.target.checked) {
                      setAnimateButton(true);
                      dispatch({ type: "ADD", payload: item });
                    } else {
                      setAnimateButton(true);
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                  type="checkbox"
                  value={item.checkValue}
                />
              </div>
              <div className="icon">{item.icon}</div>
              <div className="title-container">
                <span>{item.fullName}</span>
                <span>{item.email}</span>
              </div>
              <div className="gender">
                <span>{item.gender}</span>
              </div>
              <div className="role">
                <span>{item.role}</span>
              </div>
              <div
                className={
                  item.status === "Active" ? "status active" : "status disabled"
                }
              >
                {item.status}
              </div>
              <div className="dots">{item.dots}</div>
            </div>
          );
        })}
      <div className="paginated">
        <ReactPaginate
          disabledClassName="disabled-buttons"
          activeClassName="active-page"
          pageLinkClassName="page-link-container"
          pageClassName="page-container"
          containerClassName="paginate-container"
          nextLabel={<IoIosArrowForward cursor="pointer" />}
          previousLabel={<IoIosArrowBack cursor="pointer" />}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          pageCount={pageCount}
        />
      </div>
    </PaginatedContainer>
  );
}

export default PaginatedItems;
