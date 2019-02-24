const colorsText = require('../../../src/operations/colors-text');
const colors = require('colors');

describe('Operations -> Colors Text', () => {
    describe('Color Graceless', () => {
        it('Should text color is bold and grey', () => {
            const result = colorsText.graceless('graceless');
            const expectResult = colors.bold.grey('graceless');
            expect(result).toEqual(expectResult);
        });
        it('Should return the same text entered', () => {
            const result = colorsText.graceless('graceless');
            expect(result).toContain('graceless');
        });
    });

    describe('Color Information', () => {
        it('Should text color is bold and red', () => {
            const result = colorsText.information('information');
            const expectResult = colors.bold.red('information');
            expect(result).toEqual(expectResult);
        });
        it('Should return the same text entered', () => {
            const result = colorsText.information('information');
            expect(result).toContain('information');
        });
    });

    describe('Color Option', () => {
        it('Should text color is bold and blue', () => {
            const result = colorsText.option('option');
            const expectResult = colors.bold.blue('option');
            expect(result).toEqual(expectResult);
        });
        it('Should return the same text entered', () => {
            const result = colorsText.option('option');
            expect(result).toContain('option');
        });
    });

    describe('Color Prompt', () => {
        it('Should text color is bold and cyan', () => {
            const result = colorsText.prompt('prompt');
            const expectResult = colors.bold.cyan('prompt');
            expect(result).toEqual(expectResult);
        });
        it('Should return the same text entered', () => {
            const result = colorsText.prompt('prompt');
            expect(result).toContain('prompt');
        });
    });

    describe('Color Result', () => {
        it('Should text color is green', () => {
            const result = colorsText.result('result');
            const expectResult = colors.green('result');
            expect(result).toEqual(expectResult);
        });
        it('Should return the same text entered', () => {
            const result = colorsText.result('result');
            expect(result).toContain('result');
        });
    });

    describe('Color Title', () => {
        it('Should text color is green', () => {
            const result = colorsText.title('title');
            const expectResult = colors.green('title');
            expect(result).toEqual(expectResult);
        });
        it('Should return the same text entered', () => {
            const result = colorsText.title('title');
            expect(result).toContain('title');
        });
    });
});
