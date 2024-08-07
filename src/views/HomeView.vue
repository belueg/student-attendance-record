<template>
  <main class="container">
    <StudentCard :students="students" />
  </main>
</template>

<script lang="ts" setup>
import { useStudentsStore } from '@/stores/students'
import StudentCard from '@/components/StudentCard.vue'
import { Student } from '@/types/interfaces'

const studentsStore = useStudentsStore()
const students: Student[] = studentsStore.students
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
