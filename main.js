for (let i = 0; i < 3; i += 1) {
  const el = document.createElement('div');
  const counter = document.createElement('span');
  let counterVal = 0;

  const updateVal = () => {
    counter.innerText = counterVal;
  };

  el.classList.add('main', 'radius');
  
  el.append(counter);

  document.body.append(el);
  
  updateVal();

  const interval = setInterval(() => {
    counterVal += 1;
    updateVal();

    if (counterVal === 10) {
      counter.closest('.main').classList.add('finish');
      clearInterval(interval);
    }
  }, 100 * (i + 1));
}

setTimeout(() => {
  console.log('hola');
}, 5000);