const { app, connectDB } = require("./app")
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running at: http://localhost:${PORT}`);
    connectDB();
})