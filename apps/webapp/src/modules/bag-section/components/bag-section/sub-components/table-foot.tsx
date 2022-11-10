import { Button, Tfoot, Th, Tr } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import * as uuid from 'uuid';
import { AddItemInBagSectionFn } from '../../interface';
type Props = {
  bagSectionTotalWeight: number;
  bagSectionTotalItems: number;
  bagSectionId: string;
  addItemInBag: AddItemInBagSectionFn;
};

export const TableFoot: FunctionComponent<Props> = ({
  bagSectionTotalWeight,
  bagSectionTotalItems,
  bagSectionId,
  addItemInBag,
}) => {
  return (
    <Tfoot>
      <Tr>
        <Th>
          <Button
            colorScheme="teal"
            variant="link"
            onClick={() => {
              addItemInBag({
                id: uuid.v4(),
                bagSectionId,
                name: 'New item ' + new Date().getTime(),
                description: '',
                quantity: 0,
                weight: 0,
              });
            }}
          >
            Add item
          </Button>
        </Th>
        <Th></Th>
        <Th isNumeric>{bagSectionTotalWeight.toFixed(2)} kg</Th>
        <Th isNumeric>{bagSectionTotalItems.toFixed()}</Th>
      </Tr>
    </Tfoot>
  );
};
