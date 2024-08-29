import { DynamoDB } from "@aws-sdk/client-dynamodb";
import dotenv from 'dotenv';
dotenv.config()


const region = "ap-south-1";
const client = new DynamoDB({ region ,
    credentials:{
        accessKeyId:process.env.ACCESS_KEY_ID,
        secretAccessKey :process.env.SECRET
    }
});
client.listTables({}, (err, data) => {
  if (err) console.log(err, err.stack);
  else console.log(data);
});