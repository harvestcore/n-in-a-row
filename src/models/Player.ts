import { Chip, ChipType } from "./Chip";

class Player {
    private _name: string;
    private _chipType: ChipType
    
    constructor(name: string, chipType: ChipType) {
        this._name = name;
        this._chipType = chipType;
    }

    public get name(): string {
        return this._name;
    }

    public get chipType(): ChipType {
        return this._chipType;
    }
}

export {
    Player
}