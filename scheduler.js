// scheduler.js
const cron = require('node-cron');
const { exec } = require('child_process');

// Schedule the script to run at 4am
cron.schedule('0 4 * * *', () => {
    exec('node index.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`${stdout}`);
    });
});
