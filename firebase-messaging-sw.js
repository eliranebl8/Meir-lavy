importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDRz4mbNreCeDa6VWRDPbvGND0zWRcB1U4",
  authDomain: "family-stars-app.firebaseapp.com",
  projectId: "family-stars-app",
  storageBucket: "family-stars-app.firebasestorage.app",
  messagingSenderId: "207973882811",
  appId: "1:207973882811:web:fb9e7108f65b499815c29e",
  measurementId: "G-EZ436NHFLM"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || "התראה";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
