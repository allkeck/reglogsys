import { useState } from 'react';

import { reglogsysAPI } from '../../api/apiController';
import { serializeForm } from '../../utils/utils';
import { Form } from '../form/Form';

export const FormWrapper = () => {
  const [isAuthorozied, setStatusAuthentication] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = serializeForm(event.target);

    const result = reglogsysAPI.reg(data);

    console.log(result);

    if (result.status === 'success') {
      setStatusAuthentication(true);
    } else {
      setStatusAuthentication(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Форма пользователя</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {
          isAuthorozied ?
          <p>го играть</p> : <Form handleSubmit={handleSubmit} />
        }
      </div>
    </div>
  );
};
