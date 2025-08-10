
let requestCount = localStorage.getItem('requestCount');
if (!requestCount) {
  requestCount = 0;
} else {
  requestCount = parseInt(requestCount);
}

requestCount++;
localStorage.setItem('requestCount', requestCount);


console.log(`You have ${requestCount} requests.`);


document.addEventListener('DOMContentLoaded', () => {
  let counterEl = document.getElementById('requestCounter');
  if (!counterEl) {
    counterEl = document.createElement('div');
    counterEl.id = 'requestCounter';
    counterEl.style.position = 'fixed';
    counterEl.style.bottom = '10px';
    counterEl.style.right = '10px';
    counterEl.style.backgroundColor = 'rgba(0,0,0,0.7)';
    counterEl.style.color = 'white';
    counterEl.style.padding = '5px 10px';
    counterEl.style.borderRadius = '5px';
    counterEl.style.fontSize = '0.9rem';
    document.body.appendChild(counterEl);
  }
  counterEl.textContent = `Requests: ${requestCount}`;
});