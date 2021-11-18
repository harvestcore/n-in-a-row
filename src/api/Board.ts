import { Chip, ChipType } from '../models/Chip';

/**
 * Defines a board to play 'N in a row'.
 */
class Board {
    /**
     * The size of the board.
     */
    size: number;

    /**
     * Array with the chips.
     */
    positions: Array<Chip>;

    constructor(size: number) {
        this.size = size;
        this.positions = new Array(size * size);

        // TODO: Remove this line. This is here just for dev purposes.
        this._fillBoard();
    }

    /**
     * Get the board as a string.
     * @returns The board as a string.
     */
    getBoard(): string {
        let board = "";
        for (let i = 0; i < this.size; ++i) {
            for (let j = 0; j < this.size; ++j) {
                const chip = this.getChip(i, j);
                board += chip.value();
            }
            board += '-';
        }

        return board;
    }

    /**
     * Add a chip to the board.
     * @param chipType The type of the chip.
     * @param x X position of the chip in the board.
     * @param y Y position of the chip in the board. 
     */
    setChip(chipType: ChipType, x: number, y: number): void {
        this.positions[x * this.size + y] = new Chip(chipType)
    }

    /**
     * Get a chip from the board.
     * 
     * @param x X position of the chip in the board.
     * @param y Y position of the chip in the board.
     * @returns The chip or null.
     */
    getChip(x: number, y: number): Chip {
        return this.positions[x * this.size + y];
    }

    /**
     * Fill board with empty chips.
     * 
     * @see ChipType.E
     */
    _fillBoard(): void {
        for (const i of this.positions.keys()) {
            this.positions[i] = new Chip(ChipType.E);
        }
    }
}

export {
    Board
}