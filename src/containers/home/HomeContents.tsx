'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import * as styles from '@/containers/home/HomeContents.css';
import queries from '@/services/queries';
import getKrPrice from '@/utils/getKrPrice';
import Carousel from '@hehe/hds/components/Carousel';
import EventBanner from '@hehe/hds/components/EventBanner';
import ItemVerticalCard from '@hehe/hds/components/Item/ItemVerticalCard';
import ItemVerticalGroup from '@hehe/hds/components/Item/ItemVerticalGroup';

const HomeContents = () => {
  const { data } = useSuspenseQuery(queries.home.getHome);

  return (
    <>
      <EventBanner className={styles.eventBannerCss} slides={data.eventUrls} />
      <div className={styles.menusCss}>
        {data.menuInfos.map((menu, id) => {
          return (
            <ItemVerticalGroup key={id} title={menu.handler}>
              <Carousel
                slides={menu.menus}
                keyName="menuId"
                renderSlide={menu => {
                  return (
                    <ItemVerticalCard
                      href={`/item/${menu.menuId}`}
                      src={menu.thumbnailImageUrl}
                      title={menu.name}
                      subTitle={`${getKrPrice(menu.price)}원`}
                      scroll={false}
                    />
                  );
                }}
              />
            </ItemVerticalGroup>
          );
        })}
      </div>
    </>
  );
};

export default HomeContents;
