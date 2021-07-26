import './header.css';




const CHANGED_CLASS_NAME = 'header-transition';
const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';
class Header{
    constructor(el,critical_point,scrollContainer,eventEl = el){
        this.el = el;
        this.critical_point = critical_point;
        /* 滚动条所在的容器 */
        this.scrollContainer = scrollContainer;
        /* 监听滚动条事件的容器 */
        this.eventEl = eventEl;

        this.setState(INIT_STATE);
        this.bindEvent();
    }
    /* 设置状态 */
    setState(state){
        this.state = state;
    }
    /* 绑定事件 */
    bindEvent(){
        this.eventEl.addEventListener(
            'scroll',
            () => {
            if(this.needChange()){
                this.state = CHANGED_STATE;
                this.change();
            }else if(this.needReset()){
                this.state = INIT_STATE;
                this.reset();
            }
        },false);
    }
    /* 需要变化 */
    needChange(){
        return(
            this.scrollContainer.scrollTop > this.critical_point &&
            this.state == INIT_STATE);
    }
    /* 变化 */
    change(){
        this.el.classList.add(CHANGED_CLASS_NAME);
    }
    /* 需要重置 */
    needReset(){
        return(this.scrollContainer.scrollTop <= this.critical_point && 
            this.state == CHANGED_STATE);
    }
    /* 重置 */
    reset(){
        this.el.classList.remove(CHANGED_CLASS_NAME)
    }
}
export default Header;


