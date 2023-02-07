import { styled } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
  
export const MetaExpand = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }:any) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(-90deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
}));
