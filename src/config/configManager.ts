import dotenv from "dotenv";

class ConfigManager {
    /**
     * Variable pool.
     */
    private variablePool: Map<string, any>;

    /**
     * Default constructor.
     */
    constructor() {
        this.variablePool = new Map();
        dotenv.config();
    }

    /**
     * Get a configuration variable.
     * @param name The name of the configuration variable.
     * @returns The configuration variable or undefined.
     */
    public get(name: string): any {
        // Try to get the variable from the variable pool.
        const fromPool = this.variablePool.get(name);

        // If existent, return it.
        if (fromPool) {
            return fromPool;
        } else {
            // Get it from the environment.
            const fromEnv = process.env[name];

            // If existent.
            if (fromEnv) {
                // Store it in the variable pool.
                this.set(name, fromEnv);

                // Return it.
                return fromEnv;
            }
        }

        // Non existent, return undefined.
        return undefined;
    }

    /**
     * Set a configuration variable.
     * @param name Name of the configuration variable.
     * @param value Value of the configuration variable.
     */
    public set(name: string, value: any) {
        this.variablePool.set(name, value);
    }
}

export default new ConfigManager();
