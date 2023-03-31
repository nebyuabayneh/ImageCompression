import NewsCard, { NewsApiType } from "@/components/NewsCard";
import { LoadingButton } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import news, { NewsPagination } from "src/api/news";
import _ from "lodash";
import useApi from "@/hooks/useApi";
import NewsCardSkeleton from "@/components/Skeletons/NewsCardSkeleton";
type Props = {};

const Index = (props: Props) => {
  const router = useRouter();

  const { keyword } = router.query;

  const [nextPage, setNextPage] = useState(null);
  const [data, setData] = useState<NewsApiType[]>([]);
  const [fetchLock, setFetchLock] = useState(false);

  const { data: newsData, request, error, loading } = useApi(news.search);

  useEffect(() => {
    if (newsData?.results) {
      setData(_.uniqBy([...data, ...newsData?.results], "title"));
      setNextPage(newsData?.nextPage);
    }
  }, [newsData?.results]);

  const handleShowMore = async () => {
    request({
      q: keyword,
      nextPage: nextPage,
    } as NewsPagination);
  };

  useEffect(() => {
    if (keyword) {
      request({
        q: keyword,
      } as NewsPagination);
    }
  }, [keyword]);

  return (
    <Stack direction="column" spacing={10} sx={{ flex: 0.97 }}>
      <Typography
        variant="h2"
        textAlign={"center"}
        sx={{ textTransform: "capitalize", my: 10 }}
      >
        Search result for '{keyword}'
      </Typography>

      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "repeat(auto-fill, 250px)",
          rowGap: 8,
          columnGap: 10,
        }}
      >
        <NewsCardSkeleton
          skeltonOptions={{
            creator: true,
            description: true,
            category: true,
            numberOfItems: 10,
          }}
          loading={loading}
          data={data}
        >
          {({ news, index }) => (
            <NewsCard
              loading={loading}
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
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={handleShowMore}
        >
          Show more
        </LoadingButton>
      </Box>
    </Stack>
  );
};

export default Index;
