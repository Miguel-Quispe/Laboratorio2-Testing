```gherkin
Feature: Proceso de checkout y compra de productos

  Scenario: Compra exitosa de un producto en el carrito
    Given el usuario inicia sesión en SauceDemo con credenciales válidas
    And tiene al menos un producto agregado en el carrito
    When navega al carrito de compras
    And inicia el proceso de checkout
    And completa sus datos de envío con nombre, apellido y código postal
    And finaliza la compra
    Then debe visualizar el mensaje de confirmación "Thank you for your order!"
```
