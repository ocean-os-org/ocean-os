import { Fragment, useContext, useState } from 'react';
import { menuItems } from './menuItems';
import {
  List,
  useTheme,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Icon,
  Tooltip,
  Avatar
} from '@mui/material';
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../../../contexts/SidebarContext';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function SidebarMenu() {
  const [menu, setOpen] = useState(menuItems);
  const { sidebarOpen, sidebarMobileOpen } = useContext(SidebarContext);
  const theme = useTheme();

  const handleClick = (s:string) => {
    setOpen((m) => {
      const select = (m:any[]):any => 
        m.forEach( i => i.name === s ? (i.items ? i.selected = !i.selected : i.selected = true) : (i.items ? select(i.items) : i.selected = false) )

      select(m);
      return [...m];
    });
  };

  const open = sidebarMobileOpen || sidebarOpen;

  const buildMenu = ( items: any[], depth: number = 0) => 
    items.map( item => (
      item.items ? 
        <Fragment key={item.name}>
          <Tooltip arrow title={item.name} placement="right" enterDelay={1500}>
            <ListItemButton
              key={item.name}
              
              onClick={(event) => handleClick(item.name)}
              sx={{ pl: 2 + depth }}
            >
              <ListItemIcon>
                {item.selected ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              {open && <ListItemText primary={item.name} />}
            </ListItemButton>
          </Tooltip>
          <Collapse in={item.selected} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { buildMenu(item.items, depth + 2 ) }
            </List>
          </Collapse>
        </Fragment>
      : 
      <Tooltip key={item.name} arrow title={item.name} placement="right" enterDelay={1500}>
        <ListItemButton
          key={item.name}
          component={Link}
          onClick={(event) => handleClick(item.name)}
          to={item.url}
          sx={{ pl: open ? 2 + depth : 2}}
        >
          <ListItemIcon sx={{ color: item.selected? theme.palette.secondary.main : theme.palette.common.white }}>
            { item.icon && <Icon>{item.icon}</Icon> }
            { item.avatar && <Avatar src={item.avatar}  sx={{ width: 24, height: 24 }}/> }
          </ListItemIcon>
          {open && <ListItemText primary={item.name} />}
        </ListItemButton>
        </Tooltip>
    ))

  return (
    <List
      component="nav"
      aria-labelledby="menu options"
    >
      { buildMenu(menuItems) }
    </List>
  );
}

export default SidebarMenu;
