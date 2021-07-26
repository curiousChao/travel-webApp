import './message.css';
import productEl from '../header';
import render from './message.art';
import {getData,getDelayedData} from 'api/getData';
import URL from './config';


const viewDate = document.getElementById('viewDate');
let clickNumber = localStorage.getItem('clickNumber');
viewDate.innerHTML = clickNumber;

/* 获取数据 */
getData(URL).then(data => {
    let messageTitle = data[localStorage.getItem('list_id')].title;
    document.getElementById('message-descript-para').innerHTML = render({
        items:messageTitle
    });
});
