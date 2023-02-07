import {
  Typography,
  Box,
  useTheme,
  styled,
  alpha,
  InputBase,
  TextField,
  Autocomplete,
  Divider,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { toDate, format } from 'date-fns'


import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SaveDialog from './SaveDialog';
import OOSAppBar from '../../components/AppBar';
import { useContext } from 'react';
import { SidebarContext } from '../../services/SidebarContext';
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

interface Props {
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      zIndex: trigger ? 1 : 0,
      marginTop: '64px',
      opacity: trigger ? 1 : 0,
    }
  });
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));
const StreamHeader = () => {
  const { sidebarOpen, toggleSidebar, openMobileSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const user = {
    name: 'Rui Gil',
    avatar: '/assets/images/avatars/1.jpg'
  };
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  const [value, setValue] = React.useState<Date | null>(
    toDate(new Date()),
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState('10');

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
    <ElevationScroll>
      <OOSAppBar open={sidebarOpen} >
        <Toolbar sx={{ backgroundColor: theme.header.background, minHeight: '96px', gap:1 }}>
          <Autocomplete
            multiple
            limitTags={4}
            id="multiple-limit-tags"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
            renderInput={(params) => (
              <TextField {...params} label="Metas" placeholder="Metas" />
            )}
            sx={{ flexGrow: 1, margin: theme.spacing(1,0,1,0)}}
          />
            <DateTimePicker
              label="From..."
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />     
        </Toolbar>
      </OOSAppBar>
    </ElevationScroll>    
    <Box
      display="flex"
      sx={{ minHeight: '128px', gap: 1, flexDirection: 'column', paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2) }}
    > 
      <Box sx={{ display:'flex', flexDirection:'row', alignItems: 'center', gap: 1}}>
        <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: 90}}>
          <SaveDialog />
          <Typography variant="body2"  sx={{ marginRight: theme.spacing(1)}}>Home</Typography>
          <Divider orientation="vertical" sx={{height: '20px'}}/>
        </Box>
        <Autocomplete
          multiple
          limitTags={1}
          id="multiple-limit-tags"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
          renderInput={(params) => (
            <TextField {...params} label="Metas" placeholder="Metas" />
          )}
          sx={{ flexGrow : 1}}
        />
      </Box>
      <Box mt={{ display: 'flex', flexDirection:'row',  alignItems: 'center', gap: 10}}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: 90}}>

          <Typography variant="body2" sx={{ marginRight: 2}}>Preview</Typography>
          <Divider orientation="vertical" sx={{height: '20px'}}/>
        </Box>
    
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            size="small"
            onChange={handleChangeSelect}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Day</MenuItem>
            <MenuItem value={20}>Week</MenuItem>
            <MenuItem value={30}>Month</MenuItem>
            <MenuItem value={30}>Year</MenuItem>
          </Select>
          <Box sx={{display:'flex', flexGrow: 1, justifyContent: 'flex-end'}}>
            <DateTimePicker
              label="From..."
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />     
          </Box>   
      </Box>
    </Box>
    </>
  );
}

export default StreamHeader;
/*
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Filter…"
          />
        </Search>
          <Typography variant="subtitle2">
            This is the filter you need 
          </Typography>


*/