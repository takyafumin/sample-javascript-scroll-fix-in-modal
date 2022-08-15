/**
 * IndexPageクラス
 *
 * @typedef {Object} IndexPage
 */
export class IndexPage {
	constructor() {
		console.log("Call IndexPage Constructor()");

		// UIコントロール参照
		/** @type {Object} */
		this.btn = {};
		/** @type {HTMLButtonElement} */
		this.btn.modal = document.querySelector(".js-btn-modal");

		// 初期化処理
		this.init();
	}

	/**
	 * 初期化処理
	 */
	init() {}
}
