class Auth {
  constructor() {
    this.authenticated = false
  }
  login(data, callback) {
    localStorage.setItem('userdata', JSON.stringify(data))
    localStorage.setItem('token', data.token)
    this.authenticated = true
    callback()
  }
  logout(callback) {
    localStorage.removeItem('userdata')
    localStorage.removeItem('token')
    this.authenticated = false
    callback()
}
  isAuthenticated(){
    if(localStorage.getItem('token')){
        this.authenticated = true
    }
    return this.authenticated
  }
}

export default new Auth()
