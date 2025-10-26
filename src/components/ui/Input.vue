<template>
  <div class="input__wrapper">
    <label class="input-label">
      <input type="text" class="input" />
    </label>
  </div>
</template>

<style scoped lang: scss>
  input {
    border: none;
    border-bottom: 1px solid #ccc;

    padding: 12px 20px;

    box-shadow: inset 0 -20px 30px -20px rgba(128, 128, 128, 0.4);

    outline: none;

    transition: 0.3s;

    color:rgb(54, 62, 99);
    caret-color: rgb(54, 62, 99);

    &:hover, &:focus {
        box-shadow: inset 0 -20px 30px -20px rgba(121, 130, 175, 0.6);
    }
  }
</style>
