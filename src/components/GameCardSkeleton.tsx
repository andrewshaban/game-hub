import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

type Props = {};

const GameCardSkeleton = (props: Props) => {
  return (
    <Card>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
