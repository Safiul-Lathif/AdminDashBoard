import React from "react";
import Chart from "../../Components/Chart/Chart";
import Featuredubfo from "../../Components/FeaturedInfo/FeaturedInfo";
import Widgetlg from "../../Components/WidgetLg/WidgetLg";
import Widgetsm from "../../Components/WidgetSm/WidgetSm";
import { userData } from "../../dummyData";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Featuredubfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homewidgets">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
}
