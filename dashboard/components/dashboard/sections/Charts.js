import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Charts() {

 const data = [
  { name: 'Mon', users: 50, fill: '#8884d8' },
  { name: 'Tue', users: 65, fill: '#fcd535'},
  { name: 'Wed', users: 10, fill: '#ff6a6a' },
  { name: 'Thu', users: 80, fill: '#d43540'},
  { name: 'Fri', users: 120, fill: '#808080' },
  { name: 'Sat', users: 90, fill: '#458585' },
  { name: 'Sun', users: 210, fill: '#634896' }
 ];

 return (

  <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
   <div className="px-6 py-5 font-semibold border-b border-gray-100">The number of applied and left students per
    month
   </div>
   <div className="p-4 flex-grow">
    <div
     className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
     <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#8884d8" />
     </LineChart>
     {/*<BarChart width={600} height={300} data={data}>*/}
     {/* <XAxis dataKey="name"  style={{fontSize:'22px'}} />*/}
     {/* <YAxis />*/}
     {/* <CartesianGrid strokeDasharray="3 3" />*/}
     {/* <Tooltip style={{fontSize:'16px'}}/>*/}
     {/* <Bar dataKey="users" fill="#8884d8" />*/}
     {/*</BarChart>*/}
    </div>
   </div>
  </div>
 )
}