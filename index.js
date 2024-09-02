import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/cadastro', (req, res)=>{
    res.render('cadastro')
})

app.listen(port);