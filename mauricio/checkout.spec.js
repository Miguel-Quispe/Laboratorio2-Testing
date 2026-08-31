/*
Característica: Proceso de checkout y compra de productos:
  Escenario: Compra exitosa de un producto en el carrito
    -Dado que el usuario inicia sesión en SauceDemo con credenciales válidas
    Y tiene al menos un producto agregado en el carrito.
    -Cuando navega al carrito de compras e inicia el proceso de checkout
    Y completa sus datos de envío con nombre, apellido y código postal
    Y finaliza la compra.
    -Entonces debe visualizar el mensaje de confirmación "Thank you for your order".
*/
// Importamos los módulos 'test' y 'expect' desde la librería oficial de Playwright
import { test, expect } from '@playwright/test';

// Definimos la prueba con una descripción clara de lo que va a verificar
test('Debe completar la compra e ingresar datos de envío correctamente', async ({ page }) => {

  // 1. Iniciar sesión
  // Navega a la URL de la tienda
  await page.goto('https://www.saucedemo.com');

  // Escribe el usuario en el campo con el ID #user-name
  await page.fill('#user-name', 'standard_user');

  // Escribe la contraseña en el campo con el ID #password
  await page.fill('#password', 'secret_sauce');

  // Hace clic en el botón de ingresar mediante el ID #login-button
  await page.click('#login-button');

  // Pausa de 2 segundos para visualizar el inicio de sesión
  await page.waitForTimeout(2000); 

  // 2. Agregar producto al carrito
  // Hace clic en el botón de la mochila usando su atributo data-test
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Pausa de 2 segundos para ver que el botón cambió y se agregó el producto
  await page.waitForTimeout(2000);

  // 3. Ir al carrito de compras
  // Hace clic en el ícono del carrito usando la clase .shopping_cart_link
  await page.click('.shopping_cart_link');

  // Pausa de 2 segundos para visualizar los productos dentro del carrito
  await page.waitForTimeout(2000);

  // 4. Iniciar el proceso de Checkout
  // Hace clic en el botón "Checkout" con el ID #checkout
  await page.click('#checkout');

  // 5. Completar el formulario de envío
  // Escribe el nombre en el campo #first-name
  await page.fill('#first-name', 'Carlos');

  // Escribe el apellido en el campo #last-name
  await page.fill('#last-name', 'Mamani');

  // Escribe el código postal en el campo #postal-code
  await page.fill('#postal-code', '00000');

  // Pausa de 2 segundos para observar el formulario con los datos cargados
  await page.waitForTimeout(2000);

  // 6. Avanzar al resumen de la compra
  // Hace clic en el botón "Continue" con el ID #continue
  await page.click('#continue');

  // Pausa de 2 segundos para revisar la pantalla de resumen (total e ítems)
  await page.waitForTimeout(2000);

  // 7. Finalizar la compra
  // Hace clic en el botón "Finish" con el ID #finish para procesar el pedido
  await page.click('#finish');

  // Pausa de 2 segundos para ver la pantalla final de éxito
  await page.waitForTimeout(2000);

  // 8. Validación final (Aserción)
  // Localiza el elemento del mensaje de confirmación por la clase .complete-header
  const mensajeExito = page.locator('.complete-header');

  // Verifica que el texto que muestra el selector sea exacto a "Thank you for your order"
  await expect(mensajeExito).toHaveText('Thank you for your order!');
});