const setCookie = (username,value,{maxAge,domain,path,secure}={}) => {
    let cookieText = `${encodeURIComponent(username)}=${encodeURIComponent(value)}`;
    if(typeof maxAge === 'number'){
        cookieText += `;max-age=${maxAge}`;
    }
    if(domain){
        cookieText += `;domain=${domain}`;
    }
    if(secure){
        cookieText += `;secure=${secure}`;
    }
    if(path){
        cookieText += `;path=${domain}`;
    }
}
const getCookie = (name) => {
    name = `${encodeURIComponent(name)}`;
    const cookies = document.cookie.split(';');
    for(const item of cookies){
        const [cookieName,CookieValue] = item.split('=');
        if(cookieName===name){
            return decodeURIComponent(CookieValue);
        }
    }
    return;
};
const removeCookie = (name,{domain,path}={}) => {
    setCookie(name,'',{maxAge:-1,domain,path});
};
export {setCookie,getCookie,removeCookie};