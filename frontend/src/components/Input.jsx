export const Input = ({ title, setForm, value, name, ...rest }) => {
  return (
    <label className="w-[100%] text-primary ">
      {title}
      <input
        {...rest}
        value={value}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, [name]: e.target.value }))
        }
        placeholder={title}
        className="form-text"
        required
      />
    </label>
  )
}
