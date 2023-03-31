import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import * as React from "react";

const FbIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox="0 0 6 14" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.93176 13.7965V6.89746H5.68099L5.91281 4.52H3.93176L3.93473 3.33006C3.93473 2.70998 3.98884 2.37773 4.80687 2.37773H5.90042V0H4.15094C2.04953 0 1.30988 1.15332 1.30988 3.09285V4.52027H0V6.89773H1.30988V13.7965H3.93176Z"
      />
    </SvgIcon>
  );
};

export default FbIcon;
