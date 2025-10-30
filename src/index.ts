import e from 'express';
const app = e();

const PORT:number=3000;

app.get('/',(req,res)=>{
    res.send('Hello World from TypeScript with Node.js and Express!');
})


app.get('/api/data', (req, res) => {
    let data = req.body;
    res.json({ message: 'This is some sample data from the API.', data });
});

app.listen(PORT, () => {
    console.log('Welcome to the TypeScript with Node.js and Express setup!');
    console.log(`Server is running on http://localhost:${PORT}`);
});
