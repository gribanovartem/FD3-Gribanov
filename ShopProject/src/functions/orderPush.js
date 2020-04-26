import * as firebase from "firebase";

const orderPush = async (url, order) => {
  const config = {
    apiKey: "AIzaSyD9NIAz1hpx5LdZTLMrhMga1l3rQkqYZHc",
    authDomain: "shop-gribanov.firebaseapp.com",
    databaseURL: "https://shop-gribanov.firebaseio.com",
    projectId: "shop-gribanov",
    storageBucket: "shop-gribanov.appspot.com",
    messagingSenderId: "161416264169",
    appId: "1:161416264169:web:a05312c302f35c59f1f378",
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  const storage = firebase.storage()
  const storageRef = storage.ref()
  const reviewsRef = storageRef.child(url)
  const downloadURL = await reviewsRef.getDownloadURL()
  const response = await fetch(downloadURL)
  let data
  if(response.ok) {
   data = await response.json()
  } else {
    throw new Error(`fetch error ${response.status}`)
  }
  let newOrder = {
    ...order,
    orderNum: data[data.length-1].orderNum+1
  }
  let newOrderNum = data[data.length-1].orderNum+1
  let newOrderList = [...data, newOrder]
  const blob = new Blob([JSON.stringify(newOrderList)], {type : 'application/json'});
  reviewsRef.put(blob)
  console.log(newOrderNum)
  return newOrderNum
}
export {orderPush};
