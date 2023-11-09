import { Input } from '../input/Input';

export const InputWrapper = ({ inputType, autoComplete, title, onChangeHandler, setFocus }) => {
  return (
    <div>
      <label htmlFor={inputType} className="block text-sm font-medium leading-6 text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <Input inputType={inputType} autoComplete={autoComplete} onChangeHandler={onChangeHandler} setFocus={setFocus} />
      </div>
    </div>
  );
};

