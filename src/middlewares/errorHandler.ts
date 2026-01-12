import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: 500,
        message: 'Something Wrong',
        error: err.message
    });
};

export default errorHandler;