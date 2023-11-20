import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { customArgTypes } from "../../lib/customStoryArgTypes";
import SuccessWidget from "../../components/Widgets/SuccessWidget";

const hideProps = [""];

export default {
  title: "Linear Vesting/Success",
  component: SuccessWidget,
  argTypes: {
    ...customArgTypes(hideProps),
  },
} as ComponentMeta<typeof SuccessWidget>;

const Template: ComponentStory<typeof SuccessWidget> = () => <SuccessWidget title="Token Claim Completed" />;

export const Success = Template.bind({});

Success.args = {};
