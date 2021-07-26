import 'icons/iconfont.css';
import './searchbox.css';

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
searchBtn.addEventListener('click',()=>{
    localStorage.setItem('name',`${searchInput.value}`);
    if(searchInput.value == '亚洲'||'欧洲'||'非洲'||'北美'||'大洋洲'||'南美'||'南极洲'){
        location.replace('./destination.html');
    }
},false)