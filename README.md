# _sushi-market 🍣_

# _React App for a sushi storefront_

_Demo: _[Sushi Sunday](https://sushi-sunday.firebaseapp.com)

## Purpose:

This web app demonstrates the utility of state management in React. In the example of a storefront, there is a lot of information to track when compiling an order. When that information is updated, it needs to be updated everywhere.

## Uses:

✅ React.js
✅ Firebase Realtime DB
✅ Firebase Hosting
✅ React Dom
✅ React Router

## Installation:

1. `git clone`
2. `npm install`
3. Create a free, Realtime DB with [Firebase Console](https://console.firebase.google.com/)
4. Create a base.js file in the ./src directory with the following code:

```
	import Rebase from “re-base”;
import firebase from “firebase”;

const firebaseApp = firebase.initializeApp({
  apiKey: “yourapiKey”,
  authDomain: “yourauthDomin”,
  databaseURL: “yourdatabaseURL”
});

const base = Rebase.createClass(firebase.database());

// Named export
export { firebaseApp };

// default export
export default base;


```

Just change the firebaseApp config variable to your DB info

5. Change your DB rules in the firebase console to:

```
	{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}

```
