import './header.css';
import 'icons/iconfont.css';


/* 返回上一级页面 */
let backBtn = document.getElementById('header-back-btn');
backBtn.addEventListener('click',()=>{
    window.history.back();
},false)