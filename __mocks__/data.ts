import type { ICard } from "~/types/card.interface";

const data: ICard[] = [
  {
    uuid: "1",
    title: "Photography",
    list: ["Drone Photography", "Interiors", "Exteriors / Architectural"],
    description:
      ["Every photograph we produce finds the beauty in your property while serving as a profitable asset."],
    images: ['camera.png', 'house-1.png']
  },
  {
    uuid: "2",
    title: "Virtual Staging",
    description:
      ["Our staging will help you sell the potential of your space.", "We can work off of our own photography or photos you provide."],
    images: ['house-2.png']
  },
  {
    uuid: "3",
    title: "Renderings",
    list: ['Interiors', 'Exteriors'],
    description: ["Renderings are the gold standard in pre-construction marketing."],
    images: ['house-3.png']
  },
  {
    uuid: "4",
    title: "Interactive Tours",
    list: ['Matterport', 'Video Walkthroughs'],
    description: ["Give your audience the ability to explore your property without requiring in-person travel."],
    images: ['house-4.png']
  },
  {
    uuid: "5",
    title: "Floor Plans",
    list: ['On-site Measure', '2D Floor Plans', '3D Floor Plans'],
    description: ["We produce laser-precise floor plans faster than any other service."],
    images: ['house-5.png']
  },
  {
    uuid: "6",
    title: "Video",
    list: ['Drone Cinematography', 'Interiors', 'Exteriors / Architectural'],
    description: ["Video content has higher engagement and will help your property stand out online."],
    images: ['horse.png']
  },
];

export default data;
