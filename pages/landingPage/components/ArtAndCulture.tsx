import NewsCard, { NewsApiType } from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/Skeletons/NewsCardSkeleton";
import useApi from "@/hooks/useApi";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import news, { NewsPagination } from "src/api/news";
import LocationContext from "src/contexts/location";

type Props = {};

const ArtAndCulture = (props: Props) => {
  const theme = useTheme();
  const countryCode = React.useContext(LocationContext);

  const fetchNewsApi = useApi(news.fetchNews);

  React.useEffect(() => {
    fetchNewsApi.request({
      offset: 0,
      limit: 4,
      category: ["politics"],
      country: countryCode,
    } as NewsPagination);
  }, []);

  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Typography variant="h2" textAlign={"center"}>
        Politics
      </Typography>
      <Stack
        spacing={30}
        direction={{ md: "row", sm: "column", xs: "column" }}
        // sx={{ justifyContent: "space-between" }}
        sx={{ flex: 1, display: "flex" }}
      >
        <Stack justifyContent="space-between" sx={{ flex: 0.7 }}>
          <NewsCardSkeleton
            skeltonOptions={{
              creator: true,
              description: true,
              category: true,
              numberOfItems: 1,
            }}
            loading={fetchNewsApi.loading}
            data={fetchNewsApi?.data?.results?.slice(0, 1)}
          >
            {({ news, index }) => (
              <NewsCard
                loading={fetchNewsApi.loading}
                key={index}
                image={news.image_url}
                title={news.title}
                category={news?.category?.join(",")}
                author={news?.creator?.join(",")}
                imagePosition={downMd ? "top" : "left"}
                imageStyle={
                  downMd ? { maxHeight: "235px" } : { maxWidth: "387px" }
                }
                contentAlignment="left"
                description={news.description}
              />
            )}
          </NewsCardSkeleton>

          <Stack
            sx={{ mt: 30 }}
            spacing={20}
            direction={{ md: "row", sm: "column", sx: "column" }}
          >
            <NewsCardSkeleton
              skeltonOptions={{
                creator: true,
                description: false,
                category: false,
                numberOfItems: 2,
              }}
              loading={fetchNewsApi.loading}
              data={fetchNewsApi?.data?.results?.slice(1, 3)}
            >
              {({ news, index }) => (
                <NewsCard
                  loading={fetchNewsApi.loading}
                  key={index}
                  image={news.image_url}
                  title={news.title}
                  author={news?.creator?.join(",")}
                  imagePosition="left"
                  imageStyle={{ maxWidth: "130px" }}
                  contentAlignment="left"
                  // sx={{ mb: 10 }}
                  titleStyle={{ fontSize: 20 }}
                  sx={downMd ? { mb: 10 } : {}}
                />
              )}
            </NewsCardSkeleton>
          </Stack>
        </Stack>

        <NewsCardSkeleton
          skeltonOptions={{
            creator: true,
            description: true,
            category: true,
            numberOfItems: 1,
          }}
          loading={fetchNewsApi.loading}
          data={fetchNewsApi?.data?.results?.slice(3, 4)}
        >
          {({ news, index }) => (
            <NewsCard
              loading={fetchNewsApi.loading}
              key={index}
              sx={{ flex: 0.3 }}
              image={news.image_url}
              title={news.title}
              category={news?.category?.join(",")}
              author={news?.creator?.join(",")}
              // imagePosition="right"
              description={news.description}
              descriptionStyle={{ fontSize: 12, color: "#000000" }}
              imageStyle={{ maxHeight: "425px" }}
              contentType="float"
              contentAlignment="center"
              titleStyle={{ fontSize: 22 }}
              useBorder
            />
          )}
        </NewsCardSkeleton>
      </Stack>
    </>
  );
};

export default ArtAndCulture;
