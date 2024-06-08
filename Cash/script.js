document.getElementById('infoButton').addEventListener('click', function() {
    document.getElementById('infoModal').style.display = 'flex';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('infoModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('infoModal')) {
        document.getElementById('infoModal').style.display = 'none';
    }
}
