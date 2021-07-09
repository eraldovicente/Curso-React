import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
     cloud_name: 'dvb9f965o', 
     api_key: '914851476968871', 
     api_secret: 'AOFRSNKbualpqa7Jd73DZJ28CRY',
     secure: true
});

describe('Pruebas en fileUpload', () => {
     
     test('debe de cargar un archivo y retornar el URL', async() => {
          
          const resp = await fetch('http://s2.glbimg.com/OQiasyx4yQCG4xD6aRlp8JDbWyY=/e.glbimg.com/og/ed/f/original/2015/06/11/teletubbies.jpg');
          const blob = await resp.blob();

          const file = new File([blob], 'foto.jpg');
          const url = await fileUpload( file );

          expect( typeof url ).toBe('string');

          // Borrar imagen por ID
          const segments = url.split('/');
          const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

          cloudinary.v2.api.delete_resources(imageId, {}, () => {
          //    done();
          });

     })

     test('debe de retornar un error', async() => {
                  
          const file = new File([], 'foto.jpg');
          const url = await fileUpload( file );

          expect( url ).toBe( null );

     })
     
})
