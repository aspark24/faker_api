const { User } = require('./models/user_model');
const { Company } = require('./models/company_model');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/fake-user', (req, res) => {
    res.status(201).json(new User());
});

app.get('/api/fake-company', (req, res) => {
    res.status(201).json(new Company());
});

app.get("/api/users/new", (req,res)=>{
    res.json(userList)
});
app.get("/api/companies/new", (req,res)=>{
    res.json(companyList)
});

const userList = [];
app.post("/api/users", (req,res)=>{
    const newUser = new User()
    userList.push(newUser)
    res.json(newUser)
    console.log(userList);
});

const companyList = [];
app.post("/api/companies",(req,res)=>{
    const newCompany = new Company()
    companyList.push(newCompany)
    res.json(newCompany)
    console.log(companyList);
});

app.listen(8000, () => console.log('Listening on port 8000'));