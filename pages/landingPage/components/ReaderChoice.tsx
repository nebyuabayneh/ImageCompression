import NewsCard, { NewsApiType } from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/Skeletons/NewsCardSkeleton";
import useApi from "@/hooks/useApi";
import { Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import news, { NewsCategory, NewsPagination } from "src/api/news";
import LocationContext from "src/contexts/location";

const ReaderChoice = ({ category }: { category: NewsCategory }) => {
  const fetchNewsApi = useApi(news.fetchNews);
  const countryCode = React.useContext(LocationContext);

  useEffect(() => {
    fetchNewsApi.request({
      offset: 0,
      limit: 4,
      category: [category],
      country: countryCode,
    } as NewsPagination);
  }, []);
  const loading = fetchNewsApi.loading;
  return (
    <Stack spacing={22}>
      <Divider>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 14,
            fontWeight: 700,
            mx: 20,
          }}
        >
          Readers' Choice
        </Typography>
      </Divider>

      <Stack
        direction={{ md: "row", sm: "column", xs: "column" }}
        justifyContent="space-between"
        alignItems={"center"}
        spacing={10}
      >
        <NewsCardSkeleton
          skeltonOptions={{
            creator: false,
            description: false,
            category: false,
            numberOfItems: 4,
          }}
          loading={loading}
          data={fetchNewsApi.data.results}
        >
          {({ news, index }) => (
            <NewsCard
              loading={loading}
              image={news?.image_url}
              title={news?.title}
              imagePosition="left"
              imageStyle={{ maxWidth: "80px" }}
              contentType="normal"
              titleStyle={{ fontSize: 18 }}
              // contentAlignment="center"
            />
          )}
        </NewsCardSkeleton>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default ReaderChoice;
