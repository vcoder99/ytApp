// populating contents:
// let url = "https://www.google.com/webhp?igu=1"
let url = "https://www.freecodecamp.org/learn/"
document.getElementById('root').innerHTML =
`
<iframe src="${url}" width="100%"  frameborder="0" id="rootIframe" style="min-height: 100vh;"></iframe>
<div id="rContainer">
No internet Retry!!
<button id="retry" class="retry">Retry</button>
<div>
`;
//check internet connection:
if (!isConnect) {
    document.getElementById('rootIframe').style.display = "none";
    document.getElementById('rContainer').style.display = "block";
    retry.addEventListener('click', (e) => {
        location.reload();
    });
}