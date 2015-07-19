function setColor(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    property.innerHTML = 'Done';
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#7FFF00"
        count=0;
    }

}

var added = false;

var comm = new Icecomm('MUlSAh1amhJSXKLdBXeUuvFzYMZLPAWM3as4c8JPJwQccMPtK');

comm.connect('custom room', {audio: true});

comm.on('connected', function(peer) {
    if (added) return;
    added = true;
    var remoteCandidate = peer.getVideo();
    remoteCandidate.setAttribute('id', 'remoteVideo');
   document.body.querySelector('#video').appendChild(remoteCandidate);
});

comm.on('local', function(peer) {
  // localVideo.src = peer.stream;
});

comm.on('disconnect', function(peer) {
  document.getElementById(peer.ID).remove();
}); 

setTimeout(function () {
    var time = document.querySelector('#time-lasted');
    var started = moment();
    var sec = 0;
    setInterval(function () {
        var now = moment();
        var secs = now.diff(started, 'seconds');
        var hour = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hour*3600)) / 60);
        secs = Math.floor(secs % 60);
        time.innerHTML = hour + ':' + min + ':' + secs;
    }, 1000);
});