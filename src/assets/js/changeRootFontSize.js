(function(doc, win){
  let docEle = doc.documentElement;
  let resizeEvent = 'orientationchange' in win ? 'orientationchange': 'resize';
  let calculateFontSize = () => {
    let clientWidth = docEle.clientWidth;
    if(!clientWidth) return;
    docEle.style.fontSize = 10 * (clientWidth / 320) + 'px';
  };

  if(!addEventListener) return;
  win.addEventListener(resizeEvent, calculateFontSize, false);
  doc.addEventListener(resizeEvent, calculateFontSize, false);
})(document, window);
