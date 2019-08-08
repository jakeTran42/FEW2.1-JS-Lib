class DubloonsCoin {
    constructor(value = 0) {
        this.value = value
    }

    multiply(dc) {
        this.value *= n
        return this
    }
    
    add(dc) {
        this.value = ((this.value*100)+(dc*100))/100
        return this
    }
    
    divide(dc) {
        this.value /= n
        return this
    }
    
    subtract(dc) {
        this.value -= n
        return this
    }
}

const thing = new Thing(10)
console.log(thing)