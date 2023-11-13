const DEFAULT_MAX_CHAR_COUNT = 100;

export const maxLength = (maxCharCount = DEFAULT_MAX_CHAR_COUNT) => {
  if (maxCharCount <= 0) {
    throw new Error(`Валидатор maxLength ожидает положительное ограничение длины строки, получил ${maxCharCount}`);
  }

  return async (value) => (value.length <= maxCharCount ? null : `Количество символов не должно превышать ${maxCharCount}`);
};
