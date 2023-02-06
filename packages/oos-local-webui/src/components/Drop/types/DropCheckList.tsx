import { List, ListItem, IconButton, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import { useState } from "react";
import CommentIcon from '@mui/icons-material/Comment';
import { TDrop } from "../../../models/interfaces";


const DropCheckList = (drop : TDrop) =>{
    const [checked, setChecked] = useState(drop.content);

    const handleToggle = (i: number) => () => {
      checked[i].checked = !checked[i].checked
      setChecked([...checked]);
    };

    return  (
        <List sx={{ width: '100%' }}>
        {drop.content.map((value:any, i:number) => {
          const labelId = `checkbox-list-label-${i}`;
  
          return (
            <ListItem
              key={labelId}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(i)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={value.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.item} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    )
}

export default DropCheckList;