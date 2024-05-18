'use client';
import { ReactNode } from 'react';
import BottomNavUser from '@/components/BottomNav/BottomNavUser';
import CartIcon from '@/components/CartIcon';
import ItemVerticalCard from '@/components/Item/ItemVerticalCard';
import ItemVerticalGroup from '@/components/Item/ItemVerticalGroup';
import Carousel from '@hehe/hds/components/Carousel/Carousel';
import Location from '@hehe/hds/components/Location';
import ScrollView from '@hehe/hds/components/ScrollView';
import Tabs from '@hehe/hds/components/Tabs';
import Tab from '@hehe/hds/components/Tabs/Tab';
import TopNav from '@hehe/hds/components/TopNav/TopNav';

export default function Menu() {
  return (
    <>
      <ScrollView isFullPage topSpacing={0}>
        <TopNav size="lg">
          <TopNav.Btn icon="icon_chevron_left" />
          <TopNav.Title>메뉴</TopNav.Title>
          <TopNav.Spacing />
        </TopNav>
        <Tabs onClick={() => {}} value="reco">
          <Tab href="/1" value="reco">
            추천
          </Tab>
          <Tab href="/2" value="setmenu">
            SET MENU
          </Tab>
          <Tab href="/3" value="coffee">
            COFFEE
          </Tab>
          <Tab href="/4" value="decafineCoffee">
            DECAFEINE COFFEE
          </Tab>
          <Tab href="/5" value="banaccino&smoothie">
            BANACCINO & SMOOTHIE
          </Tab>
          <Tab href="/6" value="tea&ade">
            TEA & ADE
          </Tab>
          <Tab href="/7" value="bread&dessert">
            BREAD&DESSERT
          </Tab>
        </Tabs>
        <Location text="수원영통점" />
        <ItemVerticalGroup title="Try new menu" titleLang="en">
          <Carousel
            renderSlide={props => {
              return (
                <ItemVerticalCard
                  href={`/item/${props.menuId}`}
                  src={props.src}
                  title={props.name}
                  subTitle={`${props.price.toLocaleString()}원`}
                />
              );
            }}
            slides={[
              {
                menuId: '1111',
                name: '딸기오쇼콜라',
                price: 6000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1112',
                name: '퐁당오쇼콜라',
                price: 400,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1113',
                name: '아메리카노',
                price: 3000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1114',
                name: '슈크림라떼',
                price: 7200,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1115',
                name: '아포가토',
                price: 8000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1116',
                name: '딸기라떼',
                price: 6400,
                src: 'https://picsum.photos/400/400',
              },
            ]}
          />
        </ItemVerticalGroup>

        <ItemVerticalGroup title="Best menu" titleLang="en">
          <Carousel
            renderSlide={props => {
              return (
                <ItemVerticalCard
                  href={`/item/${props.menuId}`}
                  src={props.src}
                  title={props.name}
                  subTitle={`${props.price.toLocaleString()}원`}
                />
              );
            }}
            slides={[
              {
                menuId: '1111',
                name: '딸기오쇼콜라',
                price: 6000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1112',
                name: '퐁당오쇼콜라',
                price: 400,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1113',
                name: '아메리카노',
                price: 3000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1114',
                name: '슈크림라떼',
                price: 7200,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1115',
                name: '아포가토',
                price: 8000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1116',
                name: '딸기라떼',
                price: 6400,
                src: 'https://picsum.photos/400/400',
              },
            ]}
          />
        </ItemVerticalGroup>

        <ItemVerticalGroup title="Try new menu" titleLang="en">
          <Carousel
            renderSlide={props => {
              return (
                <ItemVerticalCard
                  href={`/item/${props.menuId}`}
                  src={props.src}
                  title={props.name}
                  subTitle={`${props.price.toLocaleString()}원`}
                />
              );
            }}
            slides={[
              {
                menuId: '1111',
                name: '딸기오쇼콜라',
                price: 6000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1112',
                name: '퐁당오쇼콜라',
                price: 400,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1113',
                name: '아메리카노',
                price: 3000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1114',
                name: '슈크림라떼',
                price: 7200,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1115',
                name: '아포가토',
                price: 8000,
                src: 'https://picsum.photos/400/400',
              },
              {
                menuId: '1116',
                name: '딸기라떼',
                price: 6400,
                src: 'https://picsum.photos/400/400',
              },
            ]}
          />
        </ItemVerticalGroup>
        <CartIcon />
      </ScrollView>
      <BottomNavUser />
    </>
  );
}
