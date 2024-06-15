import React from 'react';
import Chart from '../../components/chart/Chart';
import Featuredubfo from '../../components/featuredinfo/Featuredinfo';
import Widgetlg from '../../components/widgetlg/Widgetlg';
import Widgetsm from '../../components/widgetsm/Widgetsm';
import { userData } from '../../dummyData';

import './home.css';

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
