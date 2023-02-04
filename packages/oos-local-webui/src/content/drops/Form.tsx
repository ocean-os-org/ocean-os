import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  useTheme,
} from "@mui/material";
import { toDate } from "date-fns";
import { DateTimePicker } from "@mui/x-date-pickers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

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
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        sx={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(1) }}
      >
        <Grid item>
          <FormControl fullWidth>
            {" "}
            <InputLabel id="demo-simple-select-label">Drop Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              name="type"
              value={formValues.type}
              label="Drop Type"
              onChange={handleInputChange}
            >
              <MenuItem key="text" value="text">
                Text
              </MenuItem>
              <MenuItem key="image" value="image">
                Image
              </MenuItem>
              <MenuItem key="checklist" value="checklist">
                Checklist
              </MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            id="text-input"
            name="text"
            label="Text"
            multiline={true}
            type="text"
            fullWidth
            rows={10}
          />
        </Grid>
        <Grid item>
          <DateTimePicker
            label="Drop Date"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            fullWidth
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Tags" placeholder="Tags" />
            )}
          />
        </Grid>
        <Grid item sx={{ display:'flex', justifyContent: 'flex-end'}}>
          <Button>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default Form;
