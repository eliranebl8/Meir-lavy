importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDRz4mbNreCeDa6VWRDPbvGND0zWRcB1U4",
  authDomain: "family-stars-app.firebaseapp.com",
  projectId: "family-stars-app",
  messagingSenderId: "207973882811",
  appId: "1:207973882811:web:fb9e7108f65b499815c29e"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  return self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
