const express = require('express');

const app = express();
const port = 3001;

app.use(express.static(`${__dirname}/../dist`));

// app.get('/', (req,res) => {
//   res.send('hello');
// })

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${port}!`);
});
