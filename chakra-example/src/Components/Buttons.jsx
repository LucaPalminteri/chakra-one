import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { FaBeer } from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import { MdBuild , MdCall } from "react-icons/md"
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Buttons() {
    return (
        <div className='buttons'>
            <h2>Buttons</h2>
            <Button colorScheme='blue'>Button</Button>
            <hr/>
            <Stack spacing={4} direction='row' align='center'>
                <Button colorScheme='teal' size='xs'>Button</Button>
                <Button colorScheme='teal' size='sm'>Button</Button>
                <Button colorScheme='teal' size='md'>Button</Button>
                <Button colorScheme='teal' size='lg'>Button</Button>
            </Stack>
            <hr/>
            <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='teal' variant='solid'>Button</Button>
                <Button colorScheme='teal' variant='outline'>Button</Button>
                <Button colorScheme='teal' variant='ghost'>Button</Button>
                <Button colorScheme='teal' variant='link'>Button</Button>
            </Stack>
            <hr/>
            <Stack direction='row' spacing={4}>
                <Button leftIcon={<FiMail />} colorScheme='teal' variant='solid'>Email</Button>
                <Button rightIcon={<FaBeer />} colorScheme='teal' variant='outline'> Call us</Button>
            </Stack>
            <hr/>
            <Stack direction='row' spacing={4}>
                <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>Settings</Button>
                <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>Call us</Button>
            </Stack>
            <hr/>
            <Stack direction='row' spacing={4}>
                <Button isLoading colorScheme='teal' variant='solid'>Email</Button>
                <Button
                    isLoading
                    loadingText='Submitting'
                    colorScheme='teal'
                    variant='outline'
                >Submit</Button>
            </Stack>
            <hr/>
            <Stack direction='row' spacing={4} align='center'>
            <Button
                isLoading
                loadingText='Loading'
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='start'
            >
                Submit
            </Button>
            <Button
                isLoading
                loadingText='Loading'
                colorScheme='teal'
                variant='outline'
                spinnerPlacement='end'
            >
                Continue
            </Button>
            </Stack>
            <hr/>
            <HStack>
            <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                Facebook
            </Button>
            <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
                Twitter
            </Button>
            </HStack>
        </div>
    )
}