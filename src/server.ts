import express from 'express';

const app = express();
app.use(express.json)

app.get('/users',( request, response ) => {
    return response.send('Oi')
    console.log('Acessou a rota');
});

app.listen(3333);