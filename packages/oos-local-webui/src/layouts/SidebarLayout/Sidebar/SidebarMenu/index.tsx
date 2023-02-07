import { useContext, useState } from 'react';
import { List } from '@mui/material';
import ListMenuItem from './ListMenuItem';
import ListSubMenuItem from './ListSubMenuItem';
import { MenuItem } from '../../../../interfaces/interfaces';
import { NavigationContext } from '../../../../services/NavigationContext';

function SidebarMenu() {
  const [selected, setSelected] = useState('Main');
  const { items } = useContext(NavigationContext);

  const handleSelect = (s:string) => {
    setSelected(s)
  };

  const buildMenu = ( items: MenuItem[], depth: number = 0) => 
    items.map( item => (
      item.items ? 
        <ListSubMenuItem 
          key={item.name}
          {...{item:item,depth:depth, subMenu: buildMenu } } />
      : 
        <ListMenuItem
          key={item.name}
          {...{item:item,depth:depth, selected:selected, handler: handleSelect} } />
    )
  )

  return (
    <List component="nav" aria-labelledby="menu options" >
      { buildMenu(items) }
    </List>
  );
}

export default SidebarMenu;
