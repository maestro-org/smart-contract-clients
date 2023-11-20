import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { customArgTypes } from "../../lib/customStoryArgTypes";
import PreviewWidget from "../../components/Widgets/LinearVesting/PreviewWidget";

const hideProps = [""];

export default {
  title: "Linear Vesting/Preview",
  component: PreviewWidget,
  argTypes: {
    ...customArgTypes(hideProps),
  },
} as ComponentMeta<typeof PreviewWidget>;

const Template: ComponentStory<typeof PreviewWidget> = () => <PreviewWidget />;

export const Preview = Template.bind({});

Preview.args = {};
