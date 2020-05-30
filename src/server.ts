const AD = require('activedirectory2').promiseWrapper;

var config = {
  url: 'ldap://example.example.com',
  baseDN: 'dc=example,dc=example,dc=com',
  username: 'ldap_admin@example.com',
  password: 'password'
}

var ad = new AD(config);
var username = 'ldap_user@example.com';
var password = 'password';

async function auth() {
  try {
    const isAuth = await ad.authenticate(username, password)
    console.log(isAuth)
  } catch (error) {
    if(error) {
      console.log('username or password incorrect')
    }
  }
}

auth()