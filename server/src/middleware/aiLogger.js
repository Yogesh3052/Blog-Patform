const aiLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] AI Request: ${req.path}`);
    console.log('Request Body:', req.body);
    
    // Capture original send
    const oldSend = res.send;
    
    res.send = function(data) {
        console.log(`[${new Date().toISOString()}] AI Response:`, 
            typeof data === 'string' ? data.substring(0, 100) + '...' : 'Response sent');
        oldSend.apply(res, arguments);
    }
    
    next();
};

module.exports = aiLogger; 