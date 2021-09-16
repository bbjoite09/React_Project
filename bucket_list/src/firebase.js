import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    // config 정보
      apiKey: "AIzaSyApy6KYeCEMUF_Z-1FTwuoDzpmER72bWq4",
      authDomain: "react-project-d89ef.firebaseapp.com",
      projectId: "react-project-d89ef",
      storageBucket: "react-project-d89ef.appspot.com",
      messagingSenderId: "1070741750430",
      appId: "1:1070741750430:web:ee600488ba46032f88318f",
      measurementId: "G-X495X4LBZF"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };