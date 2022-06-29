
function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message) {
            console.error('Invalid data');
            reject('The data cannot be empty');
        }
        const fullMessage = {
            user,
            message,
            date: new Date(),
        };
        resolve(fullMessage);
    });
}

module.exports = { addMessage }
