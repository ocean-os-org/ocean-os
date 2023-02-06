import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ScheduleIcon from "@mui/icons-material/Schedule";
import MoreIcon from "@mui/icons-material/More";

import { styled } from "@mui/material/styles";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";

import { TDrop, TMeta } from "../../models/interfaces";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Meta } from "../../content/metas/Meta";

import DropMenu from "./DropMenu";
import { DropContentType } from "./DropContentType";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(-90deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Drop = (drop: TDrop) => {
  const { metas } = drop;
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isImage = drop.metas.find((i) => i.type == "type")?.value === "DropImage";

  return (
    <Card>
      {isImage && (
        <CardMedia
          sx={{
            height: 0,
            paddingTop: "56.25%", // 16:9
          }}
          image={drop.content.src}
          title="Travel Gear"
        />
      )}
      <CardContent>
        <DropContentType {...drop} />
      </CardContent>
      <CardActions disableSpacing>
        <Avatar variant="rounded" src="/assets/images/avatars/4.jpg" />
        <IconButton aria-label="settings">
          <ScheduleIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          22:35
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <DropMenu {...drop} />
          <IconButton>
            <PushPinIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <MoreIcon />
          </ExpandMore>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {metas.map((m,i) => (
            <Meta key={i} {...m} />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Drop;
