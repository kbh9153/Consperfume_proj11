const cardLikes = document.querySelectorAll(".card-like");

function handleLikeClick() {
   alert("로그인 후 관심상품 등록이 가능합니다.");
}

cardLikes.forEach((Like) => {
   Like.addEventListener("click", handleLikeClick);
});

// cardLikes.forEach(function (Like) {    // 구문 : arrays.forEach(callbackfunction(parameter) {실행 구문});
//    Like.addEventListener("click", handleLikeClick);      // 구문 : addEventListener("Event type", Event Object)
// });
