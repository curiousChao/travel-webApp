import Header from'components/header';
import 'components/header';
import 'components/searchbox';


const scrollContainer = document.getElementById('index-page');
const headerEl = scrollContainer.querySelector('.header');
/* 实例化Header的参数分别为，改变效果的节点、滚动条滚动临界点、滚动条容器节点、绑定事件的节点 */
new Header(headerEl,0,scrollContainer,scrollContainer);