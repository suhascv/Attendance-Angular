// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyC4QIAfRSSCX2WLQ9-toio95IbeYTu422I",
    authDomain: "attendence-cv.firebaseapp.com",
    databaseURL: "https://attendence-cv.firebaseio.com",
    projectId: "attendence-cv",
    storageBucket: "attendence-cv.appspot.com",
    messagingSenderId: "613999903230"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
