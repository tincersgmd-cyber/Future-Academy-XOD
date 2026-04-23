const border = document.getElementsByClassName('ReviewScreen__border')[0];
let scrollerLine = document.getElementsByClassName('ReviewScreen__border--scroll')[0];



border.addEventListener('mousemove', (ev) =>{
    border.addEventListener('mousedown',(evX) =>{
        evX = ev;
        if(!((evX.pageX < border.style.left)&&(evX.pageX + scrollerLine.style.width > border.style.left + border.style.width))){
            scrollerLine.style.left = evX.pageX + 'px';
        }
        else if(evX.pageX < border.style.left){
            scrollerLine.style.left = border.style.left + 'px';
        }
        else{
            scrollerLine.style.left = border.style.left + border.style.width - scrollerLine.style.width + 'px';
        }
        
    })
})