// セレクタ名（.to_top）に一致する要素を取得
const to_top_btn = document.querySelector(".to_top");

// .to_topをクリックしたら
to_top_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    to_top_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    to_top_btn.style.opacity = "0";
  }
}
