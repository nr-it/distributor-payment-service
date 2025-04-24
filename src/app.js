require("./config/db");

const express = require('express');

const distributorRoutes = require('./routes/distributorRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const errorHandler = require('./utils/errorHandler');
const authMiddleware = require('./utils/authMiddleware');


const app = express();
app.use(express.json());

// Routes
app.use('/api/distributors', authMiddleware, distributorRoutes);
app.use('/api/payments', authMiddleware, paymentRoutes);

// Error Handler
app.use(errorHandler);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
