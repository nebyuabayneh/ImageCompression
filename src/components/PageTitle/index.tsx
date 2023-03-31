import { Typography } from "@mui/material";
import React from "react";

type PageTitleProps = {
  text: string;
  textAlign: "center" | "left" | "right";
};
const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <Typography
      sx={{
        fontSize: (theme) => theme.typography.fontSize + 24,
        textAlign: props.textAlign,
      }}
    >
      {props.text}
    </Typography>
  );
};

export default PageTitle;
