const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3004,
    cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/products', require('./routes/products.routes'))

app.listen(PORT, () => {
    console.log(`server en el puerto ${PORT}`)
})