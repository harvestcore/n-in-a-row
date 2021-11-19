import { Chip, ChipType } from '../models/Chip';

/**
 * Defines a board to play 'N in a row'.
 */
class Board {
    /**
     * The size of the board.
     */
    private size: number;

    /**
     * The amount of chips to connect to win.
     */
    private n: number;

    /**
     * Array with the chips.
     */
    private positions: Array<Chip>;

    /**
     * 
     * @param size The size of the board.
     * @param n 
     */
    constructor(size: number, n: number) {
        this.n = n;
        this.size = size;
        this.positions = new Array(size * size);

        // TODO: Remove this line. This is here just for dev purposes.
        this._fillBoard();
    }

    /**
     * Fill board with empty chips.
     * 
     * @see ChipType.E
     */
    private _fillBoard(): void {
        for (const i of this.positions.keys()) {
            this.positions[i] = new Chip(ChipType.E);
        }
    }

    /**
     * Get the board as a string.
     * @returns The board as a string.
     */
    public get board(): Array<string> {
        return this.positions.map(chip => chip.value());
    }

    /**
     * Add a chip to the board.
     * @param chipType The type of the chip.
     * @param x X position of the chip in the board.
     * @param y Y position of the chip in the board. 
     */
    public setChip(chipType: ChipType, x: number, y: number): void {
        this.positions[x * this.size + y] = new Chip(chipType)
    }

    /**
     * Get a chip from the board.
     * 
     * @param x X position of the chip in the board.
     * @param y Y position of the chip in the board.
     * @returns The chip or null.
     */
    public getChip(x: number, y: number): Chip {
        return this.positions[x * this.size + y];
    }
}

export {
    Board
}