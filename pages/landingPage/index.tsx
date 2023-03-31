import * as React from "react";
import BaseLayout from "@/layout/BaseLayout";
import ReaderChoice from "./components/ReaderChoice";
import {
  AppBar,
  Box,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FbIcon from "@/icons/FbIcon";
import LinkedInIcon from "@/icons/LinkedIn";
import TwitterIcon from "@/icons/TwitterIcon";
import NewsCard, { NewsApiType } from "@/components/NewsCard";
import Hero from "./components/Hero";
import ArtAndCulture from "./components/ArtAndCulture";
import Design from "./components/Design";
import Media from "@/components/Media";
import SubscriptionForm from "@/components/SubscriptionForm";
import news, { NewsPagination } from "src/api/news";
import useApi from "@/hooks/useApi";
import LocationContext from "src/contexts/location";
import NewsCardSkeleton from "@/components/Skeletons/NewsCardSkeleton";

function LandingPage() {
  const theme = useTheme();

  const countryCode = React.useContext(LocationContext);

  const fetchSportNewsApi = useApi(news.fetchNews);
  const fetchBusinessNewsApi = useApi(news.fetchNews);
  const fetchNewsSources = useApi(news.fetchNewsSources);

  React.useEffect(() => {
    fetchSportNewsApi.request({
      offset: 0,
      limit: 3,
      category: ["sports"],
      country: countryCode,
    } as NewsPagination);

    fetchBusinessNewsApi.request({
      offset: 0,
      limit: 9,
      category: ["top"],
      country: countryCode,
    } as NewsPagination);

    fetchNewsSources.request({});
  }, []);

  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack spacing={23.5} sx={{ mt: 23.5 }}>
        <Hero />
        <ReaderChoice category="entertainment" />
        <Stack
          spacing={25}
          direction={{ md: "row", sm: "column", xs: "column" }}
          divider={
            <Divider
              orientation={downMd ? "horizontal" : "vertical"}
              flexItem
            />
          }
        >
          <NewsCardSkeleton
            skeltonOptions={{
              creator: true,
              description: false,
              category: true,
              numberOfItems: 3,
            }}
            loading={fetchSportNewsApi.loading}
            data={fetchSportNewsApi?.data?.results}
          >
            {({ news, index }) => (
              <NewsCard
                loading={fetchSportNewsApi.loading}
                image={news?.image_url}
                title={news?.title}
                category={news?.category?.join(",")}
                author={news?.creator?.join(",")}
                // imagePosition="right"

                imageStyle={{ maxHeight: "235px" }}
                contentAlignment="left"
                description={news.description}
              />
            )}
          </NewsCardSkeleton>
        </Stack>
        <ReaderChoice category="science" />
        <ArtAndCulture />
        <ReaderChoice category="food" />
        <Design />
        <Typography variant="h2">More Top news</Typography>
        <Stack
          // flex={1}
          spacing={20}
          justifyContent={"space-between"}
          direction={{ md: "row", sm: "column", xs: "column" }}
        >
          <Stack
            // flex={0.9}
            spacing={25}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Stack
              spacing={25}
              divider={
                <Divider
                  orientation={downMd ? "horizontal" : "vertical"}
                  flexItem
                />
              }
              direction={{ md: "row", sm: "column", xs: "column" }}
            >
              <NewsCardSkeleton
                skeltonOptions={{
                  creator: true,
                  description: true,
                  category: true,
                  numberOfItems: 3,
                }}
                loading={fetchBusinessNewsApi.loading}
                data={fetchBusinessNewsApi.data.results.slice(0, 3)}
              >
                {({ news, index }) => (
                  <NewsCard
                    loading={fetchBusinessNewsApi.loading}
                    key={index}
                    image={news.image_url}
                    title={news.title}
                    category={news?.category?.join(",")}
                    author={news?.creator?.join(",")}
                    // imagePosition="right"

                    imageStyle={{ maxHight: "257px" }}
                    contentAlignment="left"
                    description={news.description}
                    titleStyle={{ fontSize: 20 }}
                    descriptionStyle={{
                      fontSize: 12,
                      color: "#000000",
                      lineHeight: 1.5,
                    }}
                  />
                )}
              </NewsCardSkeleton>
            </Stack>
            <Stack
              spacing={25}
              divider={
                <Divider
                  orientation={downMd ? "horizontal" : "vertical"}
                  flexItem
                />
              }
              direction={{ md: "row", sm: "column", xs: "column" }}
            >
              <NewsCardSkeleton
                skeltonOptions={{
                  creator: true,
                  description: true,
                  category: true,
                  numberOfItems: 3,
                }}
                loading={fetchBusinessNewsApi.loading}
                data={fetchBusinessNewsApi.data.results.slice(3, 6)}
              >
                {({ news, index }) => (
                  <NewsCard
                    loading={fetchBusinessNewsApi.loading}
                    key={index}
                    image={news.image_url}
                    title={news.title}
                    category={news?.category?.join(",")}
                    author={news?.creator?.join(",")}
                    // imagePosition="right"

                    imageStyle={{ maxHight: "257px" }}
                    contentAlignment="left"
                    description={news.description}
                    titleStyle={{ fontSize: 20 }}
                    descriptionStyle={{
                      fontSize: 12,
                      color: "#000000",
                      lineHeight: 1.5,
                    }}
                  />
                )}
              </NewsCardSkeleton>
            </Stack>
            <Stack
              spacing={25}
              divider={
                <Divider
                  orientation={downMd ? "horizontal" : "vertical"}
                  flexItem
                />
              }
              direction={{ md: "row", sm: "column", xs: "column" }}
            >
              <NewsCardSkeleton
                skeltonOptions={{
                  creator: true,
                  description: true,
                  category: true,
                  numberOfItems: 3,
                }}
                loading={fetchBusinessNewsApi.loading}
                data={fetchBusinessNewsApi.data.results.slice(6, 9)}
              >
                {({ news, index }) => (
                  <NewsCard
                    loading={fetchBusinessNewsApi.loading}
                    key={index}
                    image={news.image_url}
                    title={news.title}
                    category={news?.category?.join(",")}
                    author={news?.creator?.join(",")}
                    // imagePosition="right"

                    imageStyle={{ maxHight: "257px" }}
                    contentAlignment="left"
                    description={news.description}
                    titleStyle={{ fontSize: 20 }}
                    descriptionStyle={{
                      fontSize: 12,
                      color: "#000000",
                      lineHeight: 1.5,
                    }}
                  />
                )}
              </NewsCardSkeleton>
            </Stack>
          </Stack>
          <Stack spacing={23}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 200px)",
                rowGap: 8,
                columnGap: 10,
              }}
            >
              {fetchNewsSources?.data?.results?.slice(0, 7).map((source) => {
                return (
                  <Media
                    ImageComponent={
                      <CardMedia
                        component={"img"}
                        src="https://dummyimage.com/60x60/"
                        sx={{ borderRadius: "100%", width: 60, height: 60 }}
                      />
                    }
                    title={"asdsadasd"}
                    subtitle={"asdasd.com"}
                  />
                );
              })}
            </Box>
            <SubscriptionForm />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default LandingPage;
