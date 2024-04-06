import express from "express";

const PORT = 8081;

const app = express();

app.listen(PORT, (err: Error | void): void => {
    err ? console.log(err) : console.log(`Listening to port ${PORT}`);
});