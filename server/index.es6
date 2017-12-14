import fs from 'fs';

fs.exists('./index.es6')
  .then(async exists => {
    const path = await fs.realpath('./index.es6');
    console.log(path);
  });
