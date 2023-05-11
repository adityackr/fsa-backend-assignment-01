const { faker } = require('@faker-js/faker');
const generateRandomNumber = require('./generateRandomNumber');

const generatePerson = (selectedProperties) => {
	const properties = [
		'firstName',
		'lastName',
		'email',
		'avatar',
		'age',
		'address',
	];
	const person = {};

	selectedProperties.forEach((property) => {
		if (properties.includes(property)) {
			switch (property) {
				case 'firstName':
					person.firstName = faker.name.firstName();
					break;
				case 'lastName':
					person.lastName = faker.name.lastName();
					break;
				case 'email':
					person.email = faker.internet.email();
					break;
				case 'avatar':
					person.avatar = faker.image.imageUrl();
					break;
				case 'age':
					person.age = generateRandomNumber(18, 65);
					break;
				case 'address':
					person.address = faker.address.streetAddress();
					break;
			}
		}
	});
	return person;
};

module.exports = generatePerson;
