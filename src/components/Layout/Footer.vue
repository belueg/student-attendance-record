<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__summary">
        <div class="footer__item footer__item--present">
          <span class="footer__label footer__label--present">P</span>
          <span class="footer__count footer__count--present">Presente</span>
        </div>
        <div class="footer__item footer__item--virtual">
          <span class="footer__label footer__label--virtual">V</span>
          <span class="footer__count footer__count--virtual">Presente Virtual</span>
        </div>
        <div class="footer__item footer__item--absent">
          <span class="footer__label footer__label--absent">A</span>
          <span class="footer__count footer__count--absent">Ausente</span>
        </div>
        <div class="footer__item footer__item--late">
          <span class="footer__label footer__label--late">T</span>
          <span class="footer__count footer__count--late">Tarde/Atraso</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@/assets/variables';

.footer {
  background-color: $footer-background;
  border-top: 1px solid $color-border;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    gap: 16px;
  }

  &__summary {
    display: flex;
    gap: 16px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 14px;
    color: $color-background;
  }

  &__label--present {
    background-color: $color-present;
  }

  &__label--virtual {
    background-color: $color-virtual;
  }

  &__label--absent {
    background-color: $color-absent;
  }

  &__label--late {
    background-color: $color-late;
    color: $color-late-text;
  }

  &__count {
    font-size: 14px;
    color: $color-text-footer;
  }

  @media (max-width: 400px) {
    justify-content: center;
    padding: 8px 4px;

    &__content {
      padding: 0 8px;
      gap: 8px;
      flex-direction: column;
    }

    &__summary {
      gap: 8px;
      flex-direction: column;
    }

    &__item {
      gap: 2px; 
      flex: 1 1 50%;
    }

    &__label {
      width: 20px; 
      height: 20px; 
      font-size: 12px; 
    }

    &__count {
      font-size: 10px; 
    }
  }
}

</style>