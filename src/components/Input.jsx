export const Input = ({ type, name, id, autoComplete, title, onChangeHandler, setFocus }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required
          className="input-form"
          onChange={onChangeHandler}
          ref={setFocus}
        />
      </div>
    </div>
  );
};
