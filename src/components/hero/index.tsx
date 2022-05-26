import { Wrapper, Logo, Title, Illustration, Description } from './styles'

const Hero = () => (
  <Wrapper>
    <Logo>Boilerplate</Logo>
    <Title>Next.Js Boilerplate</Title>
    <Description>Next.Js, React.Js, Typescript e Styled Components</Description>
    <Illustration
      src="/img/rsousa.svg"
      alt="Desenvolvedor sentado a frente de um computador"
    />
  </Wrapper>
)

export default Hero
