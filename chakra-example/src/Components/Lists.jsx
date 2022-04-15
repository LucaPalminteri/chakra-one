import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
  import List from './Lists'

export default function Lists(props) {
    return (
        <div>
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
                    <ul>
                        <li>{props.li_one}</li>
                        <li>{props.li_two}</li>
                        <li>{props.li_three}</li>
                    </ul>
                </AccordionPanel>
            </AccordionItem>
        </div>
    )
}