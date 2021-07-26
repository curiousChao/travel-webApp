/*样式*/
import 'styles/base.css';
import 'styles/reset.css';
import 'styles/layout.css';
import './loginRegister.css';
import '../login/login.css';


const formEl = document.getElementById('loginRegister-form');
const numberEl = formEl.loginRegister_number;
const passwordEl = formEl.loginRegister_password;
const loginBtnEl = document.getElementById('loginRegister_btn');
var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; 
loginBtnEl.addEventListener('click',()=>{
    if(numberEl.value&&!reg_tel.test(numberEl.value)){
        alert('请输入，正确的手机号');
    }else{
        localStorage.setItem(`${numberEl.value}`,`${passwordEl.value}`);
        location.replace('./index.html');
    }
},false);