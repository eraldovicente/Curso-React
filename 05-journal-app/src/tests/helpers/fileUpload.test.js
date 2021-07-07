import { fileUpload } from "../../helpers/fileUpload";


describe('Pruebas en fileUpload', () => {
     
     test('debe de cargar un archivo y retornar el URL', async() => {
          
          const resp = await fetch('http://s2.glbimg.com/OQiasyx4yQCG4xD6aRlp8JDbWyY=/e.glbimg.com/og/ed/f/original/2015/06/11/teletubbies.jpg');
          const blob = await resp.blob();

          const file = new File([blob], 'foto.jpg');
          const url = await fileUpload( file );

          expect( typeof url ).toBe('string');

     })

     test('debe de retornar un error', async() => {
                  
          const file = new File([], 'foto.jpg');
          const url = await fileUpload( file );

          expect( url ).toBe( null );

     })
     
})
