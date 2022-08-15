/**
 * IndexPageクラス
 *
 * @typedef {Object} IndexPage
 */
export class IndexPage {
	constructor() {
		this.SELECTOR = {};
		this.SELECTOR.BTN = {};
		this.SELECTOR.BTN.MODAL = ".js-btn-modal";
		this.SELECTOR.BTN.MENU = ".js-btn-menu";
		this.SELECTOR.FORM = {};
		this.SELECTOR.FORM.MENU = ".js-menu";

		/** @type {int} スクロール量 */
		this.scrollY = 0;

		// --------------------
		// UIコントロール
		// --------------------

		this.body = document.getElementById("form-body");

		/** @type {Object} */
		this.btn = {};

		/** @type {HTMLButtonElement} */
		this.btn.modal = document.querySelector(this.SELECTOR.BTN.MODAL);

		/** @type {HTMLButtonElement} */
		this.btn.menu = document.querySelector(this.SELECTOR.BTN.MENU);

		// --------------------
		// 初期化処理
		// --------------------
		this.init();
	}

	/**
	 * 初期化処理
	 */
	init() {
		// メニューボタン
		this.btn.menu.addEventListener("click", {
			clazz: this,
			handleEvent: function () {
				const isActive = !document
					.querySelector(this.clazz.SELECTOR.FORM.MENU)
					.classList.contains("d-none");

				// メニュー表示を切り替える
				this.clazz.displaySwitchMenu(!isActive);
			},
		});
	}

	/**
	 * メニュー表示を切り替える
	 *  - メニュー表示切替
	 *  - 画面スクロール
	 *
	 * @param {boolean} show 表示するか
	 */
	displaySwitchMenu(show) {
		const formMenu = document.querySelector(this.SELECTOR.FORM.MENU);

		if (show) {
			this.fixScroll();
			formMenu.classList.remove("d-none");
		} else {
			formMenu.classList.add("d-none");
			this.unfixScroll();
		}
	}

	/**
	 * スクロールを固定する
	 */
	fixScroll() {
		// スクロール量保持
		this.scrollY = this.getScroll();

		// 固定
		// スクロール位置をTOPに移動
		this.body.style.position = "fixed";
		this.setScroll(-this.scrollY);
	}

	/**
	 * スクロールを固定を解除する
	 */
	unfixScroll() {
		// 固定解除
		this.body.style.position = "";

		// スクロール位置を復元
		this.setScroll(this.scrollY);

		// 保持したスクロール位置をクリア
		this.scrollY = 0;
	}

	/**
	 * スクロール量を返却する
	 *  - ChromeだとscrollTopが利用できないため, scrollingElementを利用する
	 *
	 * @returns {int} スクロール量
	 */
	getScroll() {
		if ("scrollingElement" in document) {
			return document.scrollingElement.scrollTop;
		}

		return document.body.scrollTop;
	}

	/**
	 * スクロールする
	 *
	 * @param {int} posY スクロール量
	 */
	setScroll(posY) {
		window.scroll({
			top: posY,
			left: 0,
			behavior: "instant",
		});
	}
}
