import { MOCK_IMG } from '@/mocks/constants';
import type { Menu } from '@/services/customer/home/home.types';

const MENUS: Omit<Menu, 'menuId' | 'thumbnailImageUrl'>[] = [
  { name: '딸기오쇼콜라', price: 6000 },
  { name: '퐁당오쇼콜라', price: 400 },
  { name: '아메리카노', price: 3000 },
  { name: '슈크림라떼', price: 7200 },
  { name: '아포가토', price: 8000 },
  { name: '딸기라떼', price: 6400 },
];

export const eventUrls: string[] = Array(3).fill(MOCK_IMG);
export const menuInfos = Array(2)
  .fill(0)
  .map(() => ({
    handler: 'season special menu',
    menus: Array(6)
      .fill(0)
      .map((_v, idx) => ({
        menuId: `${idx}`,
        thumbnailImageUrl: MOCK_IMG,
        ...MENUS[idx],
      })),
  }));
