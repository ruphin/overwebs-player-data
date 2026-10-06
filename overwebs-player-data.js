import { GluonElement as e } from "../gluonjs/gluon.js";
//#region \0rolldown/runtime.js
var t = { unlocks: {} }, n = [], notify = () => {
	n.forEach((e) => {
		e.dispatchEvent(new Event("player-changed"));
	});
}, OverwebsPlayerData = class extends e {
	set name(e) {
		t.name = e, notify();
	}
	get name() {
		return t.name;
	}
	set level(e) {
		t.level = e, notify();
	}
	get level() {
		return t.level;
	}
	set avatar(e) {
		t.avatar = e, notify();
	}
	get avatar() {
		return t.avatar;
	}
	set unlocks(e) {
		Object.assign(t.unlocks, e), notify();
	}
	get unlocks() {
		return t.unlocks;
	}
	set player(e) {
		let n = e.unlocks;
		delete e.unlocks, Object.assign(t, e), n && (this.unlocks = n), notify();
	}
	get player() {
		return t;
	}
	connectedCallback() {
		super.connectedCallback(), n.push(this);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), n.splice(n.indexOf(this), 1);
	}
};
customElements.define(OverwebsPlayerData.is, OverwebsPlayerData);
//#endregion
