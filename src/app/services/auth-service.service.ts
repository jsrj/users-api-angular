import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthServiceService {

  constructor(
    private httpThang: Http
  ) { }


  // an argument for each "req.body" in the API route
  signup(theFullName, theEmail, thePassword) {
      return this.httpThang
        .post(
          environment.apiBase + '/api/signup',

          // Form body information to send to the back end (req.body)
          {
            signupFullName: theFullName,
            signupEmail: theEmail,
            signupPassword: thePassword
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close signup()


  login(theEmail, thePassword) {
      return this.httpThang
        .post(
          environment.apiBase + '/api/login',

          // Form body information to send to the back end (req.body)
          {
            blahEmail: theEmail,
            blahPassword: thePassword
          },

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close login()


  logout() {
      return this.httpThang
        .post(
          environment.apiBase + '/api/logout',

          // Nothing to send to the back end (req.body)
          {},

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close logout()


  checklogin() {
      return this.httpThang
        .get(
          environment.apiBase + '/api/checklogin',

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Convert from observable to promise
        .toPromise()

        // Parse the JSON
        .then(res => res.json());
  } // close checklogin()

}
