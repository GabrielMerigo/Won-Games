import Button from '../../components/Button';
import * as S from './styles';

type Alignments = 'left' | 'right';

export type HighlightProps = {
  title: string,
  subtitle: string
  buttonLabel: string,
  buttonLink: string,
  backgroundImage: string,
  floatImage?: string,
  alignment?: Alignments
}

const Highlight = ({ title, subtitle, buttonLabel, buttonLink, backgroundImage, floatImage, alignment = 'right' }: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>

    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>{buttonLabel}</Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
