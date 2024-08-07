<template>
  <div class="navbar">
    <div class="navbar__content">
      <p class="navbar__title">Resumen del día</p>
    <div class="navbar__summary">
      <div class="navbar__item">
        <span class="navbar__label navbar__label--present">P</span>
        <span class="navbar__count navbar__count--present">{{ studentStore.totalPresent }}</span>
      </div>
      <div class="navbar__item">
        <span class="navbar__label navbar__label--virtual">V</span>
        <span class="navbar__count navbar__count--virtual">{{ studentStore.totalVirtual }}</span>
      </div>
      <div class="navbar__item">
        <span class="navbar__label navbar__label--absent">A</span>
        <span class="navbar__count navbar__count--absent">{{ studentStore.totalAbsent }}</span>
      </div>
      <div class="navbar__item">
        <span class="navbar__label navbar__label--late">T</span>
        <span class="navbar__count navbar__count--late">{{ studentStore.totalLate }}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStudentsStore } from '@/stores/students';

const studentStore = useStudentsStore();
</script>

<style lang="scss">
@import '@/assets/variables';

.navbar {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar__title {
  margin-bottom: 8px;
  text-align: left;
  color: #000000ae;
}

.navbar__summary {
  display: flex;
  gap: 20px;
}

.navbar__item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar__label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 14px;
  color: #fff;
}

.navbar__label--present {
  background-color: $color-present;
}

.navbar__label--virtual {
  background-color: $color-virtual;
}

.navbar__label--absent {
  background-color: $color-absent;
}

.navbar__label--late {
  background-color: $color-late;
  color: #000;
}

.navbar__count {
  font-size: 16px;
  font-weight: 500;
}

.navbar__count--present {
  color: $color-present;
}

.navbar__count--virtual {
  color: $color-virtual;
}

.navbar__count--absent {
  color: $color-absent;
}

.navbar__count--late {
  color: $color-late;
}
</style>