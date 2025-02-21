
'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.js-menu-icon');

    // メニュー表示
    function toggleMenu() {
        nav.classList.add('active');
        menuToggle.style.display = "none";
        menuClose.style.display = "block";
        document.body.classList.add('menu-active');
    }

    // メニュー非表示
    function closeMenu() {
        nav.classList.remove('active');
        menuClose.style.display = "none";
        menuToggle.style.display = "block";
        document.body.classList.remove('menu-active');
    }

    // ドロップダウンの切り替え
    function toggleDetails(event) {
        const isOpen = event.target.open;
        event.target.querySelector('.l-drawer_group_name_icon').textContent = isOpen ? "-" : "+";
    }

    // イベントリスナーを追加
    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', closeMenu);

    // ドロップダウンのイベントを追加
    const details = document.querySelectorAll('.js-details');
    details.forEach((detail) => {
        detail.addEventListener('toggle', toggleDetails);
    });

    // メニュー内のリンクを取得し、クリックされたらメニューを閉じる
    const gnavLinks = document.querySelectorAll('nav a');
    gnavLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // #yをクリックしたときにメニューを閉じる処理を追加
    const yButton = document.querySelector('#y_butan');
    if (yButton) {
        yButton.addEventListener('click', closeMenu);
    }
});


const modals = document.querySelectorAll('.myModal'); // すべてのモーダルを取得
const openModalButtons = document.querySelectorAll('.openModal'); // すべての開くボタンを取得

// モーダルを開く
openModalButtons.forEach((button, index) => {
    // click イベント
    button.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのリンク動作をキャンセル
        modals[index].style.display = "block"; // 対応するモーダルを開く
        document.body.style.overflow = "hidden"; // スクロールを無効にする
    });

    // touchstart イベント（iPhone用）
    button.addEventListener('touchstart', function(event) {
        event.preventDefault(); // デフォルトのリンク動作をキャンセル
        modals[index].style.display = "block"; // 対応するモーダルを開く
        document.body.style.overflow = "hidden"; // スクロールを無効にする
    });
});

// モーダル外をクリックして閉じる
window.addEventListener('click', function(event) {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none"; // モーダルを閉じる
            document.body.style.overflow = "auto"; // スクロールを有効にする
        }
    });
});

// iPhone用に touchstart イベントで外をクリックした場合も対応
window.addEventListener('touchstart', function(event) {
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none"; // モーダルを閉じる
            document.body.style.overflow = "auto"; // スクロールを有効にする
        }
    });
});

// ボタンの取得
const backToTopBtn = document.getElementById('backToTopBtn');

// スクロールして一定の位置まで来たらボタンを表示
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

// #topにスクロールするためのスムーズスクロールを実現
document.querySelector('a[href="#top"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // スムーズスクロール
    });
});

