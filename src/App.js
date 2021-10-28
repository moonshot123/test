import "./App.css";

// 위에서 내보낸 firestore 가져오기
//import { firestore } from "./firbase/Firbase.js";
function App() {
  return <div className="App">firebase 기본 세팅</div>;
}

export default App;

// FIRESTORE_INSTANCE.collection("COLLECTION_ID")
// 컬렉션 아이디에 맞는 컬렉션 반환
// collection("COLLECTION_ID").get()
// ID에 맞는 컬렉션 내부의 모든 다큐먼트를 가져오며 promise 형태로 반환
// doc("DOCUMENT_ID") 에도 사용 가능
// collection("COLLECTION_ID").where("FIELD", "OPERATOR", VALUE).get()
// where 조건식을 충족하는 다큐먼트만 조회
// doc("DOCUMENT_ID").data()
// 다큐먼트 내부의 데이터를 가져옴
// 각각의 필드는 .FIELD_NAME 으로 접근 가능
// doc("DOCUMENT_ID").id
// Firestore에서 다큐먼트를 생성할 때 부여된 id에 접근 가능
