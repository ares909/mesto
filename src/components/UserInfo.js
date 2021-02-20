export default class UserInfo {
  constructor({ name, profession, avatar, _id }) {
    this._name = name;
    this._profession = profession;
    this._avatar = avatar;
    this._id = _id;
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
      avatar: this._avatar,
      _id: this._id,
    };
  }
  getServerInfo({ name, about, avatar, _id }) {
    this._name.textContent = name;
    this._profession.textContent = about;
    this._avatar.src = avatar;
    this._id = _id;
  }
  setUserInfo({ name, profession, avatar }) {
    this._name.textContent = name;
    this._profession.textContent = profession;
    this._avatar = avatar;
  }
}
