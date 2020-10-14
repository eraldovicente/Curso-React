import { retornaArreglo } from '../../base/07-deses-arr';


describe('Prubas de desestructuración', ()  => {

     test('debe de retornar un string y un numero', () => {
          
          const [ letras, numeros ] = retornaArreglo(); // ['ABC', 123];

          expect( letras ).toEqual( 'ABC');
          expect( typeof letras ).toBe( 'string' );

          expect( numeros ).toEqual( 123 );
          expect( typeof numeros ).toBe( 'number' );
     })
     
})