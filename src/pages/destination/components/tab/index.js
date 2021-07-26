import './tab.css';
import {getData,getDelayeData} from 'api/getData';
// https://www.imooc.com/api/mall-wepApp/destination/content/1

const URL = 'https://www.imooc.com/api/mall-wepApp/destination/content/';
class Tab {
    constructor(el){
        this.itemEls = el.querySelectorAll('.tab-item');
    }
    /* 设置每个元素选中状态 */
    setActiveItem(index){
        for(const itemEl of this.itemEls){
            itemEl.classList.remove('tab-item-active');
        }
        this.itemEls[index].classList.add('tab-item-active');
    }

    to(index){
        this.setActiveItem(index);
        return getData(`${URL}${this.itemEls[index].dataset.id}`)
    }
}
for(const item of document.getElementsByClassName('tab-item')){
    if(item.innerHTML == localStorage.getItem('name')){
        localStorage.setItem('tab-index',item.getAttribute('data-id')-1);
    }
}
export default Tab;