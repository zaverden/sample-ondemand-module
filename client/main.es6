import remoteRequire from './remoteRequire.es6';

const btn = document.getElementById('mainBtn');
btn.onclick = async() => {
  const mx = await remoteRequire('http://localhost:4000/mx.js');
  mx.m2('clicked!!');
};
btn.click();
