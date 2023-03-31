import {
  CardMedia,
  Card as MuiCard,
  Typography,
  CardContent,
  Stack,
  Skeleton,
} from "@mui/material";
import React, { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { openInNewTab } from "src/helpers/openInNewTab";

type ImagePosition = "top" | "left" | "right";
type ContentType = "normal" | "float";
type ContentAlignment = "center" | "left";

export type NewsApiType = {
  title: string;
  link?: string;
  keywords?: [string];
  creator?: [string];
  video_url?: string;
  description?: string;
  content?: string;
  pubDate?: Date;
  image_url: string;
  source_id?: string;
  category: [string];
  country?: [string];
  language?: string;
};

export type NewsProps = {
  image: string;
  category?: string;
  title: string;
  author?: string;
  description?: string;
  imagePosition?: ImagePosition;
  contentType?: ContentType;
  contentAlignment?: ContentAlignment;
  imageStyle?: SxProps<Theme>;
  titleStyle?: SxProps<Theme>;
  useBorder?: boolean;
  descriptionStyle?: SxProps<Theme>;
  link?: string;
  sx?: SxProps<Theme>;
  loading?: boolean;
};

const NewsCard = ({
  image,
  category,
  title,
  author,
  description,
  imagePosition = "top",
  contentType = "normal",
  contentAlignment = "left",
  imageStyle = [],
  titleStyle,
  descriptionStyle = [],
  useBorder = false,
  sx = [],
  link,
  loading,
}: NewsProps) => {
  const floatCardContentStyle = {
    position: "relative",
    top: -50,
    mx: 9.5,
  };

  return (
    <MuiCard
      onClick={() => openInNewTab(link)}
      sx={[
        {
          cursor: "pointer",
          border: useBorder ? "0.5px solid #CACACA" : 0,
          boxShadow: 0,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Stack
        direction={
          ["left", "right"].includes(imagePosition)
            ? imagePosition === "left"
              ? "row"
              : "row-reverse"
            : "column"
        }
      >
        {!loading ? (
          <CardMedia
            component="img"
            sx={[...(Array.isArray(imageStyle) ? imageStyle : [imageStyle])]}
            image={image || `/default-image.png`}
            alt="green iguana"
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width={["left", "right"].includes(imagePosition) ? "50%" : "100%"}
          >
            <CardMedia
              component="img"
              sx={[...(Array.isArray(imageStyle) ? imageStyle : [imageStyle])]}
              image={image || `/default-image.png`}
              alt="green iguana"
            />
          </Skeleton>
        )}
        <CardContent
          sx={{
            textAlign: contentAlignment,
            background: "#fff",
            ...(contentType === "float" ? floatCardContentStyle : {}),
          }}
        >
          <Stack spacing={10}>
            {category && (
              <Typography
                variant="body2"
                sx={{
                  color: "#E7131A",
                  fontWeight: 700,
                  fontSize: 12,
                  textTransform: "uppercase",
                }}
              >
                {!loading ? (
                  category
                ) : (
                  <Skeleton width={"20%"} sx={{ margin: "auto" }} />
                )}
              </Typography>
            )}
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                lineClamp: 4,
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                ...titleStyle,
              }}
            >
              {!loading ? (
                title
              ) : (
                <Skeleton
                  width={
                    ["left", "right"].includes(imagePosition) ? "100px" : "100%"
                  }
                />
              )}
            </Typography>
            {description && (
              <Typography
                sx={[
                  {
                    color: "#808080",
                    fontSize: 18,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    lineClamp: 3,
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  },
                  ...(Array.isArray(descriptionStyle)
                    ? descriptionStyle
                    : [descriptionStyle]),
                ]}
              >
                {!loading ? description : <Skeleton width={"100%"} />}
              </Typography>
            )}
            {author && (
              <Typography
                sx={{
                  color: "#8F8F8F",
                  fontSize: 14,
                  textTransform: "uppercase",
                }}
              >
                {!loading ? author : <Skeleton />}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Stack>
    </MuiCard>
  );
};

export default NewsCard;
