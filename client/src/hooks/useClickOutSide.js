import { useEffect } from "react";

const useClickOutSide = (ref, setDisplayOption = false) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDisplayOption(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setDisplayOption]);
};

export default useClickOutSide;
