import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { Public, TMeta, UMeta } from "../../interfaces";

type PublicMetaFormProps = {
  submit: (form:any)=>void;
  selected: TMeta<Public> | null
}
 
const PublicMetaForm = ({ submit, selected }:PublicMetaFormProps) => {
  const initForm:TMeta<Public> = { type: 'public', name:'', content: {description:'', skin:'oos' }}
  const [form,setForm] = useState<TMeta<Public>>(selected || initForm)

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
  }
  const handleContentChange = (event:ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        content: {
          ...form.content,
          [event.target.name]: event.target.value              
        }
    })
  }

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(form)
    setForm(initForm)
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box sx={{width:'100%',display: 'flex', flexDirection:'column', gap : 1}}>
            <TextField
              
              required
              name="name"
              label="Public Name"
              onChange={handleChange}
              value={form.name}
            />
            <TextField
              required
              name="description"
              label="Public Description"
              onChange={handleContentChange}
              value={form.content.description}
            />
            <TextField
              name="skin"
              select
              label="Skin"
              value={form.content.skin}
              onChange={handleContentChange}
            >
              <MenuItem value={'oos'}>OOS</MenuItem>
              <MenuItem value={'morpho'}>Morpho</MenuItem>
              <MenuItem value={'space'}>Space</MenuItem>
            </TextField>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant="contained" type="submit" startIcon={<Add />}>Create</Button>    
          </Box>
        </Box>
    </form>
  );
};

export default PublicMetaForm;