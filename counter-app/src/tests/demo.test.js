
describe('Pruebas en el archivo demo.test.js', () => {

     test( 'deben ser iguales los string', () => {
     
          // 1. inicialización
          const mensaje = 'Hola mundo';
     
          // 2. estimulo
          const mensaje2 = `Hola mundo`;
     
          // 3. Obserbar el comportamiento
          expect( mensaje ).toBe( mensaje2 ); // ===
     })

});
