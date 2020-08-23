import app from "./config/app";
import { Environment } from './environment';

const env = new Environment();
const PORT = env.getPort();

app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
})
