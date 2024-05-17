<script setup lang="ts">
import { Field, Product } from "@/@types";
import { ref } from "vue";
import BaseTable from "./BaseTable.vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";
import BaseIcon from "./BaseIcon.vue";
import BaseIconTrash from "./BaseIconTrash.vue";
import BaseButtonToolbar from "./BaseButtonToolbar.vue";
import BaseIconPlusCircle from "./BaseIconPlusCircle.vue";
import BaseSection from "./BaseSection.vue";
import BaseAlert from "./BaseAlert.vue";
import { createProducts } from "@/api";
import { AxiosError } from "axios";
import { ContextualAlertVariant } from "@/@types/variants";

const metaInputs = {
  name: {
    type: "text",
    placeholder: "Наименование продукта",
  },
  quantity: {
    type: "number",
    placeholder: "Количество шт",
    required: true,
  },
  price: {
    type: "number",
    placeholder: "Стоймость продукта Руб",
    step: "0.01",
    required: true,
  },
};

const fields = ref(<Field[]>[
  {
    key: "id",
  },
  {
    key: "name",
    label: metaInputs.name.placeholder,
  },
  {
    key: "quantity",
    label: metaInputs.quantity.placeholder,
  },
  {
    key: "price",
    label: metaInputs.price.placeholder,
  },
  {
    key: "remove",
    label: "",
  },
]);

type Alert = {
  id: number;
  value: string;
  variant: ContextualAlertVariant;
};

const products = ref(<Product[]>[]);
const alerts = ref(<Alert[]>[]);
const isButtonSubmitDisabled = ref(false);
const isButtonCancelDisabled = ref(false);

let id = 1;
let currentAlertId = 1;

function addProduct() {
  products.value.push({
    id: id,
    name: "",
    quantity: null,
    price: null,
  });
  id++;
}

function removeProduct(id: any) {
  if (typeof id !== "number") {
    return;
  }
  products.value = products.value.filter((product) => product.id !== id);
}

function addAlert(value: string, variant: ContextualAlertVariant = "error") {
  alerts.value.push({
    id: currentAlertId,
    value: value,
    variant,
  });
  currentAlertId++;
}

async function submit() {
  if (products.value.some((product) => product.name === "")) {
    addAlert(`Поле ${metaInputs.name.placeholder} обязатено для заполнения`);
    return;
  }
  try {
    isButtonSubmitDisabled.value = true;
    isButtonCancelDisabled.value = true;
    await createProducts(products.value);
    addAlert("Документ успешно создан", "success");
    fields.value = fields.value.filter((field) => field.key !== "remove");
  } catch (error) {
    isButtonCancelDisabled.value = false;
    isButtonSubmitDisabled.value = false;
    const err = error as AxiosError;
    if (err?.response?.status === 422) {
      const fieldErrors: object = (
        err?.response?.data as { errors: Record<string, Array<string>> }
      ).errors;
      Object.values(fieldErrors).forEach((errors: Array<string>) => {
        errors.forEach((error) => {
          addAlert(error);
        });
      });
      return;
    }
    addAlert("Не известная ошибка на сервере");
  }
}

function removeAlert(id: any) {
  if (typeof id !== "number") {
    return;
  }
  alerts.value = alerts.value.filter((alert) => alert.id !== id);
}

function cancel() {
  products.value = [];
}
</script>

<template>
  <form @submit.prevent="submit">
    <BaseSection :level-title="2">
      <template #title>Товарные позиции</template>

      <BaseAlert
        v-for="alert in alerts"
        :id="alert.id"
        :variant="alert.variant"
        @remove="removeAlert"
      >
        {{ alert.value }}
      </BaseAlert>

      <BaseTable
        class="table"
        :fields="fields"
        :items="products"
        keyItemName="id"
      >
        <template v-for="(metaInput, name) in metaInputs" v-slot:[name]="data">
          <BaseInput
            :disabled="isButtonSubmitDisabled"
            v-bind="metaInput"
            v-model="products[data.index][name]"
          />
        </template>
        <template #remove="data">
          <BaseButton @click="removeProduct(data.item.id)" variant="error">
            <BaseIcon>
              <BaseIconTrash />
            </BaseIcon>
          </BaseButton>
        </template>
      </BaseTable>

      <BaseButton
        :disabled="isButtonSubmitDisabled"
        @click="addProduct"
        variant="outline-primary"
      >
        <BaseIcon>
          <BaseIconPlusCircle />
        </BaseIcon>
        Добавить
      </BaseButton>
    </BaseSection>

    <BaseButtonToolbar>
      <BaseButton
        :disabled="isButtonCancelDisabled"
        @click="cancel"
        variant="secondary"
        >Отмена</BaseButton
      >
      <BaseButton
        :disabled="isButtonSubmitDisabled"
        type="submit"
        variant="success"
        >Сохранить</BaseButton
      >
    </BaseButtonToolbar>
  </form>
</template>

<style scoped>
.table {
  margin-bottom: 20px;
}
</style>
