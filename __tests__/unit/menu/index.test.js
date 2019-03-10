/* eslint-disable max-len */
const menu = require('../../../src/menu');
const keySender = require('robotjs');

describe('Menu', () => {
    let mockExit;

    beforeEach(() => {
        mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });
    });

    afterEach(() => {
        mockExit.mockRestore();
    });

    describe('Menu Principal', () => {
        it('Should process exit if input is 0', () => {
            keySender.keyTap('0');
            keySender.keyTap('enter');
            menu.mainMenu();
            expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
        });

        it('Should exit the process if the first option is invalid and the second is 0', () => {
            keySender.keyTap('h');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            menu.mainMenu();
            expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
        });
    });

    describe('Filter Menu', () => {
        it('Should enter in filterMenu and process exit', () => {
            keySender.keyTap('1');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            menu.mainMenu();
            expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
        });

        it('Should enter in filterMenu and if the first option is invalid and the second is 0',
            () => {
                keySender.keyTap('1');
                keySender.keyTap('enter');
                keySender.keyTap('h');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the filterMenu and then in the cityMenu and exit the application',
            () => {
                keySender.keyTap('1');
                keySender.keyTap('enter');
                keySender.keyTap('1');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the filterMenu and then in the countryMenu and exit the application',
            () => {
                keySender.keyTap('1');
                keySender.keyTap('enter');
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the filterMenu and then in the colorMenu and exit the application',
            () => {
                keySender.keyTap('1');
                keySender.keyTap('enter');
                keySender.keyTap('3');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );
    });

    describe('Group Menu', () => {
        it('Should enter in groupMenu and process exit', () => {
            keySender.keyTap('2');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            menu.mainMenu();
            expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
        });

        it('Should enter in groupMenu and if the first option is invalid and the second is 0',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('h');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the groupMenu and then in the bandGroupMenu and exit the application',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('1');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the groupMenu and then in the colorGroupMenu and exit the application',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the groupMenu and then in the companyGroupMenu and exit the application',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('3');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the groupMenu and then in the departmentGroupMenu and exit the application',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('4');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );
        
        it('Should enter the groupMenu and then in the genderGroupMenu and exit the application',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('5');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the groupMenu and then in the cityGroupMenu and exit the application',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('6');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the groupMenu and then in the countryGroupMenu and exit the application',
            () => {
                keySender.keyTap('2');
                keySender.keyTap('enter');
                keySender.keyTap('7');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );
    });

    describe('Menu Sum', () => {
        it('Should enter in sumMenu and process exit', () => {
            keySender.keyTap('3');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            keySender.keyTap('0');
            keySender.keyTap('enter');
            menu.mainMenu();
            expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
        });

        it('Should enter in sumMenu and if the first option is invalid and the second is 0',
            () => {
                keySender.keyTap('3');
                keySender.keyTap('enter');
                keySender.keyTap('h');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );

        it('Should enter the sumMenu and then in the petsMenu and exit the application',
            () => {
                keySender.keyTap('3');
                keySender.keyTap('enter');
                keySender.keyTap('1');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                keySender.keyTap('0');
                keySender.keyTap('enter');
                menu.mainMenu();
                expect(mockExit).toHaveBeenCalledWith('\nDesligando...'.gray);
            }
        );
    });
});
