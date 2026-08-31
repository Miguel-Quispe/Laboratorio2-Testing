const validarPassword = require('./validarPassword');
describe('pruebas de validarPassword', () => {
    test('debe devolver true para una contraseña válida', () => {
        const passwordValida = 'Password123!';
        expect(validarPassword(passwordValida)).toBe(true);
    });
    test('debe devolver false si la contraseña es demasiado corta', () => {
        //la contraseña es Pass1!, tiene menos de 8 caracteres
        const passwordCorta = 'Pass1!';
        expect(validarPassword(passwordCorta)).toBe(false);
    });
    test('debe devolver false si la contraseña no tiene mayúsculas', () => {
        //la contraseña es password123!, no tiene mayúsculas
        const passwordSinMayuscula = 'password123!';
        expect(validarPassword(passwordSinMayuscula)).toBe(false);
    });
    test('debe devolver false si la contraseña no tiene números', () => {
        //la contraseña es Password!, no tiene números
        const passwordSinNumero = 'Password!';
        expect(validarPassword(passwordSinNumero)).toBe(false);
    });
    test('debe devolver false si la contraseña no tiene caracteres especiales', () => {
        //la contaseña es Password123, no tiene caracteres especiales
        const passwordSinCaracterEspecial = 'Password123';
        expect(validarPassword(passwordSinCaracterEspecial)).toBe(false);
    });
    test('debe devolver false si la contraseña es nula o indefinida', () => {
        expect(validarPassword(null)).toBe(false);
        expect(validarPassword(undefined)).toBe(false);
    });
});

//comando para ejecutar la prueba: npx jest mauricio/validarPassword/validarPassword.test.js