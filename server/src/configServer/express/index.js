require('../../dbMongo/mongoose');
const express = require('express');
const router = require('../../router');
const handlerError = require('../../handlerError/handler');
const  cors = require('cors')


const PORT = process.env.PORT || 9632;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);


export default app