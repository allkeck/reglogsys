import { useState, useEffect, useCallback } from 'react';

import { reglogsysAPI } from '../api/apiController';
import { InputWrapper } from './InputWrapper';
import { LoginInputWrapper } from './LoginInputWrapper';

export const Form = ({ handleSubmit }) => {
  const [userStatus, setUserStatus] = useState(false);
  const [debounceValue, setDebounceValue] = useState('');
  const setFocus = useCallback((element) => {
    element?.focus();
  }, []);

  useEffect(() => {
    const result = reglogsysAPI.checkUserLogin(debounceValue);

    setUserStatus(result);
  }, [debounceValue]);

  return (
    <form className="space-y-6" action="#" method="POST" onSubmit={(event) => handleSubmit(event, userStatus)} noValidate>
      <LoginInputWrapper inputType="username" autoComplete="email" title="Логин" setDebounceValue={setDebounceValue} setFocus={setFocus} />

      {debounceValue && (
        <>
          <InputWrapper inputType="password" autoComplete="current-password" title={userStatus ? 'Введите пароль' : 'Придумайте пароль'} />

          <div>
            <button className="button-form">{userStatus ? 'Войти' : 'Зарегистрироваться'}</button>
          </div>
        </>
      )}
    </form>
  );
};
