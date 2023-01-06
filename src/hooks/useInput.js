import { useState } from 'react';

function useInput(defaultValue) {
  const [inputs, setInputs] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return [inputs, onValueChangeHandler];
}

export default useInput;
