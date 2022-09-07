import app from "../controller/appController.js";
const port= process.env.port || 3000


app.listen(port, e=>console.log(`Server rodando na Porta: ${port}`));
console.log();