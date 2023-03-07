export class AuthService {
  loggedIn: boolean = false;

  isAuthenticated(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 800)
    })
    return promise;
  }

  onLogin() {
    this.loggedIn = true;
  }

  onLogout() {
    this.loggedIn = false;
  }
}
