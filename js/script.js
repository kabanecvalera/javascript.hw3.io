var time = 0;
var running = 0;

function startPause(){
    if(running == 0){
        running = 1;
        increment();
        document.getElementById("startPause").innerHTML = "Pause";
    }else{
        running = 0;
        document.getElementById("startPause").innerHTML = "Continue";
    }
}  

function reset(){
        running = 0;
        time = 0;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("output").innerHTML = "00:00:00:000";
}

function increment(){
        if(running == 1){
    setTimeout(function(){
            time++;
            var tenths = time % 10;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10);
            var msec = Math.floor(time/10/1000);
        
            if(mins<10){
                mins = "0" + mins;
            }
        
            if(secs<10){
                secs = "0" + secs;
            } 
            document.getElementById("output").innerHTML = msec + ":" + mins + ":" + secs + ":" + tenths;
            increment();
    }, 100);
}
}