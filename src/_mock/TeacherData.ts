import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const TeacherData = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  address: faker.address.cityName(),
  numberphone: faker.phone.number(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'disactive']),
  level: sample([
    'Level 1',
    'Level 2',
    'Level 3',
  ]),
}));

console.log('TeacherData',TeacherData);

export default TeacherData;
