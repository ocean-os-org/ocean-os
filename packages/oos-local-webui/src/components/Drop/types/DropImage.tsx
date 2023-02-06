import Typography from "@mui/material/Typography"
import { TDrop } from "../../../models/interfaces";



const DropImage = (drop: TDrop) => {
    return  (
        <Typography variant="body2" color="text.secondary">
            {drop.content.description}
        </Typography>
    )
}

export default DropImage;