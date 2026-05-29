// import { useState } from "react";
import "../App.css";
import logo from "../../public/favicon.svg";
import SquigglyLine from "../components/home/SquigglyLine.js";

import QuickStartButton from "../components/home/QuickStartButton.js";

import { getUserInfo } from "../lib/user.js";

export default function Home() {
  const { name } = getUserInfo();
  // statess

  // html
  return (
    <>
      {/* <div>
        <img
          src={logo}
          alt="kairos logo"
          className="w-20 h-auto absolute top-4 left-4"
        ></img>
      </div> */}

      <div className="dashboard-container m-5 w-full">

        {/* Greeting */}
        <header className="greeting-section">
          <h2 className="greeting text-left text-3xl!">Good evening, {name}</h2>
        </header>
        <SquigglyLine/>


        {/* Main Content */}
        <main>
          {/* Quick Start */}
          <section>
            <h3>Quick Start</h3>
            <div className="flex gap-3">
              {/* TODO: quickstart timer buttons*/}
              <QuickStartButton
                label="1:00:00"
              />
              <QuickStartButton
                label="30:00"
              />
              <QuickStartButton
                label="15:00"
              />
              <QuickStartButton
                label="10:00"
              />
              <QuickStartButton
                label="5:00"
              />
            </div>
          </section>

          {/* Stats */}
          <section>
            <h3 className="text-sm">My stats</h3>

            <div>

              {/* Consistency Widget */}
              <div>
                {/* TODO: */}
              </div>

              {/* Recent Session Card */}
              <div>
                {/* TODO: */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
