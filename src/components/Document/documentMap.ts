import { Component } from 'vue';
import { GameEngine, GameMath } from "./content/game";

interface Document {
  name: string;
  title: string;
  detailList: DocumentDetail[];
}

interface DocumentDetail {
  name: string;
  title: string;
  content: Component;
}

const documentList: Document[] = [
  {
    name: 'game',
    title: 'GAME',
    detailList: [
      {
        name: 'game-engine',
        title: '게임엔진',
        content: GameEngine,
      },
      {
        name: 'game-math',
        title: '수학/물리',
        content: GameMath,
      },
      {
        name: 'game-graphics',
        title: '그래픽스',
        content: GameEngine,
      },
    ],
  },
  {
    name: 'web',
    title: 'WEB',
    detailList: [
      {
        name: 'web-react',
        title: '리액트',
        content: GameEngine,
      }
    ]
  }
];

const documentMap: Map<string, Document> = new Map(
  documentList.map((document) => [document.name, document])
);

export default documentMap;
