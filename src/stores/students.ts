import { ref, computed, ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import { studentsData } from '@/data/students.js'
import { Student } from '@/types/interfaces'

export const useStudentsStore = defineStore('students', () => {
  const students = ref<Student[]>(studentsData)

  const totalPresent: ComputedRef<number> = computed(() => {
    const presentStudents = students.value.filter(
      (student: Student) => student.status === 'present'
    )
    return presentStudents.length
  })

  const totalVirtual: ComputedRef<number> = computed(() => {
    const totalVirtual = students.value.filter(
      (student: Student) => student.status === 'virtual'
    )
    return totalVirtual.length
  })

  const totalAbsent: ComputedRef<number> = computed(() => {
    const totalAbsent = students.value.filter(
      (student: Student) => student.status === 'absent'
    )
    return totalAbsent.length
  })

  const totalLate: ComputedRef<number> = computed(() => {
    const totalLate = students.value.filter(
      (student: Student) => student.status === 'late'
    )
    return totalLate.length
  })
  return { students, totalPresent, totalVirtual, totalAbsent, totalLate }
})
