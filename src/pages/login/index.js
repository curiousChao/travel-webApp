/*样式*/
import 'styles/base.css';
import 'styles/reset.css';
import 'styles/layout.css';
import './login.css';


const formEl = document.getElementById('login-form');
const numberEl = formEl.login_number;
const passwordEl = formEl.login_password;
const loginBtnEl = document.getElementById('login_btn');
const forgetPassword = document.getElementById('forget_password');
var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/; 
loginBtnEl.addEventListener('click',()=>{
    if(numberEl.value&&!reg_tel.test(numberEl.value)){
        alert('请输入，正确的手机号');
    }
    if(passwordEl.value&&passwordEl.value !== localStorage.getItem(`${numberEl.value}`)){
        alert('输入密码错误，或者您还没有注册账户');
    }
    if(passwordEl.value==localStorage.getItem(`${numberEl.value}`)){
        location.replace('./firstpage.html');
    }
},false);

forgetPassword.addEventListener('click',()=>{
    alert('忘记密码功能暂未开放，敬请期待');
},false);