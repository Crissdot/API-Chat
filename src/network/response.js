exports.success = (req, res, message, data = [], status = 200 ) => {
    res.status(status).json({
        success: true,
        message,
        data,
    });
}

exports.error = (req, res, message, details, status = 500 ) => {
    console.error('[response error]', details);
    res.status(status).json({
        success: false,
        message,
    });
}
