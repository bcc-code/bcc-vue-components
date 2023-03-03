import Popup from "./Popup.vue";
import BccButton from "../BccButton/BccButton.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Popup",
  component: Popup,
  argTypes: {
    slotDefault: {
      name: "default slot",
      description: "TODO",
    },
  },
} as Meta<typeof Popup>;

const Template: StoryFn<typeof Popup> = (args) => ({
  components: { Popup, BccButton },
  setup() {
    return { args };
  },
  template: `
    <Popup v-bind="args">
      {{ args.slotDefault }}
    </Popup>
  `,
});

export const Example = Template.bind({});
Example.parameters = {
  viewMode: "docs",
};
Example.args = {
  show: true,
  slotDefault: "Example popup content",
};
