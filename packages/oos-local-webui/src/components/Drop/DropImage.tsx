import Typography from "@mui/material/Typography"
import { DropProps } from '../../contexts/DropsContext';


const DropImage = ({ drop }: DropProps) => {
    return  (
        <Typography variant="body2" color="text.secondary">
            {drop.content.description}
        </Typography>
    )
}

export default DropImage;