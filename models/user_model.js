const { faker } = require('@faker-js/faker');

class User {
    constructor() {
    this.password = faker.internet.password();
    this.email = faker.internet.email();
    this.phone_number = faker.phone.number();
    this.last_name = faker.name.lastName();
    this.first_name = faker.name.firstName();
    this._id = faker.database.mongodbObjectId();

    }


}

const users = [new User(), new User(), new User(), new User(), new User(), new User()];

module.exports = { User, users };