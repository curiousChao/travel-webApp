import './main.css';
import Tab from '../tab';
import Content from '../content';
import 'components/loading';

const tabEl = document.querySelector('.tab');
const contentEl = document.getElementById('destination-content');
const tab = new Tab(tabEl);
const content = new Content(contentEl);

/* 解决页面刷新后没tab-item-active的问题 */
tab.to(localStorage.getItem('tab-index')).then(
    data => {
        content.setContent(data);
    }
);

tabEl.addEventListener('click',
(ev)=>{
    const index = ev.target.dataset.id-1;
    content.setLoading();
    tab.to(index).then(
        data => {
            content.setContent(data);
        }
    );
},
false);