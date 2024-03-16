import { type HTMLAttributes, forwardRef } from 'react';

// type 명은 Pascal Case 를 사용해주세요
export interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  /** props 설명은 여기에 작성합니다. */
  name?: string;
}

/** 컴포넌트 설명을 여기에 작성합니다. doc 이 제대로 생성되지 않는다면 named export 해주세요 */
const Example = forwardRef<HTMLDivElement, ExampleProps>(({ name, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <div>{name}</div>
    </div>
  );
});

Example.displayName = 'Example';

export default Example;
