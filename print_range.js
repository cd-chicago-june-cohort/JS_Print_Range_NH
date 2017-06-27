function printRange(start, end, incr) {
    if(end > 0){
        for(var i = start; i < end; i += incr){
            console.log(i);
        }
    }
    else
    {
        for(var i = start; i > end; i -= incr){
            console.log(i);
        }
    }
}
printRange(2, 10, 2);
