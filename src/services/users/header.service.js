const user = JSON.parse(localStorage.getItem('user'));

/**
 * This to laravel backend api 
 * if your backend is node use => x-access-token
 */

class Header {
  authHeader() {
    if(user && user.token) {
      const token = 'Bearer ' + user.token
      return token;
    }
    else 
      return null; 
  }
  userId() {  
    return (user && user.id) ? user.id : null;
  }
}

export default new Header();