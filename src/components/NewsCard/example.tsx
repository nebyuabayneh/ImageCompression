import React from "react";
import NewsCard from ".";

type Props = {};

const example = (props: Props) => {
  return (
    <NewsCard
      image="https://dummyimage.com/640x4:3/"
      title="All The Things That Make Up A Society lorem in the world!"
      category="Arts & Culture"
      author="Katherine J. Wu"
      // imagePosition="right"
      description="There are different forms of at the broadest level, communication is an exchange of meaning between people using symbols."
      imageStyle={{ maxHeight: "387px" }}
      contentType="float"
      contentAlignment="center"
    />
  );
};

export default example;
