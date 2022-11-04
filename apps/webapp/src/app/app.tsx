import { Heading } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/react';
import { BagSectionsContainer } from '../modules/bag-section/components/bag-sections/bag-sections.container';

export function App() {
  return (
    <Grid
      width={'90%'}
      margin={'auto'}
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={'150px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      height="100%"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={'header'}>
        <Heading as="h1" size="4xl" noOfLines={1}>
          Feather
        </Heading>
      </GridItem>
      <GridItem pl="2" bg="pink.100" area={'nav'}></GridItem>
      <GridItem pl="2" area={'main'}>
        <BagSectionsContainer />
      </GridItem>
    </Grid>
  );
}

export default App;
