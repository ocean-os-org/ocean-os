import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ScheduleIcon from '@mui/icons-material/Schedule';
import ImageIcon from '@mui/icons-material/Image';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FaceIcon from '@mui/icons-material/Face';
import MoreIcon from '@mui/icons-material/More';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ExtensionIcon from '@mui/icons-material/Extension';
import CommitIcon from '@mui/icons-material/Commit';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from "@mui/material/styles";
import { ComponentPropsWithoutRef, ElementType, Fragment, PropsWithChildren, useState } from "react";
import Avatar from "@mui/material/Avatar";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CardMedia from "@mui/material/CardMedia";

import DropText from './DropText';
import DropCheckList from './DropCheckList';
import DropImage from './DropImage';
import {TDrop, DropProps, TMeta } from '../../contexts/DropsContext';
import PushPinIcon from '@mui/icons-material/PushPin';

import DropMenu from "./DropMenu";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
  
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(-90deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));


type AsProps<T extends ElementType> = {
    as?: T;
} 

type PropsToOmit<T extends ElementType, P> = keyof (AsProps<T> & P)
type PolyProps<T extends ElementType, Props = {}> = PropsWithChildren<AsProps<T> & Props> & Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T,Props>> 


const Drop = ({ drop, ...restProps }: DropProps ) => {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };   

    const dropType = (v:TDrop) => v.metas.find( i => i.type == 'type')?.value || ''; 

    const isImage = dropType(drop) === 'image';



    const DropType = () => {
        switch(dropType(drop)){
            case 'text': return <DropText drop={drop}/>;
            case 'image': return <DropImage drop={drop}/>; 
            case 'checklist': return <DropCheckList drop={drop}/>; 
            default: return null;
        }        
    }

    const MetaType = ({ type }:{ type: string }) => {
        switch(type){
            case 'text': return <Chip size="small" label="Text"  icon={<TextSnippetIcon />}/>; 
            case 'checklist': return <Chip size="small" label="Check List"  icon={<FactCheckIcon />}/>; 
            case 'image': return <Chip size="small" label="Image"  icon={<ImageIcon />}/>; 
            default: return <Chip size="small" label="Unrecognized Type"  icon={<ErrorIcon />}/>;
        }
    }

    const Metas = () => {
      return drop.metas.map( (m,i) => {
        const meta = (m:TMeta) => {
            switch (m.type) {
                case 'type': return <MetaType type={m.value}/>; 
                case 'label' : return <Chip size="small" label={m.value} color="secondary" icon={<LocalOfferIcon />} />
                case 'extension': return <Chip size="small"  color="warning" label={m.value} icon={<ExtensionIcon />}/>; 
                case 'person': return <Chip size="small"  color="info" label={m.value} avatar={<Avatar  src="/assets/images/avatars/1.jpg" />} />
                case 'public': return <Chip size="small"  color="info" label={m.value} icon={<RssFeedIcon />} />
                case 'group' : return <Chip size="small" label={m.value} color="primary" icon={<CollectionsBookmarkIcon />} />
                case 'dapp' : return <Chip size="small" label={m.value} color="error" icon={<CommitIcon />} />
                default: return <Chip size="small" label="Unrecognized Meta"  icon={<ErrorIcon />}/>;
              }
        }
        return <Fragment key={i}>{meta(m)}</Fragment>
      })
    }

    return (
        <Card>
            {   isImage &&  
                <CardMedia
                    sx={{
                    height: 0,
                    paddingTop: '56.25%' // 16:9
                    }}
                    image={drop.content.src}
                    title="Travel Gear"
                />
            }
            <CardContent>
                <DropType {...restProps} />
            </CardContent>
            <CardActions disableSpacing>
                <Avatar variant="rounded" src="/assets/images/avatars/4.jpg"/>
                <IconButton aria-label="settings">
                    <ScheduleIcon />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                    22:35
                </Typography>
                <Box sx={{  
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    alignItems: 'center', 
                    flexGrow: 1 
                }}>
                    <DropMenu drop={drop} />                                    
                    <IconButton>
                        <PushPinIcon/>
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
                <CardContent sx={{display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
                    { Metas() }
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Drop;

/*


      <Card sx={{marginBottom: 1}}>
                <CardActions disableSpacing>
                <Chip label="Image"  icon={<ImageIcon />}/>
                    <IconButton aria-label="settings">
                        <AutorenewIcon />
                    </IconButton>
                  <IconButton aria-label="settings">
                        <ScheduleIcon />
                    </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    2016 September 14, 22:35
                    </Typography>
                    <Box sx={{  display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1 }}>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
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
                    <CardContent sx={{display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
                        <Chip label="Image"  icon={<ImageIcon />}/>
                        <Chip color="warning" label="Recurrent"  icon={<ExtensionIcon />}/>
                        <Chip color="warning" label="Stats"  icon={<ExtensionIcon />}/>

                        <Chip color="info" label="Christine Pike" avatar={<Avatar  src="/assets/images/avatars/1.jpg" />} />

                        <Chip label="OceanOS Blog" color="success" icon={<RssFeedIcon />} />
                        <Chip label="Label Tag" color="secondary" icon={<LocalOfferIcon />} />
                        <Chip label="Label Tag" color="secondary" icon={<LocalOfferIcon />} />
                        <Chip label="Label Tag" color="secondary" icon={<LocalOfferIcon />} />
                        <Chip label="Label Tag" color="secondary" icon={<LocalOfferIcon />} />

                        <Chip label="Label Tag" color="secondary" icon={<LocalOfferIcon />} />
                        <Chip label="Assembly" color="primary" icon={<CollectionsBookmarkIcon />} />

                        <Chip label="Request/Response" color="error" icon={<CommitIcon />} />
                    </CardContent>
                  </Collapse>
                  <CardMedia
                    sx={{
                      height: 0,
                      paddingTop: '56.25%' // 16:9
                    }}
                    image="/assets/images/placeholders/covers/1.jpg"
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      A description of the image...
                    </Typography>
                  </CardContent>
                </Card>


*/