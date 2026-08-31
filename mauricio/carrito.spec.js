const { test, expect } = require('@playwright/test');

test.describe('Ejercicio 1 - pruebas del carrito de compras', () => {

    test('Agregar dos productos al carrito, eliminar uno y verificar el contador en 1', async ({ page }) => {
        // 1. Abrimos el navegador en la página de login
        await page.goto('https://www.saucedemo.com/');

        // 2. Iniciar sesión
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

        // 3. Verificamos que la URL cambió a la página de inventario
        await expect(page).toHaveURL(/inventory.html/);

        // 4. Agregamos dos productos al carrito
        await page.click('#add-to-cart-sauce-labs-backpack');
        await page.click('#add-to-cart-sauce-labs-bike-light');

        // 5. Ir al carrito y verificar que el contador muestre "2"
        await page.click('.shopping_cart_link');
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('2');

        // 6. Eliminamos uno de los productos del carrito
        await page.click('#remove-sauce-labs-backpack');

        // 7. Verificamos que el contador haya bajado a "1"
        await expect(cartBadge).toHaveText('1');
    });

});