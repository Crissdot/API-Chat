const Model = require('./model');

async function getUsers(filterUser) {
    const filter = {}
    if(filterUser !== null) filter.name = filterUser;
    const users = await Model.find(filter);
    return new Promise((resolve, reject) => {
        if(users.length === 0) return reject('User not found');
        return resolve(users);
    });
}

async function addUser(name) {
    const user = new Model(name);
    const newUser = await user.save();
    return newUser;
}

async function updateUser(id, name) {
    const updatedUser = await Model.findById(id);
    updatedUser.name = name;
    await updatedUser.save();
    return updatedUser;
}

async function deleteUser(id) {
    const deletedUser = await Model.findByIdAndDelete(id);
    return new Promise((resolve, reject) => {
        if(deletedUser === null) return reject('User not found');
        return resolve(deletedUser);
    });
}

module.exports = { getUsers, addUser, updateUser, deleteUser };
