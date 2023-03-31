import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import * as React from 'react';

const SearchIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon viewBox="0 0 20 20" {...props}>
<path d="M15.5242 13.88C18.3042 10.32 17.6842 5.17996 14.1242 2.39996C10.5642 -0.38004 5.42416 0.23996 2.64416 3.79996C-0.135838 7.35996 0.484162 12.5 4.04416 15.28C7.00416 17.6 11.1642 17.6 14.1242 15.28L17.8842 19.04C18.2642 19.42 18.9042 19.44 19.2842 19.04C19.6642 18.66 19.6842 18.02 19.2842 17.64L15.5242 13.88ZM9.10416 15.02C5.68416 15.02 2.92416 12.26 2.92416 8.83996C2.92416 5.41996 5.68416 2.65996 9.10416 2.65996C12.5242 2.65996 15.2842 5.41996 15.2842 8.83996C15.2642 12.26 12.5042 15.02 9.10416 15.02Z"/>
        </SvgIcon>
    )
}

export default SearchIcon;