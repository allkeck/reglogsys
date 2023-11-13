export const required = (message = 'Обязательное поле') => {
  return async (value) => (value ? null : message);
};
