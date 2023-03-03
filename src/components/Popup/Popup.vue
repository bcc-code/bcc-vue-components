<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import { CloseIcon } from "@bcc-code/icons-vue";

type Props = {
  show: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

let isOpen = ref(props.show);
</script>

<template>
  <TransitionRoot :show="isOpen" as="template" appear>
    <Dialog @close="isOpen = false" class="relative z-50">
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      </TransitionChild>

      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <div class="fixed inset-0 flex items-end justify-center">
          <DialogPanel
            class="h-full max-h-[95vh] w-full rounded-t-2xl bg-white p-4 shadow"
          >
            <DialogTitle class="flex items-center justify-between">
              <span class="font-bold">Registration for Wilderniss</span>
              <button @click="isOpen = false">
                <CloseIcon class="h-5 w-5" />
              </button>
            </DialogTitle>

            <slot />
          </DialogPanel>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
