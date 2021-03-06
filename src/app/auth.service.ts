import { Injectable } from '@angular/core';
import Auth0Lock from "auth0-lock";
// import { tokenNotExpired } from "angular2-jwt";
import { tokenNotExpired } from "@auth0/angular-jwt";


//AUTH0 Credentials
const AUTH0_CLIENT_ID = 'YF04W972wtVMQqWg5eVw5Bea7fkbCN5G';
const AUTH0_DOMAIN = 'dev-sbza9jii.auth0.com';

//JWT KEY
const ID_TOKEN = 'id_token';

@Injectable()
export class AuthService {
  lock = new Auth0Lock(AUTH0_CLIENT_ID,AUTH0_DOMAIN,{});

  constructor() {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem(ID_TOKEN, authResult.idToken);
    });
   }

   signIn() { this.lock.show(); }
   signOut() { localStorage.removeItem(ID_TOKEN) }
   authenticated() { return tokenNotExpired(); }
}
