export const Input = ({inputType, autoComplete, onChangeHandler}) => {
  return (
    <input
      id={inputType}
      name={inputType}
      type={inputType}
      autoComplete={autoComplete}
      required
      className="input-form"
      onChange={onChangeHandler}
    />
  )
};
