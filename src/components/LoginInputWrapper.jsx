import { useEffect, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';
import { InputWrapper } from './InputWrapper';

const loginInput = (WrappedComponent) => {
  const LoginInput = ({ setDebounceValue, ...props }) => {
    const [userLogin, setUserLogin] = useState('');
    const debounceValue = useDebounce(userLogin, 700);

    const inputChangeHandler = (event) => {
      setUserLogin(event.target.value);
    };

    useEffect(() => {
      setDebounceValue(debounceValue);
    }, [debounceValue, setDebounceValue]);

    return <WrappedComponent {...props} onChangeHandler={inputChangeHandler} />;
  };

  return LoginInput;
};

export const LoginInputWrapper = loginInput(InputWrapper);
