import { ChipType } from "./Chip";

class Player {
    /**
     * Name of the player.
     */
    private name: String;

    /**
     * Type of chip assigned to the player.
     */
    private chipType: ChipType;

    /**
     * Default constructor.
     *
     * @param name Name of the player.
     * @param chipType Type of chip assigned to the player.
     */
    constructor(name: String, chipType: ChipType) {
        this.name = name;
        this.chipType = chipType;
    }
}

export { Player };
