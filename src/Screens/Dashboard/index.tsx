import React, { useEffect } from "react";

interface Props {}

const Dashboard = (props: Props) => {
  useEffect(() => {
    console.log("DOTENV", process.env.REACT_APP_ENV_CHECK);
  }, []);
  return (
    <div>
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
