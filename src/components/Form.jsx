import { useState, useEffect, useCallback, useRef } from 'react';

import { reglogsysAPI } from '../api/apiController';
import { useTextFormField } from '../hooks/useTextFormField';
import { required, minLength, maxLength } from '../validation';
import { useForm } from '../hooks/useForm';
import { serializeForm } from '../utils/serializeForm';
import { Input } from './Input';
import { LoginInput } from './LoginInput';

const loginValidators = [required(), minLength(2)];
const passwordValidators = [required(), maxLength(12)];

export const Form = ({ setFormSendingStatus, setFormSendingError }) => {
  const [userStatus, setUserStatus] = useState(false);
  const [debounceValue, setDebounceValue] = useState('');
  const [serializedData, setSerializedData] = useState('');
  const formNode = useRef(null);

  const setFocus = useCallback((element) => {
    element?.focus();
  }, []);

  const login = useTextFormField('inputUsername', loginValidators);
  const password = useTextFormField('inputPassword', passwordValidators);

  useEffect(() => {
    if (formNode.current) {
      setSerializedData(serializeForm(formNode.current));
    }
  }, [login.value, password.value]);

  useEffect(() => {
    const result = reglogsysAPI.checkUserLogin(debounceValue);

    setUserStatus(result);
  }, [debounceValue]);

  const form = useForm({
    fields: [login, password],
    apiCall: () => {
      setFormSendingStatus(true);

      return userStatus ? reglogsysAPI.auth(serializedData) : reglogsysAPI.reg(serializedData);
    },
    onSuccess: (response) => {
      setFormSendingStatus(false);
      
      console.log(response);
    },
    onFailure: (error) => {
      setFormSendingError(error);
      setFormSendingStatus(false);
    },
  });

  return (
    <form className="space-y-6" action="#" method="POST" ref={formNode} onSubmit={form.handleFormSubmit} noValidate>
      <LoginInput
        type="text"
        name="username"
        id={login.id}
        autoComplete="email"
        title="Логин"
        setDebounceValue={setDebounceValue}
        setFocus={setFocus}
        onBlurHandler={login.handleBlur}
        onChangeHandler={login.handleChange}
        errorMessage={login.error}
      />

      {debounceValue && (
        <>
          <Input
            type="password"
            name="password"
            id={password.id}
            autoComplete="current-password"
            title={userStatus ? 'Введите пароль' : 'Придумайте пароль'}
            onBlurHandler={password.handleBlur}
            onChangeHandler={password.handleChange}
            errorMessage={password.error}
          />

          <div>
            <button className="button-form" disabled={form.isSending || form.hasFieldErrors}>
              {userStatus ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </div>
        </>
      )}
    </form>
  );
};
