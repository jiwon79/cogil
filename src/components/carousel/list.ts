import { DefineComponent } from "vue";


export interface HomeCarousel {
  id: number;
  title: string;
  name: string;
  preview: DefineComponent | string;
}

import WebPreview from "./preview/web.vue";
import AppPreview from "./preview/app.vue";
import GamePreview from "./preview/game.vue";
import ServerPreview from "./preview/server.vue";

const homeCarouselList: HomeCarousel[] = [
  {
    id: 1,
    title: "WEB",
    name: "web",
    preview: WebPreview as DefineComponent,
  },
  {
    id: 2,
    title: "APP",
    name: "app",
    preview: AppPreview as DefineComponent,
  },
  {
    id: 3,
    title: "GAME",
    name: "game",
    preview: GamePreview as DefineComponent,
  },
  {
    id: 4,
    title: "SERVER",
    name: "server",
    preview: ServerPreview as DefineComponent,
  }
];

export default homeCarouselList;
