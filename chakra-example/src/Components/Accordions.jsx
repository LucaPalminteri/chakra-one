
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
  import List from './Lists'


export default function Accordions() {
  return (
    <Accordion allowToggle width="100%">
      <List 
        title="HTML"
        li_one="What is HTML?"
        li_two="What are tags?"
        li_three="Webpage example"
      />
      <List
        title="CSS"
      />
      <List 
        title="JavaScript"
      />
      <List 
        title="React JS"
      />
      <List 
        title="GIT"
      />
      <List 
        title="Bootstrap"
      />
      <List 
        title="API"
      />
      <List 
        title="Database"
      />
    </Accordion>

  )
}