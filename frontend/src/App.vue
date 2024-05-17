<script setup lang="ts">
import BaseCol from "@/components/BaseCol.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseRow from "@/components/BaseRow.vue";
import BaseSection from "@/components/BaseSection.vue";
import TheNav from "@/components/TheNav.vue";
import TheTableWithFormProducts from "./components/TheTableWithFormProducts.vue";
</script>

<template>
  <BaseContainer>
    <TheNav />
    <BaseRow>
      <BaseCol>
        <BaseSection :level-title="1">
          <template #title>Новая закупка</template>
          <TheTableWithFormProducts></TheTableWithFormProducts>
        </BaseSection>
      </BaseCol>
    </BaseRow>
  </BaseContainer>
</template>

<style scoped>
.table {
  margin-bottom: 20px;
}
</style>
