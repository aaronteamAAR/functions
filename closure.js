
function counter(){
    let count = 0;

    function increment(){
        return count += 1
    }

    return increment
}

const genId = counter()
const c = console.log


c(genId()) //1
c(genId()) //2
c(genId()) //3
c(genId()) //4
c(genId()) //5