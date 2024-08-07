<template>
  <div class="student-details">
    <h1 class="student-details__title">Detalles del Estudiante</h1>
    <div class="student-details__content">
      <img
        :src="student?.avatar"
        alt="student avatar"
        class="student-details__avatar"
      />
      <div class="student-details__info">
        <p><strong>ID:</strong> {{ student?.id }}</p>
        <p><strong>Nombre:</strong> {{ student?.name }} {{ student?.surname }}</p>
        <p>
          <strong>Estado:</strong>
          <span :class="'status status--' + student?.status">{{ student?.status }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ComputedRef } from 'vue'
import { useRoute } from 'vue-router'
import { useStudentsStore } from '@/stores/students.js'
import { Student } from '../types/interfaces'

const route = useRoute()
const studentsStore = useStudentsStore()

const studentId = route.params.id

const student: ComputedRef<Student | undefined> = computed(() => {
  const id = Array.isArray(studentId) ? studentId[0] : studentId

  return studentsStore.students.find(
    (student: Student) => student.id == parseInt(id)
  )
})
</script>

<style lang="scss">
@import '@/assets/variables';

.student-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: $color-background;
  min-height: 100vh;

  &__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
  }

  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  &__info {
    text-align: left;
    width: 100%;

    p {
      font-size: 16px;
      margin: 10px 0;

      strong {
        font-weight: 600;
      }
    }
  }
}

.status--present {
  background-color: $color-present;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}

.status--virtual {
  background-color: $color-virtual;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}

.status--absent {
  background-color: $color-absent;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}

.status--late {
  background-color: $color-late;
  color: $color-late-text;
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
