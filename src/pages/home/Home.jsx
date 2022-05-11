import React from 'react';
import Chart from '../../components/chart/Chart';
import Featuredubfo from '../../components/featuredinfo/FeaturedInfo';
import Widgetlg from '../../components/widgetlg/WidgetLg';
import Widgetsm from '../../components/widgetsm/WidgetSm';
import { userData } from '../../DummyData';

import './Home.css';

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
