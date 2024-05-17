<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseButtonToolbar from "@/components/BaseButtonToolbar.vue";
import BaseCol from "@/components/BaseCol.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseIconLeftArrow from "@/components/BaseIconLeftArrow.vue";
import BaseRow from "@/components/BaseRow.vue";
import BaseSection from "@/components/BaseSection.vue";
</script>

<template>
  <BaseRow>
    <BaseCol>
      <BaseSection>
        <BaseButtonToolbar>
          <BaseButton variant="outline-primary" href="#">
            <BaseIcon><BaseIconLeftArrow></BaseIconLeftArrow></BaseIcon>
            <span>Мои закупки</span>
          </BaseButton>
          <BaseButton variant="outline-primary" href="#">
            Новая закупка
          </BaseButton>
        </BaseButtonToolbar>
      </BaseSection>
    </BaseCol>
  </BaseRow>
</template>

<style scoped></style>
