import React, {useRef} from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react'
  import Accordions from './Accordions' 
  import {FiMenu} from 'react-icons/fi'


  export default function Drawers() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const style = {
        width: "100%"
    }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen} style={style}>
          <FiMenu/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Subject</DrawerHeader>
  
            <DrawerBody>
                <Accordions />
            </DrawerBody>
  
            <DrawerFooter>

            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }