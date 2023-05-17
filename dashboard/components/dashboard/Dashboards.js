import React from 'react';
import Statistics from "./sections/Statistics";
import Charts from "./sections/Charts";
import ScoreUserList from "./sections/LatestUserList";
import {Watermark} from "antd";
import LatestUserList from "./sections/LatestUserList";

const Dashboard = () => {
 return (
  <>
   <Watermark content='By Curly'>
   <main className="p-6 sm:p-10 space-y-6">

    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
     <div className="mr-6">
      <h1 className="text-4xl font-semibold mb-2">Dashboards</h1>
      <h2 className="text-gray-600 ml-0.5">~Statistics</h2>
     </div>
    </div>
    <Statistics/>
    <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
     <Charts/>

     <LatestUserList/>

    </section>

   </main>
   </Watermark>
  </>
 );
};

export default Dashboard;