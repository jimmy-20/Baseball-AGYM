function loginUsuario(){
    let formLogin = document.querySelector('#loginForm');
let usuario =  formLogin.querySelector('.user-name');
let contraseña = formLogin.querySelector('.passwordLogin');

if (usuario.value == 'admin' && contraseña.value == 'password'){
    window.location.href = "admin/home.html";
}else{
    alert("Usuario o Contraseña incorrecta");
}
}


let btnLogin = document.querySelector('#btn-login');
btnLogin.addEventListener('click',loginUsuario);