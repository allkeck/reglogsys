import { useState, useEffect } from 'react';

import { reglogsysAPI } from '../../api/apiController';
import { InputWrapper } from '../inputWrapper/InputWrapper';
import { LoginInputWrapper } from '../loginInput/LoginInputWrapper';

export const Form = ({ handleSubmit }) => {
  const [userStatus, setUserStatus] = useState(false);
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    const result = reglogsysAPI.checkUserLogin(debounceValue);

    setUserStatus(result);
  }, [debounceValue]);

  return (
    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} noValidate>
      <LoginInputWrapper inputType="username" autoComplete="email" title="Логин" setDebounceValue={setDebounceValue} />

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
