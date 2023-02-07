import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
  useTheme,
} from "@mui/material";

import { OOSState, useOOSStore } from "../../services/useOOSStore";
import { Meta, MetaExpand } from '../../components/Meta';
import { More } from "@mui/icons-material";

type MetaFormProps = {
  type: string;
}
 
const MetaForm = ({ type }:MetaFormProps) => {
  const getMetasType = useOOSStore( (state:OOSState) => state.getMetasType );
  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const titles: Record<string,string> = {
    media: "Media Types",
    label: "Personal Labels",
    person: "Contacts",
    extension: "Extensions",
    public: "Public Streams",
    group: "Meta Groups",
    dapp: "DApps"
  }

  const remove = () => {
    console.log("remove")
  }

  return (
    <Card sx={{ mb: 1}}>
      <CardContent>
        <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1}}>
          { getMetasType(type).map( (m,i) => <Meta key={i} {...m} onDelete={remove}/> ) }
        </Box>
      </CardContent>
      <CardActions disableSpacing >
      <Typography variant="h4">{titles[type]}</Typography>
          <Box sx={{  
              display: 'flex', 
              justifyContent: 'flex-end', 
              alignItems: 'center', 
              flexGrow: 1 
          }}>
          { type !== 'media' &&
            <MetaExpand
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <More />
            </MetaExpand>
          }
          </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{display: 'flex', gap: '5px', flexWrap: 'wrap', backgroundColor: theme.header.background}}>
            hello
          </CardContent>
      </Collapse>
    </Card>
  );
};

export default MetaForm;
