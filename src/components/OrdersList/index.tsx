import GameItem, { GameItemProps } from '../../components/GameItem'
import Empty from '../../components/Empty'
import Heading from '../../components/Heading'
import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor='primary' color='black' size='small'>
      My Orders
    </Heading>

    {items?.length ? (
      items?.map((item) => (
        <GameItem key={item.downloadLink} {...item} />
      ))
    ) : (
      <Empty
        title="You have no orders yet"
        description='Go back to the store'
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
