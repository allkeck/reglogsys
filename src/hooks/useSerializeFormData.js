import { useState } from "react";

import { serializeForm } from "../utils/serializeForm";

export const useSerializeFormData = (formNode) => {
  const [formData, setFormData] = useState(null);

  setFormData(serializeForm(formNode));

  return formData;
};
