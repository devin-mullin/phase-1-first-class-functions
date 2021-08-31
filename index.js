
function receivesAFunction(witcher){
    return witcher()
}

function returnsANamedFunction(){
    return function witcher3() {
        console.log('im playing the witcher')
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('still playing the witcher lmao')
    }
}