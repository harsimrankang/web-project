function login() {
    user = JSON.parse(localStorage.getItem('user'))
    if(user['name']==document.getElementById('name').value && user['password']==document.getElementById('password').value)
    window.open('./address.html')
    else
    alert('Username and/or password don\'t match')
}