import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import '../App.css'

import logo from "../../public/favicon.svg";
import SquigglyLine from "../components/home/SquigglyLine.js";
import { typography } from '../styles/typography'

import QuickStartButton from "../components/home/QuickStartButton.js";

import { getUserInfo } from "../lib/user.js";

export default function Home() {
  const navigate = useNavigate()
  const { name } = getUserInfo();
  // statess

  // handlers
  const goToAccount = () => {
    // navigate to the Account page
    navigate('/Account')
  }

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

      <div className="dashboard-container m-5 fixed inset-0 overflow-hidden flex flex-col">

        {/* Greeting */}
        <header className="greeting-section">
          <h2
            className="greeting text-left text-3xl!"
            style={typography.titleLarge}
          >
            Good evening, {name}
          </h2>
        </header>
        <SquigglyLine/>


        {/* Main Content */}
        <main>
          {/* Quick Start */}
          <section>
            <h3 className="text-xs" style={typography.bodySmall}>Quick Start</h3>
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
            <h3 className="text-xs" style={typography.bodySmall}>My stats</h3>

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
          
          {/* Settings Button */}
          <div>
            <button onClick={goToAccount} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
              Go to Account
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
