import e from 'express';
const app = e();

const PORT:number=3000;

app.get('/',(req,res)=>{
    res.send('Hello World from TypeScript with Node.js and Express!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
