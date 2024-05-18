'use client';
import { useEffect, useState } from 'react';
import BottomNavUser from '@/components/BottomNav/BottomNavUser';
import CartIcon from '@/components/CartIcon';
import ItemVerticalCard from '@/components/Item/ItemVerticalCard';
import ItemVerticalGroup from '@/components/Item/ItemVerticalGroup';
import MSWComponent from '@/mocks/MSWComponent';
import Carousel from '@hehe/hds/components/Carousel/Carousel';
import Location from '@hehe/hds/components/Location';
import ScrollView from '@hehe/hds/components/ScrollView';
import Tabs from '@hehe/hds/components/Tabs';
import Tab from '@hehe/hds/components/Tabs/Tab';
import TopNav from '@hehe/hds/components/TopNav/TopNav';
import { stickyCss } from './page.css';

interface Data {
  menuId: string;
  name: string;
  price: number;
  src: string;
}

export default function Menu() {
  const [data, setData] = useState<Data[]>([]);
  const menulist = ['Try new menu', 'Best menu', 'Bread menu'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/menu');
        console.log(response);
        const result: Data[] = await response.json();
        setData(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <MSWComponent>
      <ScrollView isFullPage topSpacing={0}>
        <div className={stickyCss}>
          <TopNav size="lg">
            <TopNav.Btn icon="icon_chevron_left" />
            <TopNav.Title>메뉴</TopNav.Title>
            <TopNav.Spacing />
          </TopNav>
          <Tabs value="reco" onClick={() => {}}>
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
        </div>
        <Location text="수원영통점" />
        {menulist.map((title, idx) => (
          <ItemVerticalGroup key={idx} title={title} titleLang="en">
            <Carousel
              slides={data}
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
            />
          </ItemVerticalGroup>
        ))}

        <CartIcon />
      </ScrollView>
      <BottomNavUser />
    </MSWComponent>
  );
}
