const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let students = [
    { id: 1, name: 'donwat', u: 'buu', year: 2000, email: 'donwat@gmail.com' },
    { id: 2, name: 'doncool', u: 'buu', year: 1990, email: 'doncool@gmail.com' }
]

app.post('/students', (req, res) => {
    let student = req.body
    students.push(student)
    res.json(student)
})

app.get('/students', (req, res) => {
    res.json(students)
})

app.get('/students/:id', (req, res) => {
    res.json(students[req.params.id - 1])
})

app.get('/greeting', (req, res) => {
    let lang = {
        en: 'Hello',
        th: 'สวัสดี'
    }

    let l = req.query.lang

    if (!l) {
        res.json({ message: 'Hello' })
    } else {
        res.json({ message: lang[l] })
    }
})

module.exports = app