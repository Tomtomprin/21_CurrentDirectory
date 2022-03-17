const Href = location.href;
console.log(Href);
// ▼▼解説▼▼
// 現在地を「Href」と定義



const Links = document.querySelectorAll('.nav_list > li > a');
// ▼▼解説▼▼
// 全ての.nav_list li aを「Link」と定義


window.addEventListener('DOMContentLoaded', function () {

    for (var i = 0; i < Links.length; i++) {
        console.log(i);
        if (Links[i].href == Href) {
            document.querySelectorAll('.nav_list > li')[i].classList.add('current');

        }

    }
}

// ▼▼解説▼▼
// 「配列.length」で、要素の数を取得できる。
// 今回であれば、リンクはHOME NEWS ACCESSの3つなので「３」
// （他にも文字列.length　や関数.lengthでも使用される）

// forは、同じコードを数回繰り返して実行する、ループ処理記述。
// for (初期値; 条件式; 増減式) {実行内容}
// という使われ方をするのが一般的。
// 今回の例だと、 初期値0、 Linksのlength(今回は3)よりも少ない場合、１をプラスする（++は1をプラスするという意味）
// よって、3回処理が行われるということになる。

// もし、Linksのロケーション（●番目のnav_list li aのロケーション）が、現在地Hrefと一緒であれば、
// ●番目のnav_list liに、「current」というクラスを付与する。
