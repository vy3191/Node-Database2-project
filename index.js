const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const server = express();
const carRoutes = require('./routes/cars-routes');
server.use(helmet());
server.use(morgan('tiny'));
server.use(express.json());
server.use("/api/cars", carRoutes);

server.use((req,res,next) => res.status(404).json({msg:'Route Not Found'}));
server.use((err,req,res,next) => res.status(500).json({msg:'Something wrong with server'}));

server.listen(PORT,(req,res) => {
   console.log(`App is up and running at http://localhost:${PORT}`);
})