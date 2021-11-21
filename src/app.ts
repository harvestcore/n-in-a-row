import express from "express";

import { Board } from "./api/Board";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
    const size = 5;
    const board = new Board(size);
    res.send({
        size,
        board: board.getBoard(),
    });
});

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
