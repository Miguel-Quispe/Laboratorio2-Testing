//validar password
function validarPassword(password) {
    // Lógica de validación de contraseña
    if (!password || password.length < 8) {
        return false; // Contraseña inválida
    }
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return tieneMayuscula && tieneNumero && tieneCaracterEspecial; 
}
module.exports = validarPassword;