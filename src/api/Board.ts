import { Chip, ChipType } from '../models/Chip';

/**
 * Defines a board to play 'N in a row'.
 */
class Board {
    /**
     * The _size of the board.
     */
    _size: number;

    /**
     * Array with the chips.
     */
    _positions: Array<Chip>;

    constructor(_size: number) {
        this._size = _size;
        this._positions = new Array(_size * _size);

        // TODO: Remove this line. This is here just for dev purposes.
        this._fillBoard();
    }

    /**
     * Get the board as a string.
     * @returns The board as a string.
     */
    getBoard(): Array<string> {
        return this._positions.map(chip => chip.value());
    }

    /**
     * Add a chip to the board.
     * @param chipType The type of the chip.
     * @param x X position of the chip in the board.
     * @param y Y position of the chip in the board. 
     */
    setChip(chipType: ChipType, x: number, y: number): void {
        this._positions[x * this._size + y] = new Chip(chipType)
    }

    /**
     * Get a chip from the board.
     * 
     * @param x X position of the chip in the board.
     * @param y Y position of the chip in the board.
     * @returns The chip or null.
     */
    getChip(x: number, y: number): Chip {
        return this._positions[x * this._size + y];
    }

    /**
     * Fill board with empty chips.
     * 
     * @see ChipType.E
     */
    _fillBoard(): void {
        for (const i of this._positions.keys()) {
            this._positions[i] = new Chip(ChipType.E);
        }
    }
}

export {
    Board
}