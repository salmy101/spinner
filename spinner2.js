const spins = ["\r| ", "\r/", "\r-", "\r\\", "\r/", "\r-", "\r\\", "\r|"]
let wait = 100
for(const moves of spins) {
setTimeout(() => {  
  process.stdout.write(moves)
}, wait) 
  wait += 200
}
