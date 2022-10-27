import { Th, Thead, Tr } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../../core/domain/bag.model';

type Props = {
  bagSectionName: BagSection['name'];
};

export const TableHead: FunctionComponent<Props> = ({ bagSectionName }) => {
  return (
    <Thead>
      <Tr>
        <Th>{bagSectionName}</Th>
        <Th></Th>
        <Th isNumeric>Weight</Th>
        <Th isNumeric>Quantity</Th>
      </Tr>
    </Thead>
  );
};
