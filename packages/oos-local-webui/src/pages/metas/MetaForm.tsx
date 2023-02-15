import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";

import { OOSState, useOOSStore } from "../../services/useOOSStore";
import { Meta, MetaExpand } from '../../components/Meta';
import { Close, More } from "@mui/icons-material";
import LabelMetaForm from "./LabelMetaForm";
import { TMeta, UMeta } from "../../interfaces";
import EmptyForm from "./EmptyForm";
import PublicMetaForm from "./PublicMetaForm";

type MetaFormProps = {
  type: string;
}
 
const MetaForm = ({ type }:MetaFormProps) => {
  const theme = useTheme();
  const [metas,addMeta,delMeta] = useOOSStore( (state:OOSState) => [state.metas, state.addMeta, state.delMeta] as const );
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addMetaForm = (meta:TMeta<UMeta>) => {
    addMeta(meta)
    setOpen(true)
  }

  console.log("meta form")

  const [selected,setSelected] = useState<TMeta<any> | null>(null);
  const [version,setVersion] = useState(0)

  const getMetasType = (type:string) => metas.filter(m => m.type === type)

  const titles: Record<string,string> = {
    media: "Media Types",
    label: "Personal Labels",
    person: "Contacts",
    extension: "Extensions",
    public: "Public Streams",
    group: "Meta Groups",
    dapp: "DApps"
  }

  const forms: Record<string,JSX.Element> = {
    media: <EmptyForm submit={addMetaForm}/>,
    label: <LabelMetaForm key={version} submit={addMetaForm} selected={selected}/>,
    person: <EmptyForm submit={addMetaForm}/>,
    extension: <EmptyForm submit={addMetaForm}/>,
    public: <PublicMetaForm key={version} submit={addMetaForm} selected={selected}/>,
    group: <EmptyForm submit={addMetaForm}/>,
    dapp: <EmptyForm submit={addMetaForm}/>
  }

  const remove = (value:string) => {
    console.log("remove ",value)
    delMeta(value)
  }

  const selectMeta = (meta:TMeta<any>) => {
    console.log("meta",meta)
    setVersion(version+1)
    setSelected(meta)
  }
  
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Card sx={{ mb: 1}}>
      <CardContent>
        <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1}}>
          { getMetasType(type).map( (m,i) => <Meta key={i} {...m} onClick={(event:any) => selectMeta(m)}/> ) }
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
            {forms[type]}
          </CardContent>
      </Collapse>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical:'bottom', horizontal:'center'}}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          The new Meta was Added!
        </Alert>
        </Snackbar>      
    </Card>
  );
};

export default MetaForm;
