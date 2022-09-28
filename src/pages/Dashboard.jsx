import React, { useContext } from "react";
import styled from "styled-components";

//importing Charts...................................
import LineChart from "../components/LineChart";
import PolarChart from "../components/PolarChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import RadialChart from "../components/RadialChart";

//import icons....
import { IoTrendingUp } from "react-icons/io5";

//import Data.........
import {
  progressData,
  recentlyUsers,
  teamProgressData,
  pieChartViewData,
} from "../data/data";

//imporging components.................
import ProgressBar from "../components/ProgressBar";
import CircularProgressBar from "../components/CircularProgressBar";

//importing Context Theme and .....
import { themeContext } from "../context/ThemeContextProvider";

//buillding styled components.............
const DashboardContainer = styled.div`
  background-color: ${(props) =>
    props.themeContent === "light" ? "rgb(236, 239, 241)" : "rgb(55, 71, 79)"};
  margin-left: 280px;
  margin-top: 100px;
  padding: 0 45px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  @media (max-width: 1280px) {
    margin-left: 0;
  }
  @media (max-width: 650px) {
    padding: 0 15px;
  }
`;

const DashboardTitle = styled.span`
  font-size: 2.5rem;
  font-weight: bolder;
  display: block;
  margin-bottom: 60px;
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};
`;

const FirstElementContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  > .items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    padding: 20px;
    border-radius: 1rem;
    > span:first-child {
      color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};
      font-size: 1.3rem;
      font-weight: bold;
    }
    > span:last-child {
      color: ${(props) => props.themeContent === "dark" && "#90a4ae"};
    }
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SecondElementContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};
  .line_chart_container {
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    padding: 1rem;
    > span {
      font-size: 1.7rem;
      font-weight: bold;
    }
    border-radius: 1rem;
    > .line_chart {
      width: 99%;
      height: 99%;
    }
  }
  .polar_chart_container {
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    padding: 1rem;
    border-radius: 1rem;
    > span {
      font-size: 1.7rem;
      font-weight: bold;
    }
    > .polar_chart {
      width: 99%;
      height: 99%;
    }
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ThirdElementContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};

  .first_item {
    padding: 1rem;
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    > span {
      font-size: 1.2rem;
      font-weight: bold;
    }
    > .chart_container {
      width: 99%;
      height: 99%;
    }
    > .items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .items_inside {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        > span:first-child {
          font-size: 1.3rem;
          font-weight: bold;
        }
      }
    }
  }
  .second_item {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    > .content_container {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: ${(props) =>
        props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
      padding: 1.5rem;
      border-radius: 1rem;
      > .icon_container {
        min-width: 40px;
        min-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) =>
          props.themeContent === "light"
            ? "rgb(236, 239, 241)"
            : "rgb(55, 71, 79)"};

        border-radius: 50%;
      }
      .contents {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 99%;
        > .titles {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > span:first-child {
            font-weight: 550;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .third_item {
    padding: 1rem;
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > .title {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .progress_chart_container {
      margin: 5px auto;
      width: 75%;
      height: 75%;
    }
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const FourthElementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  color: ${(props) => props.themeContent === "dark" && "#cfd8dc"};

  .first_item {
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 1rem;
    > .title {
      font-size: 1.2rem;
      font-weight: bold;
    }
    > .users_container {
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      > .cart_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > .icon_title_container {
          display: flex;
          align-items: center;
          gap: 1rem;

          > .icon {
            min-width: 40px;
            min-height: 40px;
            background-color: ${(props) =>
              props.themeContent === "light"
                ? "rgb(236, 239, 241)"
                : "rgb(55, 71, 79)"};
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
          > .titles {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;

            > span:first-child {
              font-weight: bold;
            }
            > span:last-child {
              color: ${(props) =>
                props.themeContent === "light" ? "#455a64a4" : "#90a4ae"};
            }
          }
        }
      }
    }
  }
  .second_item {
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    > .title {
      font-size: 1.3rem;
      margin-bottom: 1.3rem;
    }
    .team_container {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > span {
        font-weight: bold;
      }
    }
    .data_container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;
      > .cart_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > .title {
          span {
            /* color: #607d8ba3; */
            color: ${(props) =>
              props.themeContent === "light" ? "#607d8ba3" : "#90a4ae"};
          }
        }
        > .progress {
          display: flex;
          align-items: center;
          width: 30%;
          gap: 1rem;
        }
      }
    }
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const FifthElementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  .first_item {
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 1.3rem;
      font-weight: bold;
    }
    .pie_chart_container {
      margin: 10px auto;
      width: 70%;
      height: 70%;
    }
  }
  .second_item {
    background-color: ${(props) =>
      props.themeContent === "light" ? "#fff" : "rgb(38, 50, 56)"};
    padding: 1rem;
    border-radius: 1rem;
    > .title {
      font-size: 1.3rem;
      font-weight: bold;
    }
    > .chart_container {
      z-index: -1;
      width: 100%;
      height: 100%;
      margin: auto;
    }
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

function Dashboard() {
  const { theme } = useContext(themeContext);
  return (
    <DashboardContainer themeContent={theme}>
      <DashboardTitle themeContent={theme}>Dashboard</DashboardTitle>
      <FirstElementContainer themeContent={theme}>
        <div className="items">
          <span>20700</span>
          <span>visits</span>
        </div>
        <div className="items">
          <span>$ 1400</span>
          <span>Sales</span>
        </div>
        <div className="items">
          <span>120</span>
          <span>Orders</span>
        </div>
        <div className="items">
          <span>435</span>
          <span>Users</span>
        </div>
      </FirstElementContainer>
      <SecondElementContainer themeContent={theme}>
        <div className="line_chart_container">
          <span>Activity</span>
          <div className="line_chart">
            <LineChart />
          </div>
        </div>
        <div className="polar_chart_container">
          <span>Budget</span>
          <div className="polar_chart">
            <PolarChart />
          </div>
        </div>
      </SecondElementContainer>
      <ThirdElementContainer themeContent={theme}>
        <div className="first_item">
          <span>Sales History</span>
          <div className="chart_container">
            <BarChart />
          </div>
          <div className="items">
            <div className="items_inside">
              <span>567</span>
              <span>$ today</span>
            </div>
            <div className="icon">
              <IoTrendingUp />
            </div>
          </div>
        </div>
        <div className="second_item">
          {progressData.map((item, idx) => {
            return (
              <div key={idx} className="content_container">
                <div className="icon_container">{item.icon}</div>
                <div className="contents">
                  <div className="titles">
                    <span>{item.title}</span>
                    <span>{item.completed}%</span>
                  </div>
                  <div className="progress_container">
                    <ProgressBar
                      completedColor="#2962ff"
                      bgColor="#2962ff3f"
                      completed={item.completed}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="third_item">
          <div className="title">
            <span>Progress</span>
          </div>
          <div className="progress_chart_container">
            <CircularProgressBar />
          </div>
        </div>
      </ThirdElementContainer>
      <FourthElementContainer themeContent={theme}>
        <div className="first_item">
          <div className="title">
            <span>Recent Users</span>
          </div>
          <div className="users_container">
            {recentlyUsers.map((user, index) => {
              return (
                <div key={index} className="cart_container">
                  <div className="icon_title_container">
                    <div className="icon">{user.icon}</div>
                    <div className="titles">
                      <span>{user.name}</span>
                      <span>{user.permision}</span>
                    </div>
                  </div>
                  <div className="arrow_container">{user.arrow}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="second_item">
          <div className="title">
            <span>Teams Progress</span>
          </div>
          <div className="team_container">
            <span>Team</span>
            <span>Progress</span>
          </div>
          <div className="data_container">
            {teamProgressData.map((team, idx) => {
              return (
                <div key={idx} className="cart_container">
                  <div className="title">
                    <span>{team.name}</span>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      completedColor={team.completedColor}
                      bgColor={team.bgColor}
                      completed={team.completed}
                    />
                    <span>{team.completed}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FourthElementContainer>
      <FifthElementContainer themeContent={theme}>
        <div className="first_item">
          <div className="title">
            <span>Sales by Category</span>
          </div>
          <div className="pie_chart_container">
            <PieChart chartData={pieChartViewData} />
          </div>
        </div>
        <div className="second_item">
          <div className="title">
            <span>Sales by Age</span>
          </div>
          <div className="chart_container">
            <RadialChart />
          </div>
        </div>
      </FifthElementContainer>
    </DashboardContainer>
  );
}

export default Dashboard;
