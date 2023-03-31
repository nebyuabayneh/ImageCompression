import { Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  ImageComponent: ReactNode;
  title: string;
  subtitle: string;
};

const Media = ({ ImageComponent, title, subtitle }: Props) => {
  return (
    <Stack direction={"row"} alignItems="center" spacing={10}>
      {ImageComponent}
      <Stack direction="column" spacing={2}>
        <Typography sx={{ fontSize: 14, fontWeight: 700 }}>{title}</Typography>
        <Typography sx={{ fontSize: 14 }}>{subtitle}</Typography>
      </Stack>
    </Stack>
  );
};

export default Media;
