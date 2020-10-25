import { types } from "../types/types";

/**
 *  Quando logged estiver em true o usuario estará autenticado
 */

// const state = {
//      name = 'Eraldo',
//      logged: true
// }

export const authReducer = ( state = {}, action ) => {

     switch ( action.type ) {
          case types.login:
               return {
                    ...action.payload,
                    logged: true
               }
          case types.logout:
               return {
                    logged: false
               }     
     
          default:
               return state;
     }
}