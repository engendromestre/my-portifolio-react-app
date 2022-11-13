import express from 'express';
import { resolve } from 'path';

const app  = express();

app.set('/',
  resolve(
    __dirname,
    './build'
  )
);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
   return console.log(err) ;
  }
  console.log('OK');
})