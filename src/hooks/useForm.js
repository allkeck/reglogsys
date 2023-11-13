import { useState } from 'react';

export const useForm = ({ fields, apiCall, onSuccess, onFailure }) => {
  const [isSending, setIsSending] = useState(false);
  const [sendingError, setSendingError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const errors = await Promise.all(fields.map((field) => field.hasError()));
    const isFormValid = errors.every((error) => !error);

    if (isFormValid) {
      setIsSending(true);
      setSendingError('');

      try {
        const response = await apiCall();
        onSuccess(response);
      } catch (err) {
        const msg = err ? err.message : 'Что-то пошло не так, попробуйте ещё раз';

        setSendingError(msg);
        onFailure(msg);
      } finally {
        setIsSending(false);
      }
    }
  };

  const hasFieldErrors = fields.some((field) => !!field.error);

  return {
    isSending,
    sendingError,
    hasFieldErrors,
    handleFormSubmit,
  };
};
