/**
 * Defines a chip.
 */
class Chip {
    /**
     * The type of the chip.
     */
    type: ChipType;

    constructor(type: ChipType) {
        this.type = type;
    }

    /**
     * Get the chip value as a string.
     * 
     * @see ChipType
     * 
     * @returns The chip value.
     */
    value(): string {
        switch(this.type){   
            case ChipType.X: return "X";
            case ChipType.O: return "O";
            case ChipType.E: return "_";
        }
    }
}

/**
 * Defines the chip type.
 */
enum ChipType {
    /**
     * Chip with value 'X'. Player 1.
     */
    X,

    /**
     * Chip with value 'O'. Player 2.
     */
    O,

    /**
     * Chip with no value.
     */
    E
}

export {
    Chip,
    ChipType
}