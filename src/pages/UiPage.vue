<script setup>
  import Input from "../components/ui/Input.vue";
  import Textarea from "@/components/ui/Textarea.vue";
  import LogoSvg from "@/components/ui/svg/LogoSvg.vue";
  import SearchButton from "@/components/widgets/SearchButton.vue";
  import Content from "@/components/widgets/Content.vue";
  import SelectSort from "@/components/ui/SelectSort.vue";
  import PostCard from "@/components/widgets/PostCard.vue";
  import ShashlImage from "@/assets/images/shashl.jpg";
  import Skeleton from "@/components/widgets/Skeleton.vue";
  import Button from "@/components/ui/Button.vue";

  function textButtonClick(button, e) {
    console.log("textButtonClick button", button);
    console.log("textButtonClick event", e);
  }

  function simpleButtonClick(button, e) {
    console.log("simpleButtonClick button", button);
    console.log("simpleButtonClick event", e);
  }
</script>

<template>
  <Content>
    <div class="ui">
      <h1>UI</h1>

      <div class="ui__item">
        <h2>LogoSvg</h2>
        <div style="width: 100px">
          <LogoSvg />
        </div>
      </div>

      <div class="ui__item">
        <h2>Input</h2>
        <Input />
      </div>

      <div class="ui__item">
        <h2>Textarea</h2>
        <Textarea />
      </div>

      <div class="ui__item">
        <h2>Button</h2>
        <Button @button-click="simpleButtonClick" />
        <Button
          text="Button text='Button'"
          @button-click="textButtonClick"
          data-test-attribute
        />
      </div>

      <div class="ui__item">
        <h2>SearchButton</h2>
        <SearchButton />
      </div>

      <div class="ui__item">
        <h2>SelectSort</h2>
        <SelectSort />
      </div>

      <div class="ui__item">
        <h2>Skeleton</h2>
        <div
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px"
        >
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>

      <div class="ui__item">
        <h2>PostCard</h2>
        <div
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px"
        >
          <PostCard />
          <PostCard
            title="Сенсация! Глеб съел шошлыг и запил его медовухой!"
            description="Важнейшее событие произошло сегодня в самом сердце России в городе-миллиарднике NY. В самую непогоду Глеб съел шошлыг и запил его медовухой"
            :image="ShashlImage"
            :views="146"
            :comments="94"
            viewed
          />
        </div>
      </div>
    </div>
  </Content>
</template>

<style scoped lang="scss">
  .ui {
    padding-block: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
</style>
