import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  IconButtonProps,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { toDate } from "date-fns";
import { DateTimePicker } from "@mui/x-date-pickers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import LocalOffer from "@mui/icons-material/LocalOffer";
import { CollectionsBookmark, Commit, Extension, RssFeed, Error, TextSnippet, FactCheck, Image, More } from "@mui/icons-material";
import { TMeta } from "../../contexts/DropsContext";
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

const defaultValues = {
  name: "Rui Gil",
  age: 10,
  gender: "male",
  type: "text",
  os: "linux",
  favoriteNumber: 0,
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Form = () => {
  const theme = useTheme();

  const [value, setValue] = React.useState<Date | null>(toDate(new Date()));

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name: any) => (e: any, value: any) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues, '💖');
  };
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };   
  const MetaType = ({ type }:{ type: string }) => {
    switch(type){
        case 'text': return <Chip size="small" label="Text"  icon={<TextSnippet />}/>; 
        case 'checklist': return <Chip size="small" label="Check List"  icon={<FactCheck />}/>; 
        case 'image': return <Chip size="small" label="Image"  icon={<Image />}/>; 
        default: return <Chip size="small" label="Unrecognized Type"  icon={<Error />}/>;
    }
  }

  const Meta = ( { type, value } : TMeta) => {
    switch (type) {
        case 'type' : return MetaType({ type: value});
        case 'label' : return <Chip size="small" label={value} color="secondary" icon={<LocalOffer />} />
        case 'extension': return <Chip size="small"  color="warning" label={value} icon={<Extension />}/>; 
        case 'person': return <Chip size="small"  color="info" label={value} avatar={<Avatar  src="/assets/images/avatars/1.jpg" />} />
        case 'public': return <Chip size="small"  color="info" label={value} icon={<RssFeed />} />
        case 'group' : return <Chip size="small" label={value} color="primary" icon={<CollectionsBookmark />} />
        case 'dapp' : return <Chip size="small" label={value} color="error" icon={<Commit />} />
        default: return <Chip size="small" label="Unrecognized Meta"  icon={<Error />}/>;
      }
}
  return (
    <Card>
    <CardContent>
      <Meta {...{ type: 'type', value:'text'}} />
    </CardContent>
    <CardActions disableSpacing>
        <Box sx={{  
            display: 'flex', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            flexGrow: 1 
        }}>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <More />
            </ExpandMore>
        </Box>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
            Meta Form 
        </CardContent>
    </Collapse>
</Card>
);
};
export default Form;
