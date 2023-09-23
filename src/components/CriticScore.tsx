import { Badge } from '@chakra-ui/react'

interface Props {
  score: number;
}
const CriticScore = ({ score }:Props) => {
  let color;
  if(score> 90)
    color = 'green';
  else if(score >= 80)
  color = 'yellow';
  return (
    <Badge paddingX={2} colorScheme={color} fontSize={14}>{score}</Badge>
  )
}

export default CriticScore