import { ChangeEvent, useState } from 'react';

export const useInput = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue ?? '');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { value, setValue, handleInputChange };
};
