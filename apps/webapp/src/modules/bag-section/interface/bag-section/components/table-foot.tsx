import { Button, Tfoot, Th, Tr } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Item } from '../../../core/domain/item.model';

type Props = {
  bagSectionTotalWeight: number;
  bagSectionContentLength: number;
  bagSectionTotalItems: number;
  addItemInBag: (item: Item) => void;
};

export const TableFoot: FunctionComponent<Props> = ({
  bagSectionTotalWeight,
  bagSectionContentLength,
  bagSectionTotalItems,
  addItemInBag,
}) => {
  return (
    <Tfoot>
      <Tr>
        <Th>
          <Button
            colorScheme="teal"
            variant="link"
            onClick={() =>
              addItemInBag({
                id: (bagSectionContentLength + 1).toString(),
                bagSectionId: '1',
                name: 'New item ' + new Date().getTime(),
                description: '',
                quantity: 0,
                weight: 0,
              })
            }
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
