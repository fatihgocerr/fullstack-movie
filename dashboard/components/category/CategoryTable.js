import Table from 'rc-table';
import React, {useEffect, useState} from 'react';
import Pagination from "react-js-pagination";
import {Edit, Trash2, Eye} from "react-feather";
import PrModal from "../modal/PrModal";

import CategoryViewContent from "../category/categoryModalContent/CategoryViewContent";
import CategoryEditContent from "../category/categoryModalContent/CategoryEditContent";
import CategoryDeleteContent from "../category/categoryModalContent/CategoryDeleteContent";
import {getAllGenres} from "../../services/genres.service";

const CategoryTable = ({refTable}) => {
 const [modal, setModal] = useState(false);
 const [data,setData] = useState([]);
 const [columnData, setColumnData] = useState([]);
 const [activeContent, setActiveContent] = useState(null);
 const modalContent = (
  activeContent === 'view'
   ? <CategoryViewContent data={columnData} setModal={setModal}/>
   : activeContent === 'edit'
    ? <CategoryEditContent data={columnData} setModal={setModal}/>
    : <CategoryDeleteContent data={columnData} setModal={setModal}/>
 )
useEffect(() => {
 getAllGenres().then(res => {
  setData(res.data)
  setTableData(res.data.slice(0, perPage))
 })
},[refTable])
 const columns = [
  {
   title: '#',
   dataIndex: 'data',
   key: 'data',
   width: 50,
   render: (text,record,index) => {
    return <span>{  activePage == 1 ? index + 1 : (activePage -1 ) * perPage + index + 1}</span>
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
   rowClassName: "bg-black-ripon"
  },
  {
   title: 'Movies',
   dataIndex: 'movies',
   key: 'movies',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   render: (text, record) => {
  return   <span>{record.movies.length}</span>
   }
  },
  {
   title: 'Series',
   dataIndex: 'series',
   key: 'series',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   render: (text, record) => {
    return   <span>{record.series.length}</span>
   }
  },
  {
   title: 'Anime',
   dataIndex: 'anime',
   key: 'anime',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   render: (text, record) => {
    return   <span>{record.anime.length}</span>
   }
  },
  {
   title: 'Total ',
   dataIndex: 'total',
   key: 'total',
   width: 400,
   className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
   render: (text, record) => {
    return   <span>{record.movies.length + record.series.length + record.anime.length}</span>
   }
 },
  {
   title: 'Operations',
   dataIndex: '',
   key: 'operations',
   className: "text-white bg-slate-800 h-full border-b-2 rounded-tr-lg rounded-br-lg",
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
 useEffect(() => {
  // columnData.length > 0 && setModal(true)
 }, [columnData]);


 //Pagination
 const perPage = 7
 const [activePage, setActivePage] = useState(1)
 const [tableData, setTableData] = useState(data.slice(0, perPage))
 const handlePageChange = (pageNumber) => {
  setTableData(data.slice((pageNumber - 1) * perPage, pageNumber * perPage))
  setActivePage(pageNumber)
 }


 return (
  <>
   <Table columns={columns} data={tableData} rowKey="id" onRow={(record, rowIndex) => {
    return {
     onClick: e => {
      // if (e.target.parentElement.cellIndex === 5) {
      setColumnData([record])

     }
     // }

    };
   }
   }
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

export default CategoryTable;