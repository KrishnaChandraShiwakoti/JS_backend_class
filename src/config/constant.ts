import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8088;
export const MOCK = process.env.MOCK_DB || "mock";
export const MONGODB_URI = process.env.MONGODB_URI;

//same as
//export{
//PORT,
//MOCK_DB}
