'use strict';
const delay = ms => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay(2000).then(logger);
delay(1000).then(logger); 
delay(1500).then(logger); 