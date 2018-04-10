import img from './sort.svg';

import './style.css';

var a = () => {
    console.log('this is a tests');
}
var oImg = document.createElement('img');
oImg.src = img;
document.body.appendChild(oImg);
a();
