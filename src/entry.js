require('../public/index.html')
require('./style.less')

navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

const links = [
  {
    regex : /chrome/i,
    link : 'https://chrome.google.com/webstore/detail/addendum/jplogjalofjlkendelkacpekloflkfeg',
  },
  {
    regex : /firefox/i,
    link : 'https://addons.mozilla.org/en-US/firefox/addon/add-art/',
  },
  {
    regex : /safari/i,
    link : 'https://chrome.google.com/webstore/detail/addendum/jplogjalofjlkendelkacpekloflkfeg',
  }
]
document.getElementById('link').setAttribute('href', links.reduce( (prev, curr) => {
  if (prev) return prev
  if (curr.regex.test(navigator.sayswho)) return curr.link
}, false))
