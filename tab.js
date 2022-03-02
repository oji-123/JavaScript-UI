let tab = () => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab")
  const $nav = document.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;

  //　初期化
  const init = () => {
    $content[0].style.display = "block";
  }
  init();

  // クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault(); // aタグを無効に

    const $this = e.target; // クリックされたDOM要素の取得
    const targetVal = $this.dataset.nav; // HTMLで指定したdata属性の値を取得。今はdata-nav="0"のように指定しているので、navを用いている

    // 対象外のnav,contentを全て一旦リセットする
    let index = 0;
    while (index < navLen){
      $nav[index].classList.remove(ACTIVE_CLASS);
      $content[index].style.display = "none";
      index++;
    }

    //　対象のコンテンツをアクティブ化する。
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS); // classListはその要素が持っているクラスを全て表示する。addメソッドはその取得したclassListにクラス名を追加することができる
    
  }

  // 全てのnav要素に対して関数を適応
  let index = 0;
  while (index < navLen){
    $nav[index].addEventListener('click', (e) => {
      handleClick(e);
    })
    index++;
  }


}

window.addEventListener('load', tab);