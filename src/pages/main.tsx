import {
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function MainPage() {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={8}>
      <GridItem colSpan={9}>
        <Heading>Sysnee Template</Heading>
        <Text>Electron + React + Chakra UI</Text>
      </GridItem>
      <GridItem colSpan={3} colStart={10}>
        <Text>Sidebar</Text>
      </GridItem>
    </Grid>
  );
}
