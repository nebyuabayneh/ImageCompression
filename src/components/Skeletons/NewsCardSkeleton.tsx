import { ReactNode } from "react";
import { NewsApiType } from "../NewsCard";

type createNewsProps = {
  options: {
    description: boolean;
    category: boolean;
    creator: boolean;
  };
  numberOfItems: number;
};

const createNewsArray = ({
  options: { description, category, creator },
  numberOfItems,
}: createNewsProps) => {
  let outPutArray = [] as NewsApiType[];

  for (let i = 0; i < numberOfItems; i++) {
    outPutArray.push({
      image_url: "",
      title: "title",
      description: description ? "description" : "",
      category: category ? ["category"] : [""],
      creator: creator ? ["creator"] : undefined,
    });
  }
  return outPutArray;
};

type NewsCardSkeletonProps = {
  loading: boolean;
  data: NewsApiType[];
  skeltonOptions: {
    description: boolean;
    creator: boolean;
    category: boolean;
    numberOfItems: number;
  };
  children: ({
    news,
    index,
  }: {
    news: NewsApiType;
    index: number;
  }) => ReactNode;
};

const NewsCardSkeleton = ({
  loading,
  data,
  children,
  skeltonOptions: { description, creator, category, numberOfItems },
}: NewsCardSkeletonProps) => {
  return (
    <>
      {(loading
        ? createNewsArray({
            options: {
              description,
              creator,
              category,
            },
            numberOfItems,
          })
        : data
      ).map((news, index) => children({ news, index }))}
    </>
  );
};

export default NewsCardSkeleton;
