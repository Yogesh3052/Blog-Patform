// const sql = require('mssql');

// const config = {
//     server: process.env.DB_SERVER,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     options: {
//         encrypt: true,
//         enableArithAbort: true
//     }
// };

// async function connectDB() {
//     try {
//         const pool = await sql.connect(config);
//         if (pool.connected) {
//             console.log('Connected to Azure SQL Database');
//         } else {
//             throw new Error('Failed to connect to database after 15 seconds');
//         }
//     } catch (err) {
//         console.error('Database connection failed:', err);
//         process.exit(1);
//     }
// }

// module.exports = { sql, connectDB }; 