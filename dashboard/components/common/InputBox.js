

function InputBox(props) {
 // console.log('props', props.onChange)
 return <input
  className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2"
  type={props.item.type}
  name={props.item.key}
  value={props.formValues[props.item.key]}
  onChange={props.onChange}
 />;
}

export default InputBox;