import { Button, Grid, GridItem,  } from '@chakra-ui/react'

import "./App.css";

function App() {
  
  return (
    <Grid
    templateAreas={`"navbar navbar"
                    "sidebar"
                    "content"`}
    gridTemplateRows={'1fr 1fr 30px'}
    gridTemplateColumns={'150px 1fr'}
    h='200px'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
  >
    <Button>Hi</Button>
    <GridItem pl='2' bg='orange.300' area={'navbar'}>
      NavBar
    </GridItem>
    <GridItem pl='2' bg='pink.300' area={'sidebar'}>
      Nav
    </GridItem>
    <GridItem pl='2' bg='green.300' area={'content'}>
      Main
    </GridItem>
  </Grid>
  );
}

export default App;
