<script setup lang="ts">
import { ref } from 'vue'
import UiButton from '@/shared/ui/buttons/button/UiButton.vue'
import ButtonIcon from '@/shared/ui/buttons/button-icon/ButtonIcon.vue'
import UiSelect from '@/shared/ui/select/UiSelect.vue'
import UiContainer from '@/shared/ui/container/UiContainer.vue'
import UiTitle from '@/shared/ui/title/UiTitle.vue'
import UiText from '@/shared/ui/text/UiText.vue'
import ComponentShelf from '@/widgets/component-shelf/ComponentShelf.vue'
import ButtonSquare from '@/shared/ui/buttons/button-square/ButtonSquare.vue'
import UiLink from '@/shared/ui/link/UiLink.vue'
import UiCheckbox from '@/shared/ui/checkbox/UiCheckbox.vue'
import UiAuthor from '@/shared/ui/author/UiAuthor.vue'
import UiBadge from '@/shared/ui/badge/UiBadge.vue'
import UiBreadcrumbs from '@/shared/ui/breadcrumbs/UiBreadcrumbs.vue'
import DescriptionList from '@/shared/ui/description-list/DescriptionList.vue'
import UiDivider from '@/shared/ui/divider/UiDivider.vue'
import UiInput from '@/shared/ui/input/UiInput.vue'
import UiTextarea from '@/shared/ui/textarea/UiTextarea.vue'
import UiSwitch from '@/shared/ui/switch/UiSwitch.vue'
import UiSkeleton from '@/shared/ui/skeleton/UiSkeleton.vue'
import UiRadio from '@/shared/ui/radio/UiRadio.vue'
import UiPicture from '@/shared/ui/picture/UiPicture.vue'
import picture from '@/shared/assets/images/image.jpg'
import UiList from '@/shared/ui/list/UiList.vue'
import InputNumber from '@/shared/ui/input-number/InputNumber.vue'
import InputUpload from '@/shared/ui/input-upload/InputUpload.vue'
import UiPagination from '@/shared/ui/pagination/UiPagination.vue'

const selectedValue = ref(null)
const options = ref([
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
])
const count = ref(1)
const files = ref<File[]>([])

const currentPage = ref(1)
const totalPages = 10

function handleLoadMore() {
  if (currentPage.value < totalPages) {
    currentPage.value += 1
  }
}
</script>

<template>
  <UiContainer class="py-16">
    <UiTitle tag="h1" variant="80" class="text-center">UI Page</UiTitle>

    <ComponentShelf name="UiTitle" description="Набор заголовков">
      <div>
        <div class="flex items-end gap-10">
          <UiTitle variant="240">Title</UiTitle>
          <UiText variant="18">variant="240"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiTitle variant="140">Title</UiTitle>
          <UiText variant="18">variant="140"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiTitle variant="120">Title</UiTitle>
          <UiText variant="18">variant="120"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiTitle variant="80">Title</UiTitle>
          <UiText variant="18">variant="80"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiTitle variant="48">Title</UiTitle>
          <UiText variant="18">variant="48"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiTitle variant="32">Title</UiTitle>
          <UiText variant="18">variant="32"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiTitle variant="24">Title</UiTitle>
          <UiText variant="18">variant="24"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiTitle variant="20">Title</UiTitle>
          <UiText variant="18">variant="20"</UiText>
        </div>
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiText" description="Набор текстовых стилей.">
      <div>
        <div class="flex items-end gap-10">
          <UiText variant="32">Text</UiText>
          <UiText variant="18">variant="32"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiText variant="24">Text</UiText>
          <UiText variant="18">variant="24"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiText variant="20">Text</UiText>
          <UiText variant="18">variant="20"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiText variant="18">Text</UiText>
          <UiText variant="18">variant="18"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiText variant="14">Text</UiText>
          <UiText variant="18">variant="14"</UiText>
        </div>
        <div class="flex items-end gap-10">
          <UiText variant="12">Text</UiText>
          <UiText variant="18">variant="12"</UiText>
        </div>
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiButton" description="Кнопки">
      <div class="flex flex-col gap-4 w-[360px]">
        <UiTitle tag="h3" variant="20">UiButtons</UiTitle>
        <UiButton class="mt-4">Button</UiButton>
        <UiButton class="mt-4" icon-start="arrow-down"> Button </UiButton>
        <UiButton class="mt-4" icon-end="arrow-down"> Button </UiButton>
        <hr />
        <UiTitle tag="h3" variant="20">ButtonsIcon</UiTitle>
        <ButtonIcon name="arrow-down" size="48" color="accent" />
        <hr />
        <UiTitle tag="h3" variant="20">ButtonsSquare</UiTitle>
        <ButtonSquare icon="arrow-down" size="60" color="accent" />
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiLink" description="Ссылки">
      <div class="flex flex-col gap-4">
        <UiLink href="#" text="Ссылка" color="blue" weight="700" size="18" />
        <UiLink href="#" size="18" is-uppercase> Ссылка </UiLink>
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiCheckbox" description="Checkbox">
      <UiCheckbox>Согласен с <UiLink size="18">Политикой конфиденциальности</UiLink></UiCheckbox>
    </ComponentShelf>

    <ComponentShelf name="UiAuthor" description="Author">
      <UiAuthor />
    </ComponentShelf>

    <ComponentShelf name="UiBadge" description="Badge">
      <div class="flex flex-col gap-4 align-start pb-4">
        <UiTitle tag="h3" variant="20">Статичный badge</UiTitle>
        <UiBadge class="w-fit" text="Новый" />
      </div>
      <hr />

      <div class="flex flex-col gap-4 align-start mt-4">
        <UiTitle tag="h3" variant="20">Выбираемые badges</UiTitle>
        <div class="flex gap-2 mt-2">
          <UiBadge text="Новика" value="filter0" selectable />
          <UiBadge text="Хит" value="filter1" selectable checked />
          <UiBadge text="Sale" value="filter2" selectable />
        </div>
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiBreadcrumbs" description="UiBreadcrumbs">
      <UiBreadcrumbs
        :root="{ text: 'Главная', href: '/' }"
        :list="[{ text: 'Каталог', href: '/catalog' }, { text: 'Товары' }]"
      />
    </ComponentShelf>

    <ComponentShelf name="DescriptionList" description="DescriptionList">
      <DescriptionList
        :list="[
          { title: 'Вес', value: '1.2 кг' },
          { title: 'Материал', value: 'Алюминий' },
        ]"
      />
    </ComponentShelf>

    <ComponentShelf name="UiDevider" description="UiDevider">
      <div class="h-[24px] bg-gray-500"></div>
      <UiDivider isDesktop isDevices />
      <div class="h-[24px] bg-gray-500"></div>
    </ComponentShelf>

    <ComponentShelf name="UiInput" description="UiInput">
      <UiInput placeholder="Введите имя" custom-placeholder />
    </ComponentShelf>

    <ComponentShelf name="InputNumber" description="InputNumber">
      <InputNumber
        v-model="count"
        :valueMin="0"
        :valueMax="10"
        :isPositive="true"
        class="my-counter"
      />
    </ComponentShelf>

    <ComponentShelf name="InputUpload" description="InputUpload">
      <InputUpload v-model="files" name="my-files" accept="image/*" multiple :maxFiles="3" />
    </ComponentShelf>

    <ComponentShelf name="UiTextarea" description="UiTextarea">
      <UiTextarea placeholder="Введите сообщение" />
      <UiTextarea class="mt-8" placeholder="Введите сообщение" :customPlaceholder="false" />
    </ComponentShelf>

    <ComponentShelf name="UiRadio" description="UiRadio">
      <div class="flex flex-col gap-2">
        <UiRadio name="payment" value="card" label="Банковская карта" />
        <UiRadio name="payment" value="cash" label="Наличные" :checked="true" />
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiSwitch" description="UiSwitch">
      <div class="w-[300px] flex flex-col gap-4">
        <UiSwitch label="Switch | default" />
        <UiSwitch checked label="Switch | checked" />
        <UiSwitch disabled label="Switch | disabled" />
        <UiSwitch checked disabled label="Switch | checked disabled" />
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiSkeleton" description="UiSkeleton">
      <div class="w-[360px] h-[48px]"><UiSkeleton /></div>
    </ComponentShelf>

    <ComponentShelf name="UiPicture" description="UiPicture">
      <div class="w-[350px] h-[350px]">
        <UiPicture alt="image" :src="picture" />
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiList" description="UiList">
      <div class="flex flex-col gap-8">
        <UiList
          variant="duo-numeric"
          color="gray"
          :items="[
            { title: 'Основной пункт', subitems: ['подпункт 1', 'подпункт 2'] },
            { title: 'Второй пункт' },
          ]"
        />

        <UiList variant="bullet" :items="['Первый', 'Второй', 'Третий']" />
      </div>
    </ComponentShelf>

    <ComponentShelf name="UiPagination" description="UiPagination">
      <UiPagination
        v-model:currentPage="currentPage"
        :totalPages="totalPages"
        showMoreText="Загрузить ещё"
        @loadMore="handleLoadMore"
      />
      <p>Текущая страница: {{ currentPage }}</p>
    </ComponentShelf>

    <div class="flex flex-col gap-4 w-[360px] mt-8">
      <div class="flex flex-col gap-4 w-[360px] mt-8">
        <UiTitle tag="h2">Select</UiTitle>
        <UiSelect
          v-model="selectedValue"
          :options="options"
          label-key="name"
          value-key="id"
          placeholder="Выберите пользователя"
          class="mt-4"
        />
      </div></div
  ></UiContainer>
</template>
