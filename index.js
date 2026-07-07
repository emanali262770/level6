import express from 'express';

const app = express();
const port = 5000;
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/health",(req,res)=>{
  res.send("Server is healthy");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
