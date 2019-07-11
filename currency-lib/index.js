class DubloonsCoin {
    constructor(value = 0) {
        this.value = value
    }

    multiply(n) {
        this.value *= n
        return this
    }
    
    add(n) {
        this.value += n
        return this
    }
    
    divide(n) {
        this.value /= n
        return this
    }
    
    subtract(n) {
        this.value -= n
        return this
    }
}

const thing = new Thing(10)
console.log(thing)