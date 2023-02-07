<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const buttonClassVariants = cva("font-semibold inline-flex items-center", {
  variants: {
    kind: {
      primary: "",
      secondary: "outline outline-offset-[-2px] outline-2",
      tertiary: "",
    },
    size: {
      xs: "text-xs py-1.5 px-3 space-x-1.5",
      sm: "text-sm py-2 px-3 space-x-1.5",
      base: "text-sm py-2.5 px-5 space-x-2",
      lg: "text-base py-3 px-5 space-x-2.5",
      xl: "text-base py-4 px-6 space-x-2.5",
    },
    look: {
      regular: "rounded",
      rounded: "rounded-lg",
    },
    disabled: {
      true: "text-neutral-500 fill-neutral-500 cursor-not-allowed",
      false: "cursor-pointer",
    },
    iconPosition: {
      left: "",
      right: "flex-row-reverse space-x-reverse",
    },
  },
  compoundVariants: [
    {
      kind: "primary",
      disabled: true,
      class: "bg-neutral-300",
    },
    {
      kind: "secondary",
      disabled: true,
      class: "outline-neutral-300",
    },
    {
      kind: "primary",
      disabled: false,
      class:
        "bg-primary-dark-green-600 text-neutral-50 fill-neutral-50 hover:bg-primary-dark-green-500 active:bg-primary-dark-green-400 active:text-white active:fill-white",
    },
    {
      kind: "secondary",
      disabled: false,
      class:
        "outline-primary-dark-green-600 bg-transparent text-primary-dark-green-600 fill-primary-dark-green-600 hover:bg-primary-dark-green-100 active:outline-primary-dark-green-500 active:text-primary-dark-green-500 active:fill-primary-dark-green-500",
    },
    {
      kind: "tertiary",
      disabled: false,
      class:
        "text-primary-dark-green-600 fill-primary-dark-green-600 hover:bg-primary-dark-green-100 active:text-primary-dark-green-500 active:fill-primary-dark-green-500",
    },
  ],
  defaultVariants: {
    kind: "primary",
    size: "base",
    look: "regular",
  },
});

type ButtonVariants = VariantProps<typeof buttonClassVariants>;

const iconClassVariants = cva("", {
  variants: {
    size: {
      xs: "w-4 h-4",
      sm: "w-4 h-4",
      base: "w-5 h-5",
      lg: "w-5 h-5",
      xl: "w-5 h-5",
    },
  },
});

type Props = {
  element?: "button" | "a";
  type?: "button" | "submit" | "reset";
  kind?: ButtonVariants["kind"];
  size?: ButtonVariants["size"];
  look?: ButtonVariants["look"];
  iconPosition?: ButtonVariants["iconPosition"];
  disabled?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

withDefaults(defineProps<Props>(), {
  element: "button",
  type: "button",
  kind: "primary",
  size: "base",
  look: "regular",
  iconPosition: "left",
  disabled: false,
});
</script>

<template>
  <component
    :is="element"
    :type="element === 'button' ? type : null"
    :disabled="element === 'button' ? disabled : null"
    :href="element === 'a' ? href : null"
    :target="element === 'a' ? target : null"
    :class="buttonClassVariants({ kind, size, look, iconPosition, disabled })"
  >
    <span :class="iconClassVariants({ size })" v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>
    <span>
      <slot></slot>
    </span>
  </component>
</template>