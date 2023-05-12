import {Select} from "antd";

const {Option} = Select;

export default function SingleBox({data, formValues, setFormValues}) {

 // console.log('data', onChan);
 const handleChange = (value) => {

  setFormValues((prevValues) => ({
   ...prevValues,
   settings: {
    ...prevValues['settings'],
    notifications: value,
   },
  }));

 }

 return (
  <Select
   className={` border-purple-600/50 w-[70%] rounded h-8`}
   style={{
    width: 120
   }}
 value={formValues?.settings?.notifications}
   onChange={handleChange}>
   {data?.[0].values.map((item) => (
    <Option key={item.id} value={item.id}> {item.value}</Option>
   ))}
  </Select>
 )
}