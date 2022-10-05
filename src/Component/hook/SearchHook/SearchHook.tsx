import { useEffect, useState } from "react";

export const DelayDebounce = () => {
  const [value, setValue] = useState<string>("");
  const [searchValue, setsearchValue] = useState<string>("");

  useEffect(() => {
    let delayDebounce = setTimeout(() => {
      setsearchValue(value);
    }, 500);
    

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [value]);
  return {
    setValue,
    searchValue,
    value,
  }
};
