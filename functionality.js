function setColor(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#7FFF00"
        count=0;
    }

}

var comm = new Icecomm('MUlSAh1amhJSXKLdBXeUuvFzYMZLPAWM3as4c8JPJwQccMPtK');

comm.connect('custom room', {audio: false});

comm.on('connected', function(peer) {
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