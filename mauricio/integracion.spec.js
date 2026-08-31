const { test, expect } = require('@playwright/test');

test('Prueba de integración: verificar que todos los comentarios pertenecen al post 1', async ({ request }) => {
  // 1. Obtener el post con id 1 (GET /posts/1)
  const respuestaPost = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(respuestaPost.status()).toBe(200);
  
  const post = await respuestaPost.json();
  expect(post.id).toBe(1);

  // 2. Obtener los comentarios del post 1 (GET /posts/1/comments)
  const respuestaComentarios = await request.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  expect(respuestaComentarios.status()).toBe(200);

  const comentarios = await respuestaComentarios.json();
  expect(comentarios.length).toBeGreaterThan(0); // Verificar que al menos traiga comentarios

  // 3. Verificar que TODOS los comentarios devueltos tengan postId === 1 usando .every()
  const todosPertenecenAlPost1 = comentarios.every(comentario => comentario.postId === 1);
  
  expect(todosPertenecenAlPost1).toBe(true);
});

//comando para ejecutar la prueba: npx playwright test mauricio/integracion.spec.js
//npx playwright test integracion.spec.js --headed