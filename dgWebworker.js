function msg(event){
let amsg = event.data
self.postMessage("[ww received: " + amsg + "] [ww say: hi, I am the Web Worker]" )
self.close()
}

self.addEventListener("message",msg,false)

