import Table from 'rc-table';
import React, {useEffect, useState} from 'react';
import Pagination from "react-js-pagination";
import {Edit, Trash2, Eye} from "react-feather";
import PrModal from "@/components/modal/PrModal"
import {Tooltip} from "antd";
import ViewContent from "@/components/stars/modalContent/ViewContent";
import EditContent from "@/components/stars/modalContent/EditContent";
import DeleteContent from "@/components/stars/modalContent/DeleteContent";

import {getAll} from "@/services/stars.service";

const TableIndex = ({refTable}) => {
 const [modal, setModal] = useState(false);
 const [data, setData] = useState([]);
 const [columnData, setColumnData] = useState([]);
 const [activeContent, setActiveContent] = useState(null);
 const perPage = 7
 const [activePage, setActivePage] = useState(1)
 const [tableData, setTableData] = useState(data.length > 7 ? data.slice(0, perPage) : data)
 const [allData, setAllData] = useState([]);
 const modalContent = (
  activeContent === 'view'
   ? <ViewContent data={columnData}  setModal={setModal}/>
   : activeContent === 'edit'
    ? <EditContent data={columnData}  setModal={setModal}/>
    : <DeleteContent data={columnData}  setModal={setModal}/>
 )

 const columns = [
  {
   title: '#',
   dataIndex: 'data',
   key: 'data',
   width: 50,
   render: (text, record, index) => {
    return <span>{activePage == 1 ? index + 1 : (activePage - 1) * perPage + index + 1}</span>
   },
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2 rounded-lg",
   rowClassName: "bg-black-ripon"
  },
  {
   title: 'Name',
   dataIndex: 'name',
   key: 'name',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2 rounded-tl-lg rounded-bl-lg",
   render: (text,record) => {
    return <span>{record.name+ ' ' + record.surname}</span>
   }
   //name ve surname birleşecek
  },
  {
   title: 'Biography',
   dataIndex: 'biography',
   key: 'biography',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",

  },
  {
   title: 'Birth Date',
   dataIndex: 'birthDate',
   key: 'birthDate',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   render: (text, record) => {
    return <span>{record.birthDate}</span>
   }
  },
  {
   title: 'Nationality',
   dataIndex: 'nationality',
   key: 'nationality',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2"
  },
  {
   title: 'Movies',
   dataIndex: 'movies',
   key: 'movies',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   render: (text, record) => {
    return <span>{record.movies.length}</span>
   }

  },
  {
   title: 'Series',
   key: 'series',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   render: (text, record) => {
    return <span>{record.series.length}</span>
   }
  },
  {
   title: 'Poster',
   dataIndex: 'poster',
   key: 'poster',
   width: 400,
   image: true,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   // render: (text, record) => <img src={record.poster} alt='poster' className="w-20 h-20 "/>
   render: (text, record) => (
    <Tooltip title={<img src={record.poster || 'https://picsum.photos/200'} alt="poster" width="200"/>}>
        <span className='cursor-pointer'>
          {text ? text : 'No Avatar'}
        </span>
    </Tooltip>
   )
  },
  {
   title: 'Operations',
   dataIndex: '',
   key: 'operations',
   className: "text-white bg-slate-800 h-full border-b-2 rounded-tr-lg rounded-br-lg",
   // className: "text-white bg-gray-600 p-2 gap-2 border-b-2 flex justify-center   rounded-tr-lg rounded-br-lg",
   render: () => <div className="text-white bg-slate-800 p-2 gap-2  flex justify-center">

    <Eye color='#f0b90b' className='hover:animate-ping cursor-pointer' onClick={() => {
     setActiveContent('view')
     setModal(true)
    }}/>

    | <Edit color='green' className='hover:animate-ping cursor-pointer' onClick={() => {
    setActiveContent('edit')
    setModal(true)
   }}/>
    | <Trash2 color='red' className='hover:animate-ping cursor-pointer' onClick={() => {
    setActiveContent('delete')
    setModal(true)
   }}/>
   </div>,

  },
 ];

 const getData = async () => {
  await getAll().then((response) => {
   setData(response.data)
   setTableData(response.data.slice(0, perPage))
  }).catch((err) => {
   console.log(err)
  })
 }
 useEffect(() => {
  getData()

  window.scrollTo({top: 0, behavior: 'smooth'});
 }, [refTable, modal])


 //Pagination
 const handlePageChange = (pageNumber) => {
  setTableData(data.slice((pageNumber - 1) * perPage, pageNumber * perPage))
  setActivePage(pageNumber)
  window.scrollTo({top: 0, behavior: 'smooth'});
 }


 return (
  <>
   <Table columns={columns} data={tableData} rowKey="id" onRow={(record, rowIndex) => {
    return {
     onClick: e => {
      setColumnData([record])

     }
    };
   }}
          className='bg-purple-700 p-2 w-full text-center rc-table-custom font-semibold rounded-md'/>
   <Pagination
    activePage={activePage}
    itemsCountPerPage={perPage || 10}
    totalItemsCount={data.length}
    pageRangeDisplayed={5}
    onChange={handlePageChange}
    nextPageText={'Next'}
    prevPageText={'Prev'}
    firstPageText={'First'}
    lastPageText={'Last'}
    innerClass="js-ul"
    itemClass='js-li'
    linkClass='page-link'
   />
   <PrModal vsbModal={modal} setVsbModal={setModal} mdlContent={modalContent}/>
  </>

 );
};

export default TableIndex;