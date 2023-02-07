import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { toDate } from "date-fns";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import LocalOffer from "@mui/icons-material/LocalOffer";
import { CollectionsBookmark, Commit, Extension, RssFeed, Error, TextSnippet, FactCheck, Image, More } from "@mui/icons-material";

import { OOSState, useOOSStore } from "../../services/useOOSStore";
import { TMeta } from '../../interfaces/interfaces';
import { Meta } from '../../components/Meta/Meta';

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

type MetaFormProps = {
  type: string;
}

const MetaForm = ({ type }:MetaFormProps) => {
  const theme = useTheme();
  const getMetasType = useOOSStore( (state:OOSState) => state.getMetasType );


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
  return (
    <Card sx={{ mb: 1}}>
      <CardContent>
        <Typography variant="h4">Metas from type {type}</Typography>
        <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1}}>
          { getMetasType(type).map( (m,i) => <Meta key={i} {...m}/> ) }
        </Box>
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
          </CardContent>
      </Collapse>
    </Card>
  );
};
export default MetaForm;
