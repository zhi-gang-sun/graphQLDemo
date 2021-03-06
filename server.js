const express = require('express');
const expressGraphql = require('express-graphql').graphqlHTTP;
const app = express();

//const schema = require('./schema');
const schema = require('./schema2');
app.use('/graphql', expressGraphql({
	schema,
	graphiql: true
}));

app.get('/', (req, res) => res.end('index'));

app.listen(8000, (err) => {
  if(err) {throw new Error(err);}
  console.log('*** server started ***');
});