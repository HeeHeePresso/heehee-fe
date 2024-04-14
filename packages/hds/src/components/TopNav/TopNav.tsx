import TopNavButton from '@/components/TopNav/TopNav.button';
import TopNavLinkButton from '@/components/TopNav/TopNav.linkButton';
import TopNavRoot from '@/components/TopNav/TopNav.root';
import TopNavSpacing from '@/components/TopNav/TopNav.spacing';
import TopNavTitle from '@/components/TopNav/TopNav.title';

const TopNav = Object.assign(TopNavRoot, {
  Btn: TopNavButton,
  LinkBtn: TopNavLinkButton,
  Title: TopNavTitle,
  Spacing: TopNavSpacing,
});

export default TopNav;
