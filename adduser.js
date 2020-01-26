function adduser() {
   /* if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }*/
    user = new Object();
    user.name = document.getElementById('name').value
    user.email = document.getElementById('email').value
    user.phone = document.getElementById('phoneno').value
    user.address = document.getElementById('address').value
    
    localStorage.setItem('user', JSON.stringify(user));
    window.open('./address.html')
}