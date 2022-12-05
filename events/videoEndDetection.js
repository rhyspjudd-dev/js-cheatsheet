// Video End Detect
document.querySelector('#myVideo').addEventListener('ended',videoEndDetect,false);
function videoEndDetect(e) {
    // What you want to do after the event
}

/* 
The html 

<video id="myVideo">
<source src="path/#" type="video/mp4">
</video>
*/