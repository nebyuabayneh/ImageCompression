import NewsCard, { NewsApiType, NewsProps } from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/Skeletons/NewsCardSkeleton";
import useApi from "@/hooks/useApi";
import { Divider, Grid, Stack } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import newsApi, { NewsPagination } from "src/api/news";
import LocationContext from "src/contexts/location";

type Props = {};

const Hero = (props: Props) => {
  const countryCode = React.useContext(LocationContext);
  const fetchNewsApi = useApi(newsApi.fetchNews);

  useEffect(() => {
    fetchNewsApi.request({
      offset: 0,
      limit: 6,
      category: ["top"],
      country: countryCode,
    } as NewsPagination);
  }, []);

  const loading = fetchNewsApi.loading;

  return (
    <section>
      <Stack
        divider={<Divider flexItem orientation="vertical" />}
        direction={{ md: "row", sm: "column", xs: "column" }}
        spacing={10}
        sx={{ flex: 1 }}
      >
        <Stack sx={{ flex: { md: 0.25, sm: 1, xs: 1 } }}>
          <Stack spacing={10}>
            <NewsCardSkeleton
              skeltonOptions={{
                creator: true,
                description: true,
                category: true,
                numberOfItems: 2,
              }}
              loading={loading}
              data={fetchNewsApi?.data?.results?.slice(0, 2)}
            >
              {({ news, index }) => (
                <NewsCard
                  loading={loading}
                  key={index}
                  image={news?.image_url}
                  title={news.title}
                  category={news?.category[0]}
                  author={news?.creator?.join(",")}
                  // imagePosition="right"

                  imageStyle={{ maxHeight: "143px" }}
                  contentAlignment="center"
                  link={news?.link}
                />
              )}
            </NewsCardSkeleton>
          </Stack>
        </Stack>
        <Stack sx={{ flex: { md: 0.5, sm: 1, xs: 1 } }}>
          <NewsCardSkeleton
            skeltonOptions={{
              creator: true,
              description: true,
              category: true,
              numberOfItems: 1,
            }}
            loading={loading}
            data={fetchNewsApi?.data?.results?.slice(2, 3)}
          >
            {({ news, index }) => (
              <NewsCard
                loading={loading}
                key={index}
                image={news?.image_url}
                title={news?.title}
                category={news?.category[0]}
                author={news?.creator?.join(",")}
                // imagePosition="right"

                description={news?.description}
                descriptionStyle={{ fontSize: 22, color: "#000000" }}
                imageStyle={{ maxHeight: "425px" }}
                contentType="float"
                contentAlignment="center"
                titleStyle={{ fontSize: 42 }}
                link={news?.link}
              />
            )}
          </NewsCardSkeleton>
        </Stack>
        <Stack sx={{ flex: { md: 0.25, sm: 1, xs: 1 } }}>
          <Stack
            spacing={10}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <NewsCardSkeleton
              skeltonOptions={{
                creator: true,
                description: false,
                category: true,
                numberOfItems: 3,
              }}
              loading={loading}
              data={fetchNewsApi?.data?.results?.slice(3, 6)}
            >
              {({ news, index }) => (
                <NewsCard
                  loading={loading}
                  key={index}
                  image={news.image_url}
                  title={news.title}
                  author={news?.creator?.join(",")}
                  imagePosition="right"
                  imageStyle={{ maxWidth: "94px" }}
                  contentType="normal"
                  titleStyle={{ fontSize: 16 }}
                  link={news.link}
                  // contentAlignment="center"
                />
              )}
            </NewsCardSkeleton>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
};

export default Hero;
