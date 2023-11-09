import { useEffect, useState } from 'react';

import { useDebounce } from '../../hooks/useDebounce';
import { InputWrapper } from '../inputWrapper/InputWrapper';

const loginInput = (WrappedComponent) => {
  const LoginInput = ({ inputType, autoComplete, title, setDebounceValue }) => {
    const [userLogin, setUserLogin] = useState('');
    const debounceValue = useDebounce(userLogin, 700);

    const inputChangeHandler = (event) => {
      setUserLogin(event.target.value);
    };

    useEffect(() => {
      setDebounceValue(debounceValue);
    }, [debounceValue, setDebounceValue]);

    return <WrappedComponent inputType={inputType} autoComplete={autoComplete} title={title} onChangeHandler={inputChangeHandler} />;
  };

  return LoginInput;
};

export const LoginInputWrapper = loginInput(InputWrapper);
