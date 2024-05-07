export interface Menu {
  /** menu id */
  menuId: string;
  /** menu 썸네일 */
  thumbnailImageUrl: string;
  /** menu 이름 */
  name: string;
  /** menu 가격 */
  price: number;
}

export interface ResHomeData {
  /** 이벤트 사진 URL */
  eventUrls: string[];
  /** 이벤트 섹션 정보 */
  menuInfos: {
    /** 이벤트 섹션 제목 */
    handler: string;
    menus: Menu[];
  }[];
}
