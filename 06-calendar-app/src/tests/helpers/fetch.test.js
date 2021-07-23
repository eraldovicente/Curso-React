import { fetchConToken, fetchSinToken } from '../../helpers/fetch'

describe('Pruebas en el helper Fetch', () => {
     
     let token = '';

     test('fetchSinToken debe de funcionar', async() => {

          
          const resp = await fetchSinToken('auth', { email: 'Fernando@gmail.com', password: '123456' }, 'POST');

          expect( resp instanceof Response ).toBe( true );

          const body = await resp.json();
          expect( body.ok ).toBe( true );

          token = body.token;

     })   


     test('fetchConToken debe de funcionar', async() => {

          localStorage.setItem('token', token );

          const resp = await fetchConToken('events/60f77e18fc32bb1ce46d2527', {}, 'DELETE');
          const body = await resp.json();

          expect( body.msg ).toBe('Evento no existe por ese id');
     })

})
