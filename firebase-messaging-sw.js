importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging-compat.js');

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
  const title = (payload.notification && payload.notification.title) || 'אפליקציית הכוכבים';
  const options = {
    body: (payload.notification && payload.notification.body) || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
