// Currying

function greet(x){
    return (y) => {
        return(z) => {
            return x + y + z
        }
    }
}

console.log(greet("hello ") ("how are") (" you"))