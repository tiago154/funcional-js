const initMenu = require('../../src/init');
const keySender = require('robotjs');

describe('INIT', () => {
    let mockExit;

    beforeEach(() => {
        mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });
    });

    afterEach(() => {
        mockExit.mockRestore();
    });

    it('Should exit if load menu and input 0', () => {
        keySender.keyTap('0');
        keySender.keyTap('enter');
        initMenu.start();
        expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
    });
});
