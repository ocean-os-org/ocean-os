import Typography from "@mui/material/Typography"
import { TDrop } from "../../../interfaces";


const DropText = (drop:TDrop) => {
    return  (
        <Typography variant="body2" color="text.secondary">
            {drop.content}
        </Typography>
    )
}

export default DropText;