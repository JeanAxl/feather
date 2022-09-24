import {
  Tbody,
  Tr,
  Td,
  Flex,
  Editable,
  EditablePreview,
  EditableInput,
  Button,
  Box,
  Spacer
} from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { BagSection } from '../../core/bag.model';
import { Item } from '../../core/item.model';
import { DeleteIcon } from '@chakra-ui/icons';

type Props = {
  bagSectionContent: BagSection['content'];
  updateItemInBag: (id: Item['id'], input: Partial<Item>) => void;
  deleteItemInBag: (id: Item['id']) => void;
};

export const TableBody: FunctionComponent<Props> = ({
  bagSectionContent,
  updateItemInBag,
  deleteItemInBag
}) => {
  return (
    <Tbody>
      {bagSectionContent.map((item: Item) => (
        <Tr key={item.id}>
          <Td>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box flex={1}>
                <EditableCell
                  itemName={item.name}
                  itemId={item.id}
                  updateItemInBag={updateItemInBag}
                />
              </Box>
              <Spacer />
              <Box>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="xs"
                  onClick={() => deleteItemInBag(item.id)}>
                  <DeleteIcon />
                </Button>
              </Box>
            </Flex>
          </Td>
          <Td>{item.description}</Td>
          <Td isNumeric>{item.weight} kg</Td>
          <Td isNumeric>{item.quantity}</Td>
        </Tr>
      ))}
    </Tbody>
  );
};

type EditableCellProps = {
  itemName: Item['name'];
  itemId: Item['id'];
  updateItemInBag: (id: Item['id'], input: Partial<Item>) => void;
};

const EditableCell: FunctionComponent<EditableCellProps> = ({
  itemName,
  itemId,
  updateItemInBag
}) => {
  return (
    <Editable isPreviewFocusable={true} defaultValue={itemName}>
      <EditablePreview minWidth={'100%'} />
      <EditableInput
        placeholder="name"
        value={itemName}
        onChange={(input) => updateItemInBag(itemId, { name: input.target.value })}
      />
    </Editable>
  );
};
