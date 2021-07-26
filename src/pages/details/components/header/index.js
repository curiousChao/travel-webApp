import './header.css';
import 'icons/iconfont.css';
import render from './header.art';
import {getData,getDelayedData} from 'api/getData';
import URL from './config';


/* 返回上一级页面 */
let backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click',()=>{
    window.history.back();
},false)

/* 红心点赞功能 */
let xinBtn = document.getElementById('xinxin');
xinBtn.addEventListener('click',()=>{
    if(xinBtn.classList.contains('select-hart')){
        xinBtn.classList.remove('select-hart');
    }else{
        xinBtn.classList.add('select-hart')
    }
},false);

/* 获取数据 */
getData(URL).then(data => {
    let img_data = data[localStorage.getItem('list_id')].url;
    document.getElementById('details-img').innerHTML = render({
        items:img_data
    });
});

