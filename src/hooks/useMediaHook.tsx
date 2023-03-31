import { useEffect, useState } from "react";
import { useMediaQuery as MuiUseMediaQuery } from "@mui/material";

const useMediaQuery = () => {
  const [isMidScreen, setMidScreen] = useState(() => false);
  const screen = MuiUseMediaQuery("(max-width: 1080px)");

  useEffect(() => {
    setMidScreen(screen);
  }, [screen]);

  return isMidScreen;
};

export default useMediaQuery;
