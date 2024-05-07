import BottomNavUser from '@/components/BottomNav/BottomNavUser';
import ScrollView from '@hehe/hds/src/components/ScrollView';

export default function Orders() {
  return (
    <>
      <ScrollView isFullPage topSpacing={0}>
        주문 내역 페이지
      </ScrollView>
      <BottomNavUser />
    </>
  );
}
