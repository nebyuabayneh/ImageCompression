import { NewsApiType } from "@/components/NewsCard";
import client from "./client";

const endpoint = "/news";
const apiKey = "pub_1789920d79648b7dddcf369a513979d65b992";
const language = "en";
const country = "us";

export type NewsCategory =
  | "business"
  | "entertainment"
  | "environment"
  | "food"
  | "health"
  | "politics"
  | "science"
  | "sports"
  | "technology"
  | "top"
  | "world";

export type NewsPagination = {
  offset: number;
  limit: number;
  category: NewsCategory[];
  nextPage?: any;
  country?: any;
  q?: any;
};

async function fetchNews({ offset, limit, category, country }: NewsPagination) {
  const news = [];
  let nextPage = null;

  while (news.length < limit) {
    const response = (await client.get(
      `${endpoint}?apikey=${apiKey}&country=${
        country || "us"
      }&language=${language}&category=${category.join(",")}`,
      { page: nextPage }
    )) as { ok: boolean; data: any; problem: any };

    if (response.ok) {
      const { data } = response;

      // Filter out news with broken image URL
      const filteredData = data.results.filter(
        (item: NewsApiType) => item.image_url !== null
      );

      news.push(...filteredData);

      if (news.length >= limit) {
        break;
      }

      nextPage = data.nextPage;
      if (!nextPage) {
        break;
      }
    } else {
      // handle error here
      console.log(response.problem);
      break;
    }
  }

  return {
    data: { results: news.slice(offset, offset + limit), nextPage: nextPage },
    ok: true,
  };
}

const fetchNewsByCategory = async ({ category, nextPage }: any) => {
  return client.get(
    `${endpoint}?apikey=${apiKey}&country=${country}&language=${language}&category=${category.join(
      ","
    )}`,
    { page: nextPage }
  );
};

const search = async ({ q, nextPage }: any) => {
  return client.get(
    `${endpoint}?apikey=${apiKey}&country=${country}&language=${language}&q=${q}`,
    { page: nextPage }
  );
};

const fetchNewsSources = async () => {
  return client.get(`/sources?apikey=${apiKey}`);
};
export default {
  fetchNews,
  fetchNewsByCategory,
  search,
  fetchNewsSources,
};
