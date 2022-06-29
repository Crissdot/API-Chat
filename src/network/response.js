exports.success = (req, res, message, status = 200, data = []) => {
    res.status(status).json({
        success: true,
        message,
        data,
    });
}

exports.error = (req, res, message, details, status = 500, ) => {
    console.error('[response error]', details);
    res.status(status).json({
        success: false,
        message,
    });
}
