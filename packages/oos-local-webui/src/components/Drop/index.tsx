import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ScheduleIcon from "@mui/icons-material/Schedule";
import MoreIcon from "@mui/icons-material/More";

import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";

import { TDrop, TMeta } from "../../interfaces";
import PushPinIcon from "@mui/icons-material/PushPin";

import DropMenu from "./DropMenu";
import { DropContentType } from "./DropContentType";
import { MetaExpand, Meta } from "../Meta";


const Drop = (drop: TDrop) => {
  const { metas } = drop;
  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const isImage = drop.metas.find((i) => i.type == "media")?.value === "DropImage";
  //console.log("drawing drop")
  
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
          <MetaExpand
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <MoreIcon />
          </MetaExpand>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {metas.map((m,i) => (<Meta key={i} {...m} /> ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Drop;

/*



*/