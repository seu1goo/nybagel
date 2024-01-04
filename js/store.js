if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

var container = document.getElementById("map_hongdae"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.555665, 126.9259767), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);

var markerPosition = new kakao.maps.LatLng(37.555665, 126.9259767);

var marker = new kakao.maps.Marker({
  position: markerPosition,
});

marker.setMap(map);

var iwContent = `<div class="iw">
    <p>뉴욕 베이글 애비뉴</p>
    <div class="iw_href">
    <a href="https://map.kakao.com/link/map/뉴욕 베이글 애비뉴,37.555665,126.9259767" target="_blank" class="map_big">큰지도보기</a>
    <a href="https://map.kakao.com/link/to/뉴욕 베이글 애비뉴,37.555665,126.9259767" target="_blank" class="map_search">길찾기</a>
    </div>
    </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition = new kakao.maps.LatLng(37.555665, 126.9259767); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
  position: iwPosition,
  content: iwContent,
});

// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);
// map_hongdae

var swiper = new Swiper(".swiper", {
  // slidesPerView: 3.2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    1920: {
      slidesPerView: 3.2,
    },
    1024: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 1.5,
    },
    0: {
      slidesPerView: 2.2,
    },
  },
});
// store_img
