importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAdbkSFmD_QmyBHdSnimjeR-p0xeAQBGQ8",
    authDomain: "aquaculture-iot.firebaseapp.com",
    databaseURL: "https://aquaculture-iot-default-rtdb.firebaseio.com",
    projectId: "aquaculture-iot",
    storageBucket: "aquaculture-iot.appspot.com",
    messagingSenderId: "997656294745",
    appId: "1:997656294745:web:e1800a101ca9fbe1cc4848",
    measurementId: "G-8LVVXY0ZYC"
});
const messaging = firebase.messaging();