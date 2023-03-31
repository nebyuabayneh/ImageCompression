import Header from "@/components/Header";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import FbIcon from "@/icons/FbIcon";
import LinkedInIcon from "@/icons/LinkedIn";
import TwitterIcon from "@/icons/TwitterIcon";

type LayoutProps = {
  children: React.ReactNode;
};

function BaseLayout(props: LayoutProps) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: (theme) => theme.spacing(5),
        flexGrow: 1,
        minWidth: 0,
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />

      {props.children}
      <Box>
        <Box mt={35}>
          <Divider>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: 14,
                fontWeight: 700,
                mx: 30,
              }}
            >
              Follow Us
            </Typography>
          </Divider>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={30}
            mt={20}
          >
            <FbIcon width="14px" height="14px" />
            <LinkedInIcon width="14px" height="14px" />
            <TwitterIcon width="14px" height="14px" />
          </Stack>
        </Box>
        <AppBar
          position="relative"
          elevation={0}
          sx={{
            padding: (theme) => theme.spacing(10, 0),
            marginTop: (theme) => theme.spacing(30),
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: 14,
              color: "#FFFFFF",
            }}
            align="center"
          >
            © 2023 The News Privacy Policy
          </Typography>
        </AppBar>
      </Box>
    </Container>
  );
}

export default BaseLayout;
