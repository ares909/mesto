const onError = (res)=>{
  if(res.ok){
    return res.json();
  }
  return Promise.reject('Сервер не доступен')
}


export default class Api {
  constructor(options) {
    this._options = options;
    this._headers = options.headers;
  }


getInitialCards() {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-20/cards', {
    headers: this._headers,
  })
    .then(onError);
}

changeProfileInfo(item) {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-20/users/me', {
    headers: this._headers,
    method: "PATCH",
    body: JSON.stringify(item),
  })
    .then(onError);
}

addNewCard(item) {
  return fetch('https://mesto.nomoreparties.co/v1/cohort-20/cards', {
    headers: this._headers,
    method: "POST",
    body: JSON.stringify(item),
  })
    .then(onError);
}
}


