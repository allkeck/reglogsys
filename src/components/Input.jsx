export const Input = ({ type, name, id, autoComplete, title, onChangeHandler, onBlurHandler, setFocus, errorMessage }) => {
  return (
    <div>
      <label htmlFor={id} className="label-form">
        {title}
      </label>
      {errorMessage && <InputError message={errorMessage} />}
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required
          className="input-form"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          ref={setFocus}
        />
      </div>
    </div>
  );
};

const InputError = ({ message }) => {
  return <span className="input-form__error">{message}</span>;
};
