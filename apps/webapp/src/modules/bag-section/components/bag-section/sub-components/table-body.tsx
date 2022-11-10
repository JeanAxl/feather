import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Input,
  Spacer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BagSection } from '../../../core/domain/bag.model';
import { ItemReadModel } from '../../../core/domain/item.model';
import { DeleteItemInBagFn, UpdateItemInBagFn } from '../../interface';

type Props = {
  bagSectionContent: BagSection['items'];
  updateItemInBag: UpdateItemInBagFn;
  deleteItemInBag: DeleteItemInBagFn;
};

export const TableBody: FunctionComponent<Props> = ({
  bagSectionContent,
  updateItemInBag,
  deleteItemInBag,
}) => {
  return (
    <Tbody>
      {bagSectionContent.map((item: ItemReadModel) => (
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
            <EditableCell
              item={item}
              attribute={'description'}
              updateItemInBag={updateItemInBag}
            />
          </Td>
          <Td>
            <EditableNumberCell
              item={item}
              attribute="weight"
              updateItemInBag={updateItemInBag}
            />
          </Td>
          <Td>
            <EditableNumberCell
              item={item}
              attribute="quantity"
              updateItemInBag={updateItemInBag}
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  );
};

type EditableCellProps = {
  item: ItemReadModel;
  attribute: 'name' | 'description';
  updateItemInBag: UpdateItemInBagFn;
};

const EditableCell: FunctionComponent<EditableCellProps> = ({
  item,
  attribute,
  updateItemInBag,
}) => {
  return (
    <Editable
      isPreviewFocusable={true}
      onSubmit={(input) => updateItemInBag(item.id, { [attribute]: input })}
      defaultValue={item[attribute]}
      placeholder={attribute}
    >
      <EditablePreview width={'100%'} />
      <EditableInput value={item[attribute]} />
    </Editable>
  );
};

type EditableNumberCellProps = {
  item: ItemReadModel;
  attribute: 'weight' | 'quantity';
  updateItemInBag: UpdateItemInBagFn;
};

const EditableNumberCell: FunctionComponent<EditableNumberCellProps> = ({
  item,
  attribute,
  updateItemInBag,
}) => {
  return (
    <Editable
      isPreviewFocusable={true}
      onSubmit={(input) =>
        updateItemInBag(item.id, { [attribute]: parseFloat(input) })
      }
      defaultValue={item[attribute].toString()}
      placeholder={attribute}
    >
      <EditablePreview width={'100%'} />
      <Input as={EditableInput} type="number" value={item[attribute]} />
    </Editable>
  );
};
