import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import type { NextComponentType } from "next";

import "../styles/globals.css";
import createEmotionCache from "@/theme/createEmotionCache";
import Head from "next/head";
import theme from "@/theme/index";
import type { LayoutComponent } from "../src/Layout";
import BaseLayout from "@/layout/BaseLayout";
import useApi from "@/hooks/useApi";
import location from "src/api/location";
import { useEffect } from "react";
import LocationContext from "src/contexts/location";

const clientSideEmotionCaching = createEmotionCache();
type NextComponentWithLayout = NextComponentType & {
  layout: LayoutComponent;
};

interface AppMainProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextComponentWithLayout;
}

export default function App(props: AppMainProps) {
  const {
    Component,
    pageProps,
    emotionCache = clientSideEmotionCaching,
  } = props;

  const Layout: LayoutComponent =
    Component.layout || (({ children }) => <BaseLayout>{children}</BaseLayout>);

  const fetchLocation = useApi(location.getGeoInfo);

  useEffect(() => {
    fetchLocation.request();
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <LocationContext.Provider
          // value={fetchLocation?.data?.country_code?.toLowerCase()}
          value={"us"}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocationContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
