export const Input = ({inputType, autoComplete, onChangeHandler, setFocus}) => {
  return (
    <input
      id={inputType}
      name={inputType}
      type={inputType}
      autoComplete={autoComplete}
      required
      className="input-form"
      onChange={onChangeHandler}
      ref={setFocus}
    />
  )
};
