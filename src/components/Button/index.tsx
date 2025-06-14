import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

const Index = (props: ButtonProps) => {
  const { ...restProps } = props;

  return <button className='bg-blue-500' {...restProps}></button>;
};

export default Index;
