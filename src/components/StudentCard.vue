<template>
  <div class="student">
    <div v-for="(student, index) in students" :key="index" class="student__card">
      <div class="student__header">
        <RouterLink :to="`/detalles/${student.id}`"
        @click.native="showAlert(student)">
        <div class="student__data">
          <img :src="`${student.avatar}`" alt="student avatar" class="student__avatar">
          <span class="student__name">{{ student.name }} {{ student.surname }}</span> 
        </div> 
        <div class="student__options">
          <Icon icon="mdi:dots-vertical" width="24" height="24" />
        </div>
      </RouterLink>
      </div>
      <div class="student__status">
        <button @click="student.status = 'present'" :class="{ active: student.status === 'present' }">P</button>
        <button @click="student.status = 'virtual'" :class="{ active: student.status === 'virtual' }">V</button>
        <button @click="student.status = 'absent'" :class="{ active: student.status === 'absent' }">A</button>
        <button @click="student.status = 'late'" :class="{ active: student.status === 'late' }">T</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { Icon } from '@iconify/vue';
import { Student } from '@/types/interfaces';

defineProps<{ students: Student[] }>();

function showAlert(student: Student) {
  alert(`ID: ${student.id}\nNombre: ${student.name} ${student.surname}\nEstado: ${student.status}`);
}
</script>

<style lang="scss">
@import '@/assets/variables';

.student {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  &__card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 210px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  }

  &__header{
    width: 100%;

    a {
      text-decoration: none;
      color: inherit;
    }

  }

  &__data {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

&__avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 12px;
}

&__name {
  font-size: 14px;
}

&__options {
    cursor: pointer;
    font-size: 20px;
    color: #ccc;
    position: absolute;
    top: 16px;
    right: 16px;
  }

&__status {
    display: flex;
    gap: 10px;

    button {
      width: 45px;
      height: 45px;
      border-radius: 10px;
      border: none;
      font-size: 28px;
      color: currentColor;
      background-color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }

    button:nth-child(1) {
      color: $color-present;
    }

    button:nth-child(2) {
      color: $color-virtual;
    }

    button:nth-child(3) {
      color: $color-absent;
    }

    button.active {
      color: white;
    }

    button:nth-child(4) {
      color: $color-late;
      color: black;
    }

    button:nth-child(1):not(.active) {
      color: $color-present;
      border: 1px solid $color-present;

    }

    button:nth-child(2):not(.active) {
      color: $color-virtual;
      border: 1px solid $color-virtual;

    }

    button:nth-child(3):not(.active) {
      color: $color-absent;
      border: 1px solid $color-absent;

    }

    button:nth-child(4):not(.active) {
      color: $color-late;
      border: 1px solid $color-late;

    }

    button:nth-child(1).active {
      background-color: $color-present;
    }

    button:nth-child(2).active {
      background-color: $color-virtual;
    }

    button:nth-child(3).active {
      background-color: $color-absent;
    }

    button:nth-child(4).active {
      background-color: $color-late;
    }

    button:hover {
      opacity: 0.8;
    }
  }
}
</style>
