import { useState } from 'react';

export const useFormSelect = <T>(initData: T) => {
  const [selectData, setSelectData] = useState<T>(initData);

  const updateField = (fieldName: string, value: any) => {
    setSelectData({
      ...selectData,
      [fieldName]: value,
    });
  };

  return { selectData, updateField };
};
