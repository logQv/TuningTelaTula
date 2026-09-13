document.querySelectorAll('.stat span').forEach(el => {
  const target = +el.dataset.target;
  const step = target / 100;
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('ru-RU');
  }, 20);
});