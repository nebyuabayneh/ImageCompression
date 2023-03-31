import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import FbIcon from "@/icons/FbIcon";
import LinkedInIcon from "@/icons/LinkedIn";
import { SvgIconProps } from "@/icons/index";
import TwitterIcon from "@/icons/TwitterIcon";
import SearchIcon from "@/icons/SearchIcon";
import { SvgIconType } from "@/icons/SvgIconType";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material/styles";
import { AppBar as MuiAppBar, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const MenuLink = styled(Link)(({ theme }) => ({}));

const menus: string[] = [
  "Arts & Culture",
  "design",
  "fashion",
  "food & drinks",
  "music",
  "travel",
  "lifestyle",
];

type IconProps = SvgIconProps & {
  IconItem: SvgIconType;
};

const RenderIcon: React.FC<IconProps> = (props) => (
  <props.IconItem
    {...props}
    sx={{
      ...props.sx,
      "&:hover": {
        cursor: "pointer",
      },
      color: "bw.lightGray",
    }}
  />
);

const mobileHeader = () => (
  <Box
    position="relative"
    sx={{
      color: "common.black",
      backgroundColor: "common.white",
      border: "none",
    }}
  >
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" spacing={15}>
        <Link href="#" style={{ color: "common.black" }}>
          Popluar
        </Link>
        <Link href="#" style={{ color: "common.black" }}>
          Latest
        </Link>
      </Stack>
      <Typography variant="h1">
        <Box component="span" sx={{ color: "#E7131A" }}>
          The
        </Box>{" "}
        <Box component="span" sx={{ color: "#084F92" }}>
          Human
        </Box>{" "}
        <Box component="span" sx={{ color: "#E7131A" }}>
          Times
        </Box>{" "}
      </Typography>
      <Stack spacing={12.5} direction="row" alignItems="center">
        <RenderIcon IconItem={FbIcon} sx={{ width: 6, height: 14 }} />
        <RenderIcon IconItem={LinkedInIcon} sx={{ width: 17, height: 15 }} />
        <RenderIcon IconItem={TwitterIcon} sx={{ width: 17, height: 14 }} />
        <RenderIcon IconItem={SearchIcon} sx={{ width: 20, height: 20 }} />
      </Stack>
    </Stack>
  </Box>
);

type NavItemProps = {
  title: string;
  color?: string;
  href: string;
};

const NavItem = ({ title, color = "#000", href }: NavItemProps) => {
  return (
    <Link
      style={{
        fontSize: "18px",
        color: color,
        textDecoration: "none",
        padding: "8px 2px",
        textTransform: "capitalize",
        borderBottom: "1px solid #ccc",
      }}
      href={href}
    >
      {title}
    </Link>
  );
};

const FilterLinks = () => (
  <Stack direction="row" spacing={15}>
    <Link href={`/news/world`} style={{ color: "common.black" }}>
      Popluar
    </Link>
    <Link href={`/news/top`} style={{ color: "common.black" }}>
      Latest
    </Link>
  </Stack>
);

const HiddenIcons = () => (
  <Stack spacing={12.5} direction="row">
    <RenderIcon IconItem={FbIcon} sx={{ width: 6, height: 14 }} />
    <RenderIcon IconItem={LinkedInIcon} sx={{ width: 17, height: 15 }} />
    <RenderIcon IconItem={TwitterIcon} sx={{ width: 17, height: 14 }} />
  </Stack>
);

function Header() {
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const [isShown, setIsShown] = useState(false);
  const [isSearchShown, setIsSearchShown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const selectedRouteUrl = router.pathname;

  const categories = [
    "business",
    "entertainment",
    "environment",
    "food",
    "health",
    "politics",
    "science",
    "sports",
    "technology",
  ];

  const routes = categories.map((category: string) => ({
    label: category,
    url: `/news/${category}`,
  }));

  useEffect(() => {
    if (downLg) {
      setIsShown(false);
    }
  }, [downLg]);

  useEffect(() => {
    if (downLg) {
      setIsShown(false);
    }
  }, [selectedRouteUrl]);

  return (
    <>
      <Box
        position="relative"
        sx={{
          color: "common.black",
          backgroundColor: "common.white",
          border: "none",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <>
            {downLg ? (
              <img
                src="/icons/nav-toggler.svg"
                onClick={() => setIsShown(!isShown)}
              />
            ) : (
              <FilterLinks />
            )}
          </>
          <Link href={"/"}>
            <Typography variant="h1">
              <Box component="span" sx={{ color: "#E7131A" }}>
                The
              </Box>{" "}
              <Box component="span" sx={{ color: "#084F92" }}>
                Human
              </Box>{" "}
              <Box component="span" sx={{ color: "#E7131A" }}>
                Times
              </Box>{" "}
            </Typography>
          </Link>

          <Stack spacing={12.5} direction="row" alignItems="center">
            {!downLg && <HiddenIcons />}
            <RenderIcon
              IconItem={SearchIcon}
              sx={{ width: 20, height: 20 }}
              onClick={() => setIsSearchShown(!isSearchShown)}
            />
          </Stack>
        </Stack>
      </Box>
      {isShown && downLg && (
        <Stack direction="column" sx={{ mt: 2 }}>
          {routes.map((route, index) => (
            <NavItem
              key={index}
              title={route.label}
              href={route.url}
              color={selectedRouteUrl === route.url ? "#30CD5C" : "#000"}
            />
          ))}
        </Stack>
      )}

      {downLg && (
        <Stack direction="row" justifyContent={"space-between"} sx={{ mt: 17 }}>
          <FilterLinks />
          <HiddenIcons />
        </Stack>
      )}

      {isSearchShown && (
        <Box
          sx={{
            mt: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ maxWidth: "md" }}
            fullWidth
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary">
                    <SearchIcon
                      onClick={() => router.push(`/search/${searchValue}`)}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}

      {!downLg && (
        <MuiAppBar
          elevation={0}
          position="relative"
          sx={{
            border: "1px solid",
            borderColor: "rgba(77, 77, 77, 0.3)",
            borderLeftWidth: 0,
            borderRightWidth: 0,
            marginTop: (theme) => theme.spacing(23.5),
            marginBottom: (theme) => theme.spacing(23.5),
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "700",
            padding: (theme) => theme.spacing(10, 22),
            backgroundColor: "common.white",
          }}
        >
          <Stack direction="row" justifyContent="space-evenly">
            {routes.map((menu, index) => (
              <>
                <MenuLink href={menu.url} key={index}>
                  {menu.label}
                </MenuLink>
                {index < menus.length - 1 && (
                  <Divider flexItem orientation="vertical" />
                )}
              </>
            ))}
          </Stack>
        </MuiAppBar>
      )}
    </>
  );
}

export default Header;
