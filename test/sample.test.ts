function sum(a: number, b: number): number {
    return a + b;
}

describe("Sample tests", () => {
    it("Should return the correct value", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
