import NewsCard, { NewsApiType } from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/Skeletons/NewsCardSkeleton";
import useApi from "@/hooks/useApi";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import news, { NewsPagination } from "src/api/news";
import LocationContext from "src/contexts/location";

type Props = {};

const Design = (props: Props) => {
  const theme = useTheme();
  const countryCode = React.useContext(LocationContext);

  const fetchNewsApi = useApi(news.fetchNews);

  React.useEffect(() => {
    fetchNewsApi.request({
      offset: 0,
      limit: 4,
      category: ["technology"],
      country: countryCode,
    } as NewsPagination);
  }, []);

  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Typography variant="h2" textAlign={"center"}>
        Technology
      </Typography>
      <Stack direction={{ md: "row", sm: "column", xs: "column" }} spacing={20}>
        <NewsCardSkeleton
          skeltonOptions={{
            creator: true,
            description: true,
            category: true,
            numberOfItems: 1,
          }}
          loading={fetchNewsApi.loading}
          data={fetchNewsApi.data.results.slice(0, 1)}
        >
          {({ news, index }) => (
            <NewsCard
              loading={fetchNewsApi.loading}
              key={index}
              image={news.image_url}
              title={news.title}
              category={news?.category?.join(",")}
              author={news?.creator?.join(",")}
              // imagePosition="right"
              description={news?.description}
              descriptionStyle={{ fontSize: 12, color: "#000000" }}
              imageStyle={{ maxHeight: "270px" }}
              contentType="float"
              contentAlignment="center"
              titleStyle={{ fontSize: 22 }}
              useBorder
              sx={{ flex: 0.3 }}
              // contentAlignment="center"
            />
          )}
        </NewsCardSkeleton>

        <Stack sx={{ flex: 0.7 }}>
          <NewsCardSkeleton
            skeltonOptions={{
              creator: true,
              description: true,
              category: true,
              numberOfItems: 1,
            }}
            loading={fetchNewsApi.loading}
            data={fetchNewsApi.data?.results?.slice(1, 2)}
          >
            {({ news, index }) => (
              <NewsCard
                loading={fetchNewsApi.loading}
                key={index}
                image={news.image_url}
                title={news.title}
                category={news?.category?.join(",")}
                author={news?.creator?.join(",")}
                imagePosition={downMd ? "top" : "right"}
                imageStyle={
                  downMd ? { maxHeight: "235px" } : { maxWidth: "387px" }
                }
                contentAlignment="left"
                description={news?.description}
                // contentAlignment="center"
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
                category: true,
                numberOfItems: 2,
              }}
              loading={fetchNewsApi.loading}
              data={fetchNewsApi.data?.results?.slice(2, 4)}
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
                  // contentAlignment="center"
                />
              )}
            </NewsCardSkeleton>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Design;
