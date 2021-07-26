import './content.css';
import render from './content.art';
import loadingRender from 'components/loading/loading.art';
class Content {
    constructor(contentEl){
        this.contentEl = contentEl;
    }
    setContent(data){
        this.contentEl.innerHTML = render({
            contents:data
        });
    }
    setLoading(){
        this.contentEl.innerHTML = loadingRender();
    }
}
export default Content;