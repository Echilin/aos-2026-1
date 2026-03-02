console.log('Hello ever running Node.js project..S....lll.');

import express from 'express';
import 'dotenv/config';
console.log(process.env.MESSAGE);


const app = express();

app.get('/', (req, res) => {
  res.send('Clarinho');
});


const PORT = process.env.PORT
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);