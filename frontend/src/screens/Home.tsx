import "../App.css";
import SquigglyLine from "../components/home/SquigglyLine.js";
import { typography } from "../styles/typography";
import QuickStartButton from "../components/home/QuickStartButton.js";
import { getUserInfo } from "../lib/user.js";
import TitleBar from "../components/TitleBar.js";
import ConsistencyCard from "../components/home/ConsistencyCard.js";
// import NewSession from "../components/home/NewSession.js";

export default function Home() {
  const { name } = getUserInfo();

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
      }}
    >
      {/* <NewSession/> */}
      <TitleBar/>
      <div
        style={{
          padding: "30px",
          paddingTop: "60px",
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Greeting */}
        <header>
          <h2
            style={{
              ...typography.titleLarge,
              textAlign: "left"
            }}
          >
            Good evening, {name}
          </h2>
        </header>

        <SquigglyLine />

        {/* Main Content */}
        <main>
          {/* Quick Start */}
          <section
            style={{
              marginBottom: "24px"
            }}
          >
            <h3
              style={{
                ...typography.bodySmall,
                fontSize: "12px"
              }}
            >
              Quick Start
            </h3>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "8px"
              }}
            >
              <QuickStartButton label="1:00:00" />
              <QuickStartButton label="30:00" />
              <QuickStartButton label="15:00" />
              <QuickStartButton label="10:00" />
              <QuickStartButton label="5:00" />
            </div>
          </section>

          {/* Stats */}
          <section>
            <h3 style={{
              ...typography.bodySmall,
              fontSize: "12px"
              }}
            >
              My stats
            </h3>

            <div
              style={{
                marginTop: "12px"
              }}
            >
              {/* Consistency Widget */}
              <ConsistencyCard/>

              {/* Recent Session Card */}
              <div>
                {/* TODO */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
