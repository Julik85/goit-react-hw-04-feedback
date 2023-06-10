import { Title } from './Section.styled';
import { Container } from './Container.styled';

export function Section({ title, children }) {
  return (    
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>    
  );
}