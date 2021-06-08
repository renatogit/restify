import User from '@model/user';
import faker from 'faker';
import { random, cryptography } from '@utils';

(async function user() {
  for (let i = 0; i < 30; i++) {
    let area = [];
    let professionalPosition = [];
    for (let i = 0; i < random(1, 5); i++) {
      area.push(faker.name.jobArea());
    }

    for (let i = 0; i < random(1, 4); i++) {
      professionalPosition.push(faker.name.jobType());
    }

    const data = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      cpf: faker.datatype.string(),
      password: cryptography(faker.internet.password()),
      address: {
        address: faker.address.streetName(),
        city: faker.address.city(),
        postalCode: faker.address.zipCode(),
        state: faker.address.state(),
        country: faker.address.country(),
      },
      area,
      professionalPosition,
    };

    const users = new User(data);
    await users.save((err) => {
      if (err) {
        return console.error('\x1b[31merror: ', err);
      } else {
        console.log(`Usuário ${data.firstName} cadastrado com sucesso!\n\n`);
      }
    });
  }
})();
