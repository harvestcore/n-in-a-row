import express from 'express';
import { generateUUID } from './utilities';

import { Board } from './api/Board';

const app = express();
const port = 3000;

app.get('/game', (req, res) => {
    const UUID = req.subdomains.at(-1);

    if (UUID) {
        res.send({
            info: {
                lobby: UUID,
                msg: "welcome!"
            },
            game: {
            }
        });

        return;
    }

    res.send({
        lobby: null,
        msg: "wrong lobby id"
    });

    return;
});


app.get('/new', (req, res) => {
    const hostname = req.headers.host;
    const UUID = generateUUID();

    res.send({
        url: `${UUID}.${hostname}/game`
    });
});

app.get('/', (_, res) => {
    const size = 5;
    const board = new Board(size, 3);
    res.send({
        size,
        board: board.board
    });
});

// Subdomain offset.
app.set('subdomain offset', 1);

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});