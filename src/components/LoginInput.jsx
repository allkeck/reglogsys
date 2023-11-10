import { useEffect, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';
import { Input } from './Input';

const loginInput = (WrappedComponent) => {
  const LoginInputComponent = ({ setDebounceValue, ...props }) => {
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

  return LoginInputComponent;
};

export const LoginInput = loginInput(Input);
