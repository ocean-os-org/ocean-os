import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Add, Cancel, Delete } from "@mui/icons-material";
import { Label, TMeta } from "../../interfaces";

type PersonalFormProps = {
  submit: (form:any)=>void;
  selected: TMeta<Label> | null
}
 
const LabelMetaForm = ({ submit, selected }:PersonalFormProps) => {
  const initForm:TMeta<Label> = { type: 'label', name:'', content: { }}
  const [form,setForm] = useState<TMeta<Label>>(selected || initForm)
  const [update,setUpdate] = useState<boolean>(selected !== null)
  console.log("meta label form",form)
  
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    console.log("submit")
    event.preventDefault();
    submit(form)
    setForm(initForm)
  }

  const handleCancel = (event:MouseEvent<HTMLButtonElement,globalThis.MouseEvent>) => {
    event.preventDefault()
    setForm(initForm)
    setUpdate(false)
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box sx={{width:'100%',display: 'flex', flexDirection:'column', gap : 1}}>
            <TextField
                sx={{ flexGrow: 1 }}
                required
                id="name"
                name="name"
                label="Label Meta"
                onChange={handleChange}
                value={form.name}
            />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap:1 }}>
            {
              update ?
            <>
              <Button variant="outlined" onClick={handleCancel} startIcon={<Cancel />}>Cancel</Button>
              <Button variant="outlined"  startIcon={<Delete />}>Delete</Button>
              <Button variant="contained"  startIcon={<Add />}>Update</Button>
            </>    
            : 
            <Button variant="contained" type="submit" startIcon={<Add />}>Create</Button>
            }
          </Box>
        </Box>
    </form>
  );
};

export default LabelMetaForm;