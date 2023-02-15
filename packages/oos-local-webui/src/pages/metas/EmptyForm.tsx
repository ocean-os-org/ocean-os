import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { TMeta, Label } from "../../interfaces";

type PersonalFormProps = {
  submit: (form:any)=>void;
}
 
const PersonalForm = ({ submit }:PersonalFormProps) => {
  const initForm:TMeta<Label> = { type: 'label', name:'' ,content: { value: ''} }
  const [form,setForm] = useState<TMeta<Label>>(initForm)

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        [event.target.id]: event.target.value
    })
  }

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(form)
    setForm(initForm)
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box sx={{width:'100%',display: 'flex', alignItems:'center', flexDirection:'row', gap : 1}}>
        empty
        </Box>
    </form>
  );
};

export default PersonalForm;