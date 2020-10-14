import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../base/data/Heroes';


describe('Pruebas en funcioones de Héroes', () => {

     test('debe de retornar un undefined si Héroe no existe', () => {
         
          const id = 10;
          const heroe = getHeroeById( id );

          const heroeData = heroes.find( h => h.id === id );

          expect( heroe ).toBe( undefined );
     })

     // debe de retornar un arreglo con los héroes de DC
     test('debe de retornar un arreglo con los héroes de DC', () => {
       
          const owner = 'DC';
          const heroes = getHeroesByOwner( owner );

          const heroesData = heroes.filter( h => h.owner === owner );

          expect( heroes ).toEqual( heroesData );
     })


     test('debe de retornar un arreglo con los héroes de Marvel', () => {
        
          const owner = 'Marvel';
          const heroes = getHeroesByOwner( owner );

          expect( heroes.length ).toBe( 2 );
     })
      
     // length = 2 // toBe
     
}); 