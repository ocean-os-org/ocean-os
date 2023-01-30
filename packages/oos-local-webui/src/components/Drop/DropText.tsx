import Typography from "@mui/material/Typography"
import { DropProps } from '../../contexts/DropsContext';


const DropText = ({ drop }: DropProps) => {
    return  (
        <Typography variant="body2" color="text.secondary">
            {drop.content}
        </Typography>
    )
}

export default DropText;