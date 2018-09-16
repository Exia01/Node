/* let hello = () => {
    console.log('Hello, 3 seconds have passed')
}
setTimeout(hello, 3000)


/* This continues until we tell it to end. */
//setTimeout(function () {
//     console.log('hello')
// }, 3000) */

 class clock {
    constructor(time, counter) {
        this.time = time
        this.counter = counter
        this.timer = setInterval(() => {
            this.time += 1;
            console.log(this.time + ' seconds have passed')
            if (this.time == this.counter) {
                clearInterval(this.timer)
            }
        }, 1000);


        function Closerure(x) {
            return function (v) {
                if (v == undefined) {
                    return x;
                } else {
                    val = v;
                }
            };
        }

    }
}

clockie = new clock(0, 12)
// clockie.timer
clockie.timer 

/* this can be used to figure out the file path directories */
console.log(__dirname)
console.log(__filename)