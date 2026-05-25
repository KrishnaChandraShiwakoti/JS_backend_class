import app from "./src/app";
import { PORT as SERVER_PORT } from "./src/app";

app.listen(SERVER_PORT, () => {
  console.log(`server is running : ${SERVER_PORT}`);
});
