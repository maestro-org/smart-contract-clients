import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { customArgTypes } from "../../lib/customStoryArgTypes";
import LinearVestingWidget from "../../components/Widgets/LinearVesting/LinearVestingWidget";

const hideProps = [""];

export default {
  title: "Linear Vesting/Form",
  component: LinearVestingWidget,
  argTypes: {
    ...customArgTypes(hideProps),
  },
} as ComponentMeta<typeof LinearVestingWidget>;

const Template: ComponentStory<typeof LinearVestingWidget> = () => <LinearVestingWidget />;

export const Form = Template.bind({});

Form.args = {};
