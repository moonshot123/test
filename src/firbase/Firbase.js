import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보

  apiKey: "AIzaSyD-TKeOcbUwtc-FfuQHigJ3cnRUGHOU1q0",
  authDomain: "vb-admin-d2654.firebaseapp.com",
  projectId: "vb-admin-d2654",
  storageBucket: "vb-admin-d2654.appspot.com",
  messagingSenderId: "270127983435",
  appId: "1:270127983435:web:93230a497e7539a76916ce",
  measurementId: "G-6HFYCDN2WB",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
