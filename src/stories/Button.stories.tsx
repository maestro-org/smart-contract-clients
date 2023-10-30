import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button } from "../components/Button/Button";
import { TokenIcon } from "../components/Icons";

import { customArgTypes } from "../lib/customStoryArgTypes";

const handleFunction = (e: any) => {
  console.log(e);
};

const hideProps = [
  "onClick",
  "classes",
  "tabIndex",
  "children",
  "action",
  "centerRipple",
  "disableRipple",
  "disableTouchRipple",
  "focusRipple",
  "focusVisibleClassName",
  "LinkComponent",
  "onFocusVisible",
  "sx",
  "TouchRippleProps",
  "touchRippleRef",
  "disableElevation",
  "disableFocusRipple",
  "endIcon",
  "startIcon",
  "ref",
];

export default {
  title: "KIT/Button",
  component: Button,
  argTypes: {
    ...customArgTypes(hideProps),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Storybook button</Button>;

export const Primary = Template.bind({});

Primary.args = {
  size: "xsmall",
  variant: "primary",
  disabled: false,
  onClick: handleFunction,
};

export const Secondary = Template.bind({});

Secondary.args = {
  size: "xsmall",
  variant: "secondary",
  disabled: false,
  onClick: handleFunction,
};

export const PrimaryWithIcon = Template.bind({});

PrimaryWithIcon.args = {
  size: "xsmall",
  variant: "primary",
  disabled: false,
  startIcon: <TokenIcon />,
  onClick: handleFunction,
};

export const SecondaryWithIcon = Template.bind({});

SecondaryWithIcon.args = {
  size: "xsmall",
  variant: "secondary",
  disabled: false,
  startIcon: <TokenIcon />,
  onClick: handleFunction,
};
