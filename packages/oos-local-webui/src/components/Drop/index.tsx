import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode, useState } from "react";
import Avatar from "@mui/material/Avatar";

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

type DropProps = PropsWithChildren<{
    value: TDrop;
}>

type TDrop = {
    content: string;
    metas: Meta[];
}

type Meta = {
    key:string;
    value:string;
}

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import CommentIcon from '@mui/icons-material/Comment';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export function CheckboxList() {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

const Drop = ({ value, children, ...restProps }: DropProps ) => {
    const [expanded, setExpanded] = useState(false);

    const dropType = (v:TDrop) => v.metas.find( i => i.key == 'type')?.value; 

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const DropType = () => {
        switch(dropType(value)){
            case 'text': return TextType; 
            case 'checklist': return CheckListType; 
            default: return null;
        }        
    }
    const MetaType = () => {
        switch(dropType(value)){
            case 'text': return <Chip label="Text"  icon={<TextSnippetIcon />}/>; 
            case 'checklist': return <Chip label="Check List"  icon={<FactCheckIcon />}/>; 
            default: return <Chip label="Unrecognized Type"  icon={<ErrorIcon />}/>;
        }        
    }


    const CheckListType = (
        <CheckboxList/>
    )
    
    const TextType = (
        <Typography variant="body2" color="text.secondary">
            A description of the text i sent.
        </Typography>
    )


    return (
        <Card sx={{marginBottom: 1}}>
        <CardActions disableSpacing>
          <MetaType/>
          <IconButton aria-label="settings">
                <ScheduleIcon />
            </IconButton>
          <Typography variant="body2" color="text.secondary">
            22:35
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
          <CardContent>
              <DropType {...restProps} />
          </CardContent>
        </Card>
    );
}

export default Drop;

/*




                <Card sx={{marginBottom: 1}}>
                <CardActions disableSpacing >
                <Chip label="Checklist"  icon={<FactCheckIcon />}/>
                  <IconButton aria-label="settings">
                        <ScheduleIcon />
                    </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    22:35
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
                  <CardContent>
                    <CheckboxList/>
                  </CardContent>
                </Card>

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