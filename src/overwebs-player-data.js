import { GluonElement } from '../gluonjs/gluon.js';

const player = { unlocks: {} };
const elements = [];

const notify = () => {
  elements.forEach(e => {
    e.dispatchEvent(new Event('player-changed'));
  });
};

class OverwebsPlayerData extends GluonElement {
  set name(name) {
    player.name = name;
    notify();
  }
  get name() {
    return player.name;
  }

  set level(level) {
    player.level = level;
    notify();
  }
  get level() {
    return player.level;
  }

  set avatar(avatar) {
    player.avatar = avatar;
    notify();
  }
  get avatar() {
    return player.avatar;
  }

  set unlocks(unlocks) {
    Object.assign(player.unlocks, unlocks);
    notify();
  }
  get unlocks() {
    return player.unlocks;
  }

  set player(newPlayer) {
    const unlocks = newPlayer.unlocks;
    delete newPlayer.unlocks;
    Object.assign(player, newPlayer);
    if (unlocks) {
      this.unlocks = unlocks;
    }
    notify();
  }
  get player() {
    return player;
  }

  connectedCallback() {
    super.connectedCallback();
    elements.push(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    elements.splice(elements.indexOf(this), 1);
  }
}

customElements.define(OverwebsPlayerData.is, OverwebsPlayerData);
