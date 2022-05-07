if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://raw.githubusercontent.com/Beecoder01/ytApp/main/vsPWA/sw.js').then(registration =>{
        console.log("register success");
    }).catch(error =>{
        console.log("register failed");
    });
}