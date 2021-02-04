function sleep(time) {
    const start = new Date()
    while (new Date() - start < time * 1000) {
        // do nothing & block the main thread 
    }
}

document.querySelector('button').addEventListener('click', () => {
    console.log("CLICKED !!!")
})
// translated ruby code from synch.rb
console.log("Hello World!")
console.log("brb, gonna go sleep for a sec")
sleep(5)

console.log("What a nice cat nap that was!")
