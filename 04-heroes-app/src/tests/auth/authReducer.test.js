const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");

// const state = {
//      name = 'Eraldo',
//      logged: true
// }

describe('Pruebas en authReducer', () => {
     
     test('debe de retornar el estado por defecto', () => {
          
          const state = authReducer({ logged: false }, {});
          expect( state ).toEqual({ logged: false });
     });

     test('debe de autenticar y colocar el name del usuario', () => {

          const action = {
               type: types.login,
               payload: {
                    name: 'Eraldo'
               }
          }

          const state = authReducer({ logged: false }, action);
          expect( state ).toEqual({ 
               logged: true,
               name: 'Eraldo'
          });
     });

     test('debe de borrar el name del usuario y logged en false', () => {
          
          const action = {
               type: types.logout
          }

          const state = authReducer({ logged: true, name: 'Gabriel' }, action);
          expect( state ).toEqual({ logged: false });
     });
     
})
