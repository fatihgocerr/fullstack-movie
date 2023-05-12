import React from 'react';
import Statistics from "./sections/Statistics";
import Charts from "./sections/Charts";
import ScoreUserList from "./sections/ScoreUserList";
import {Watermark} from "antd";

const Dashboard = () => {
 return (
  <>
   <Watermark content='By Curly'>
   <main className="p-6 sm:p-10 space-y-6">

    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
     <div className="mr-6">
      <h1 className="text-4xl font-semibold mb-2">Dashboards</h1>
      <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
     </div>
     <div className="flex flex-wrap items-start justify-end -mb-3">
      <button
       className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
       <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
       </svg>
       Manage dashboard
      </button>
      <button
       className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
       <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
       </svg>
       Create new dashboard
      </button>
     </div>
    </div>
    <Statistics/>
    <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
     <Charts/>
     {/*
     <div className="flex items-center p-8 bg-white shadow rounded-lg">
      <div
       className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
       <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"/>
        <path fill="#fff"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
       </svg>
      </div>
      <div>
       <span className="block text-2xl font-bold">25</span>
       <span className="block text-gray-500">Lections left</span>
      </div>
     </div>
     <div className="flex items-center p-8 bg-white shadow rounded-lg">
      <div
       className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
       <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
       </svg>
      </div>
      <div>
       <span className="block text-2xl font-bold">139</span>
       <span className="block text-gray-500">Hours spent on lections</span>
      </div>
     </div>
*/}
     <ScoreUserList/>
     {/*
     <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
      <div className="px-6 py-5 font-semibold border-b border-gray-100">Students by type of studying</div>
      <div className="p-4 flex-grow">
       <div
        className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart
       </div>
      </div>
     </div>
     */}
    </section>

   </main>
   </Watermark>
  </>
 );
};

export default Dashboard;