import {Accordion} from '@chakra-ui/react'
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
        li_one="What is CSS?"
        li_two="Basics styling"
        li_three="Flexbox"
      />
      <List 
        title="JavaScript"
        li_one="What is JavaScript?"
        li_two="What are variables?"
        li_three="What are functions?"
      />
      <List 
        title="React JS"
        li_one="What id React JS?"
        li_two="What are components?"
        li_three="What is the lifecycle?"
      />
      <List 
        title="GIT"
        li_one="What is GIT?"
        li_two="What is the comand?"
        li_three="How can I work with it?"
      />
      <List 
        title="Bootstrap"
        li_one="What is Bootstrap?"
        li_two="Similar CSS libraries"
        li_three="Most used components"
      />
      <List 
        title="API"
        li_one="What is API"
        li_two="Ajax"
        li_three="Examples"
      />
      <List 
        title="Database"
        li_one="What is database?"
        li_two="SQL"
        li_three="bigdata"
      />
    </Accordion>
  )
}