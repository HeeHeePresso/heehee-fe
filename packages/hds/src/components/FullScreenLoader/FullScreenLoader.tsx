import Spinner from '@/components/Spinner';
import * as styles from './FullScreenLoader.css';

interface FullScreenLoaderProps {
  /** 배경 투명 여부 */
  isTransparent?: boolean;
}

/**
 *
 * ### 페이지 데이터를 불러올 때 사용하는 페이지 로더
 * - 부모 컨테이너의 높이와 너비를 100% 차지
 * - 뷰포트를 조절해가며 예시를 확인해주세요
 */
const FullScreenLoader = ({ isTransparent = false }: FullScreenLoaderProps) => {
  return (
    <div className={styles.rootCss({ isTransparent })}>
      <Spinner size={40} />
    </div>
  );
};

export default FullScreenLoader;
