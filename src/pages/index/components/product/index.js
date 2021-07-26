import './product.css';
import render from './items.art';
import {getData,getDelayedData} from 'api/getData';
import URL from './config';


getData(URL).then(data => {
    document.getElementById('product-list').innerHTML = render({
        items:data
    });
});

/* 存储localstorage */
const procdutEl = document.getElementById('product-list');
procdutEl.addEventListener('click',(e)=>{
    let clickNumber = localStorage.getItem('clickNumber');
    clickNumber++;
    localStorage.setItem('clickNumber',clickNumber);
    let list_id=e.target.getAttribute('data-number');
    list_id--;
    localStorage.setItem('list_id',list_id);
},false);











