import React from "react";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'

  
  export default function Lists(props) {
      const style = {
          display: "block"
      }
      return (
        <div className="list">
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            {props.title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <ul style={style}>
                        <li style={style}>{props.li_one}</li>
                        <li style={style}>{props.li_two}</li>
                        <li style={style}>{props.li_three}</li>
                    </ul>
                </AccordionPanel>
            </AccordionItem>
        </div>
    )
}