// 位置情報を取得する間隔（ミリ秒単位）
const interval = 5000; // 5秒ごと

// 位置情報を取得する関数
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// 取得した位置情報を処理する関数
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);

  // ここで取得した位置情報を利用する処理を実行する

  // 指定した間隔で位置情報を再度取得する
  setTimeout(getLocation, interval);
}

// 最初の位置情報の取得を開始する
getLocation();
