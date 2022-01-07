console.log("OOP_Object:")

/// Stop watch



let stopwatch = {

    isCount: false,
    startTime: null,
    endTime: null,
    get durattion(){
        end = this.endTime;
        start = this.startTime;
        return ((end.getTime() - start.getTime())/ 1000);
    },
    reseat(){
        this.startTime = null;
        this.endTime = null;
        this.isCount = false;
    },
    start(){
        this.startTime = new Date();
        this.isCount = true;
    },
    stop(){

        this.endTime = new Date();
        this.isCount = false;
    }

};
let sw = stopwatch;

// duration
// reset
// start
// stop
