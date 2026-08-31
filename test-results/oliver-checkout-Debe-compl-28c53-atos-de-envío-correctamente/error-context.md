# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: oliver\checkout.spec.js >> Debe completar la compra e ingresar datos de envío correctamente
- Location: oliver\checkout.spec.js:15:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | /*
  2  | Característica: Proceso de checkout y compra de productos:
  3  |   Escenario: Compra exitosa de un producto en el carrito
  4  |     -Dado que el usuario inicia sesión en SauceDemo con credenciales válidas
  5  |     Y tiene al menos un producto agregado en el carrito.
  6  |     -Cuando navega al carrito de compras e inicia el proceso de checkout
  7  |     Y completa sus datos de envío con nombre, apellido y código postal
  8  |     Y finaliza la compra.
  9  |     -Entonces debe visualizar el mensaje de confirmación "Thank you for your order".
  10 | */
  11 | // Importamos los módulos 'test' y 'expect' desde la librería oficial de Playwright
  12 | import { test, expect } from '@playwright/test';
  13 | 
  14 | // Definimos la prueba con una descripción clara de lo que va a verificar
  15 | test('Debe completar la compra e ingresar datos de envío correctamente', async ({ page }) => {
  16 | 
  17 |   // 1. Iniciar sesión
  18 |   // Navega a la URL de la tienda
> 19 |   await page.goto('https://www.saucedemo.com');
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  20 | 
  21 |   // Escribe el usuario en el campo con el ID #user-name
  22 |   await page.fill('#user-name', 'standard_user');
  23 | 
  24 |   // Escribe la contraseña en el campo con el ID #password
  25 |   await page.fill('#password', 'secret_sauce');
  26 | 
  27 |   // Hace clic en el botón de ingresar mediante el ID #login-button
  28 |   await page.click('#login-button');
  29 | 
  30 |   // Pausa de 2 segundos para visualizar el inicio de sesión
  31 |   await page.waitForTimeout(2000); 
  32 | 
  33 |   // 2. Agregar producto al carrito
  34 |   // Hace clic en el botón de la mochila usando su atributo data-test
  35 |   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  36 | 
  37 |   // Pausa de 2 segundos para ver que el botón cambió y se agregó el producto
  38 |   await page.waitForTimeout(2000);
  39 | 
  40 |   // 3. Ir al carrito de compras
  41 |   // Hace clic en el ícono del carrito usando la clase .shopping_cart_link
  42 |   await page.click('.shopping_cart_link');
  43 | 
  44 |   // Pausa de 2 segundos para visualizar los productos dentro del carrito
  45 |   await page.waitForTimeout(2000);
  46 | 
  47 |   // 4. Iniciar el proceso de Checkout
  48 |   // Hace clic en el botón "Checkout" con el ID #checkout
  49 |   await page.click('#checkout');
  50 | 
  51 |   // 5. Completar el formulario de envío
  52 |   // Escribe el nombre en el campo #first-name
  53 |   await page.fill('#first-name', 'Carlos');
  54 | 
  55 |   // Escribe el apellido en el campo #last-name
  56 |   await page.fill('#last-name', 'Mamani');
  57 | 
  58 |   // Escribe el código postal en el campo #postal-code
  59 |   await page.fill('#postal-code', '00000');
  60 | 
  61 |   // Pausa de 2 segundos para observar el formulario con los datos cargados
  62 |   await page.waitForTimeout(2000);
  63 | 
  64 |   // 6. Avanzar al resumen de la compra
  65 |   // Hace clic en el botón "Continue" con el ID #continue
  66 |   await page.click('#continue');
  67 | 
  68 |   // Pausa de 2 segundos para revisar la pantalla de resumen (total e ítems)
  69 |   await page.waitForTimeout(2000);
  70 | 
  71 |   // 7. Finalizar la compra
  72 |   // Hace clic en el botón "Finish" con el ID #finish para procesar el pedido
  73 |   await page.click('#finish');
  74 | 
  75 |   // Pausa de 2 segundos para ver la pantalla final de éxito
  76 |   await page.waitForTimeout(2000);
  77 | 
  78 |   // 8. Validación final (Aserción)
  79 |   // Localiza el elemento del mensaje de confirmación por la clase .complete-header
  80 |   const mensajeExito = page.locator('.complete-header');
  81 | 
  82 |   // Verifica que el texto que muestra el selector sea exacto a "Thank you for your order"
  83 |   await expect(mensajeExito).toHaveText('Thank you for your order!');
  84 | });
```