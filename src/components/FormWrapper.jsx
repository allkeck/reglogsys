import { useState } from 'react';

import { Form } from './Form';

export const FormWrapper = () => {
  const [formIsSending, setFormSendingStatus] = useState(false);
  const [formSendingError, setFormSendingError] = useState(false);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Форма пользователя</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form setFormSendingStatus={setFormSendingStatus} setFormSendingError={setFormSendingError} />
        {formIsSending && <div>Preloader</div>}
        {formSendingError && <p>{formSendingError}</p>}
      </div>
    </div>
  );
};
