import { useState } from "react";

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChage = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };

  return { value, setValue, onChage };
};
