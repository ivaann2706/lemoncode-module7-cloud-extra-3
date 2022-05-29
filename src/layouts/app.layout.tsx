import React from 'react';
import * as classes from './app.layout.styles';

interface ChildrenProps {
  className: string;
}

interface Props {
  children: (props: ChildrenProps) => React.ReactNode;
}

export const AppLayout: React.FunctionComponent<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <main>{children({ className: classes.content })}</main>
    </>
  );
};
