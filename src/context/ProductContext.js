import { createContext, useState } from "react";

export const productContextProvider = createContext();

export default function ProductContext({ children }) {
  const [valueData, setValue] = useState(1);

  const decreaseHandler = () => {
    if (valueData > 1) setValue(valueData - 1);
  };

  const increaseHandler = () => {
    setValue(parseInt(valueData) + 1);
  };

  return (
    <productContextProvider.Provider
      value={{ decreaseHandler, increaseHandler, valueData, setValue }}
    >
      {children}
    </productContextProvider.Provider>
  );
}
