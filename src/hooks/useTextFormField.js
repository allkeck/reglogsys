import { useState, useCallback } from 'react';

import { validate } from '../validation';

export const useTextFormField = (id, validators, init = '') => {
  const [value, setValue] = useState(init);
  const [error, setError] = useState(null);

  const handleChange = useCallback(
    async (event) => {
      const val = event.target.value;

      setValue(val);
      setError(await validate(val, validators));
    },
    [validators]
  );

  const handleBlur = useCallback(async () => {
    setError(await validate(value, validators));
  }, [value, validators]);

  const hasError = useCallback(async () => {
    const err = await validate(value, validators);
    setError(err);

    return !!err;
  }, [value, validators]);

  return {
    id,
    value,
    error,
    hasError,
    handleChange,
    handleBlur,
  };
};
