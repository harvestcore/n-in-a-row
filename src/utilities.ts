function generateUUID(): string {
    return Math.random().toString(36).slice(5);
}

export {
    generateUUID
}