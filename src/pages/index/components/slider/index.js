import render from './slider.art';
import{getData,getDelayedData}from 'api/getData';

import './slider.css';
/* 添加swiper的css文件，文件在npm安装的包node_moudles中
直接写是swiper文件夹就行，webpack会先找配置文件内的别名，再
去mode_moudles中找 */
import 'swiper/swiper-bundle.min.css';
/* 引入Swiper的js文件 */
import Swiper from'swiper/swiper-bundle.min';

/* 导入配置 */
import config,{SWIPER_CONTAINER_CLSSS_NAME,URL} from './config';
/* 配置slider */
getData(URL).then
(data => {
    document.getElementById('index-slider').innerHTML = render({
        ...config,
        ...{imgs:data}
    });
    new Swiper(SWIPER_CONTAINER_CLSSS_NAME,config);
})
