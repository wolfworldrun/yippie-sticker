const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const Jimp = require('jimp');

// Telegram bot API token
const token = '';
// Initialize Telegram Bot
const bot = new TelegramBot(token, { polling: true });

// Reset state variables and flags after executing a command
function resetCommandState() {
    // Clear state variables
    stateVariable = 'default';

    // Reset flags
    flagVariable = false;

    // Clear temporary data
    temporaryData = null;
}


// bot.onText(/\/YIPPIE_ME/, async (msg) => {
//     const chatId = msg.chat.id;
    
//     if (msg.photo && msg.photo.length > 0 ) {
//         const photoId = msg.photo[msg.photo.length - 1].file_id; // Get the latest photo ID

//         // Get the file path of the received photo
//         const filePath = await bot.getFileLink(photoId);
//         console.log(filePath);

//         // Load the received image
//         Jimp.read(filePath)
//         .then(async (image) => {
//             // Load the overlay image
//             const overlay = await Jimp.read('yippieSticker.png');

//             // Resize the overlay image to fit the received image
//             overlay.resize(image.bitmap.width, image.bitmap.height);

//             // Composite the overlay image on top of the received image
//             image.composite(overlay, 0, 0);

//             // Save the modified image
//             const outputFilePath = 'path/to/output.jpg';
//             image.write(outputFilePath);

//             // Send the modified image back to the user
//             bot.sendPhoto(chatId, outputFilePath);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     } else {
//         console.error('No photo found in the message with /YIPPIE_ME.');
//     }
// });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    
    console.log('Raw Message Data:', msg); // Log the raw message data
    if (msg.photo && msg.photo.length > 0 && msg.caption === '/SLAPME') {
        const photoId = msg.photo[msg.photo.length - 1].file_id; // Get the latest photo ID
        

        // Get the file path of the received photo
        const filePath = await bot.getFileLink(photoId);

        // Load the received image
        Jimp.read(filePath)
        .then(async (image) => {
            // Load the overlay image
            const overlay = await Jimp.read('yippieSticker.png');

            // Resize the overlay image to fit the received image
            overlay.resize(image.bitmap.width, image.bitmap.height);

            // Composite the overlay image on top of the received image
            image.composite(overlay, 0, 0);

            // Save the modified image
            const outputFilePath = 'path/to/output.jpg';
            image.write(outputFilePath);

            // Send the modified image back to the user
            bot.sendPhoto(chatId, outputFilePath);

            
            // Call the resetCommandState function after executing a command
            resetCommandState();

        })
        .catch(error => {
            console.error('Error:', error.message);
        });

    } 
    else if (msg.photo && msg.photo.length > 0 && msg.caption === '/SLAPMELOFI') {
        const photoId = msg.photo[msg.photo.length - 1].file_id; // Get the latest photo ID

        // Get the file path of the received photo
        const filePath = await bot.getFileLink(photoId);

        // Load the received image
        Jimp.read(filePath)
        .then(async (image) => {
            // Load the overlay image
            const overlay = await Jimp.read('pixelyippie.png');

            // Resize the overlay image to fit the received image
            overlay.resize(image.bitmap.width, image.bitmap.height);

            // Composite the overlay image on top of the received image
            image.composite(overlay, 0, 0);

            // Save the modified image
            const outputFilePath = 'path/to/output.jpg';
            image.write(outputFilePath);

            // Send the modified image back to the user
            bot.sendPhoto(chatId, outputFilePath);

            // Call the resetCommandState function after executing a command
            resetCommandState();
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
    }


});