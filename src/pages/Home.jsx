import React from "react";
import styled from "styled-components";

import StackedChart from "../components/StackedChart";
import ProgressBar from "../components/ProgressBar";

import homeLogo from "../assets/homeLogo.svg";

import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import {
  IoMdArrowDropup,
  IoMdArrowDropright,
  IoMdArrowDropdown,
} from "react-icons/io";

import { homeData, progressData } from "../data/data";

//building style components..........
const HomeContainer = styled.div`
  margin-left: 280px;
  margin-top: 100px;
  background-color: rgb(236, 239, 241);
  padding: 0 40px 40px 60px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  .left_title {
    display: flex;
    flex-direction: column;
    > span:nth-child(1) {
      font-size: 2rem;
      font-weight: 1000;
      margin-bottom: 5px;
    }
    > span:nth-child(2) {
      font-size: 1.7rem;
    }
    > span:nth-child(3) {
      margin-top: 1.5rem;
    }
  }
  > img {
    width: 90%;
    height: 90%;
  }

  .item_last {
    width: 100%;
    display: flex;
    padding: 15px;
    border-radius: 1rem;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    background-color: rgb(41, 98, 255);
    color: #fff;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
    }
    .title {
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      align-items: center;
      > span:nth-child(1) {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }

    .button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      border-radius: 1rem;
      background-color: #fff;
      color: black;
      > span {
        font-weight: 600;
      }
    }
  }
`;

const ItemMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  .cart {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 1rem;
    > .items_cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      > .svg_titles {
        display: flex;
        align-items: center;
        gap: 1rem;
        > .svg_container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #2962ff;
          border-radius: 50%;
        }
        > .titles {
          display: flex;
          flex-direction: column;
          max-width: 320px;
          > span:nth-child(1) {
            font-weight: bolder;
            font-size: 1rem;
          }
          > span:nth-child(2) {
            color: #607d8b;
          }
        }
      }
    }
  }
  .title_chart_container {
    background-color: #fff;
    padding: 0.8rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    > .title {
      text-align: center;
    }
  }

  .chart {
    width: 99%;
    height: 100%;
  }
  .dashboard_button {
    padding: 1.5rem 1rem;
    background-color: #eceff1;
    border-radius: 1rem;
    .container {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item1 {
        display: flex;
        gap: 1rem;
        align-items: center;
        span {
          font-size: 1rem;
          font-weight: 800;
        }
        .icon_dashboard_container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #fff;
          border-radius: 50%;
        }
      }
    }
  }
`;
const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  .cart_progress {
    background-color: #fff;
    padding: 1rem;
    border-radius: 1rem;
    .progress_container {
      margin-top: 20px;
      display:flex;
      flex-direction:column;
      gap:1rem;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <ItemsContainer>
        <ItemLeft>
          <div className="left_title">
            <span>Hi Reza,</span>
            <span>Welcome Back!</span>
            <span>
              This page is designed to give some important information about the
              application. Let's make someting together!
            </span>
          </div>
          <img src={homeLogo} alt="home" />
          <div className="item_last">
            <div className="icon">
              <AiFillStar size={20} color="#2962FF" />
            </div>
            <div className="title">
              <span>Congratulations John</span>
              <span>
                You have Completed 75% of your profile. Your current progress is
                great.
              </span>
            </div>
            <div className="button">
              <span>View Profile</span>
            </div>
          </div>
        </ItemLeft>
        <ItemMiddle>
          <div className="cart">
            <div className="items_cart">
              <div className="svg_titles">
                <div className="svg_container">
                  <AiFillLike size={25} color="#fff" />
                </div>
                <div className="titles">
                  <span>{homeData.likes}</span>
                  <span>Likes</span>
                </div>
              </div>
              <div className="arrow_green">
                <IoMdArrowDropup size={20} color="lime" />
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="items_cart">
              <div className="svg_titles">
                <div
                  style={{ backgroundColor: "#ff3d00" }}
                  className="svg_container"
                >
                  <BsHeartFill size={20} color="#fff" />
                </div>
                <div className="titles">
                  <span>{homeData.likes}</span>
                  <span>Likes</span>
                </div>
              </div>
              <div className="arrow_green">
                <IoMdArrowDropright size={20} color="silver" />
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="items_cart">
              <div className="svg_titles">
                <div
                  style={{ backgroundColor: "#ffc400" }}
                  className="svg_container"
                >
                  <BsEmojiLaughingFill size={22} color="#fff" />
                </div>
                <div className="titles">
                  <span>{homeData.likes}</span>
                  <span>Likes</span>
                </div>
              </div>
              <div className="arrow_green">
                <IoMdArrowDropdown size={20} color="#ff3d00" />
              </div>
            </div>
          </div>
          <div className="title_chart_container">
            <div className="title">
              <span>Views</span>
              <h2>{homeData.views}</h2>
            </div>
            <div className="chart">
              <StackedChart />
            </div>
            <div className="dashboard_button">
              <a>
                <div className="container">
                  <div className="item1">
                    <div className="icon_dashboard_container">
                      <MdDashboard size={22} />
                    </div>
                    <span>View Dashboard</span>
                  </div>
                  <div className="item2">
                    <IoMdArrowDropright size={22} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </ItemMiddle>
        <ItemRight>
          <div className="cart_progress">
            <div className="title">
              <span>Targets</span>
            </div>
            <div className="progress_container">
              {progressData.map((item,index) => {
                return (
                  <div key={index} className="progress_cart">
                      <div className="title_progress">
                        <span>Views</span>
                        <span>{item.completed}</span>
                      </div>
                      <div className="progress">
                        <ProgressBar completedColor={item.completedColor} bgColor={item.bgColor} completed={item.completed} />
                      </div>
                  </div>
                )
              })}
            </div>
          </div>
        </ItemRight>
      </ItemsContainer>
    </HomeContainer>
  );
}

export default Home;
