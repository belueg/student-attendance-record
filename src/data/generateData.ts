import { faker } from '@faker-js/faker'
import { Student } from '@/types/interfaces'

export function generateStudents(count: number): Student[] {
  const students: Student[] = []

  for (let i = 1; i <= count; i++) {
    const student: Student = {
      id: i,
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      status: faker.helpers.arrayElement([
        'present',
        'virtual',
        'absent',
        'late'
      ]),
      avatar: faker.image.avatar()
    }

    students.push(student)
  }

  return students
}
