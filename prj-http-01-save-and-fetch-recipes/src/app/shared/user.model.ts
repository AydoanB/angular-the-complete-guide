export class User {
  name: string;
  password: string;

  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpDate: Date
  ) {
  }

  get token() {
    if (!this._tokenExpDate || new Date(new Date().getTime()) > this._tokenExpDate) {
      return null;
    }
    return this._token;
  }
}
