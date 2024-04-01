import type {Meta,StoryObj} from "@storybook/react";
import Img from "./Img";

const meta:Meta<typeof Img> = {
    title : "General/Img",
    component: Img,
    tags: ['autodocs'],
    argTypes: {
        ratio:{
            control : "select",
            options:["1/1","16/9","3/4"],
        },
    }
}

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
    args : { src : `https://picsum.photos/200/400`},
};