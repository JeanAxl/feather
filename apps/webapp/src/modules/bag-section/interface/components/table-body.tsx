import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Spacer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../core/bag.model';
import { Item } from '../../core/item.model';

type Props = {
  bagSectionContent: BagSection['items'];
  updateItemInBag: (id: Item['id'], input: Partial<Item>) => void;
  deleteItemInBag: (id: Item['id']) => void;
};

export const TableBody: FunctionComponent<Props> = ({
  bagSectionContent,
  updateItemInBag,
  deleteItemInBag,
}) => {
  return (
    <Tbody>
      {bagSectionContent.map((item: Item) => (
        <Tr key={item.id}>
          <Td>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box flex={1}>
                <EditableCell
                  item={item}
                  attribute={'name'}
                  updateItemInBag={updateItemInBag}
                />
              </Box>
              <Spacer />
              <Box>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  size="xs"
                  onClick={() => deleteItemInBag(item.id)}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            </Flex>
          </Td>
          <Td>
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Box flex={1}>
                <EditableCell
                  item={item}
                  attribute={'name'}
                  updateItemInBag={updateItemInBag}
                />
              </Box>
            </Flex>
          </Td>
          <Td isNumeric>{item.weight} kg</Td>
          <Td isNumeric>{item.quantity}</Td>
        </Tr>
      ))}
    </Tbody>
  );
};

type EditableCellProps = {
  item: Item;
  attribute: 'name' | 'description';
  updateItemInBag: (id: Item['id'], input: Partial<Item>) => void;
};

const EditableCell: FunctionComponent<EditableCellProps> = ({
  item,
  attribute,
  updateItemInBag,
}) => {
  return (
    <Editable isPreviewFocusable={true} defaultValue={item[attribute]}>
      <EditablePreview minWidth={'100%'} />
      <EditableInput
        placeholder="name"
        value={item[attribute]}
        onChange={(input) =>
          updateItemInBag(item.id, { [attribute]: input.target.value })
        }
      />
    </Editable>
  );
};
