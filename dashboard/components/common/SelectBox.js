import React, {useEffect, useState} from 'react';
import {Select} from 'antd';

const {Option} = Select;


const MultiSelectDropdown = ({item, formValues, allData, onchange}) => {
 console.log('item', formValues)
 const [selectedItems, setSelectedItems] = useState([]);
 // console.log('formValues', formValues)
 const handleSelectChange = (selectedItems) => {
  setSelectedItems(selectedItems);
  formValues[item.key] = selectedItems;
 };
 useEffect(() => {
  // console.log('formValues[item.key]', formValues[item.key].map((r) => r['_id']))
  if (Array.isArray(formValues[item.key])) {
  setSelectedItems(formValues[item.key].map((r) => r))
  }

 }, [formValues, item.key])
 console.log('formValues[item.key]', formValues[item.key])
const data = item.key === 'genre' ? allData?.[0] : item.key === 'stars' ? allData?.[1] : item.key === 'scriptwriter' ? allData?.[2] : item.key === 'directorId' ? allData?.[3] : []
 return (
  <Select
   mode="multiple"
   // style={{ width: '70%'}}
   className={' border-purple-600/50 w-[70%] rounded h-8 custom-select '}
   placeholder="Select items"
   value={selectedItems}
   onChange={handleSelectChange}
  >
   { !!data &&
    data.map((item) => (
    <Option key={item.id} value={item._id}> {item.name}</Option>
   ))}

  </Select>
 );
};

export default MultiSelectDropdown;
