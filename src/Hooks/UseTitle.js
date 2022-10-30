import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Bd News`;
  }, [title]);
};
export default useTitle;

//dynamic routes
