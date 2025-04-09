import React from 'react';
import '../../assets/Container.css';

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => (
  <div className={"container"}>
    {children}
  </div>
)

export default Container;