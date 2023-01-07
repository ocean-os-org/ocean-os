import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import kms from "node-kms";


dotenv.config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 7000;
 
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const keyObj = new kms.KeyObject();

console.log(keyObj.toJSON())

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});