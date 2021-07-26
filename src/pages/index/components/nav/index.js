import './nav.css';
import render from './nav.art';
import {getData,getDelayedData} from 'api/getData';
//https://www.imooc.com/api/mall-webApp/index/nav
import URL from './config';

getData(URL).then
(data => {
    document.getElementById('index-nav').innerHTML = render({
        items:data
    });
});

