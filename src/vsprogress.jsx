import React from 'react';
import { Box, Center, Flex, Grid, Stack, VStack, HStack } from '@chakra-ui/react';
import { Text, Button, Input, InputGroup, InputLeftElement,InputLeftAddon, InputRightAddon,Image, InputRightElement } from '@chakra-ui/react';
import { Code, Tooltip, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
// 대상, .Overlay, .Header, .Content, .CloseButton, .Body, .Footer
import { Drawer, DrawerHeader, DrawerContent, DrawerBody, DrawerFooter, DrawerCloseButton, DrawerOverlay } from '@chakra-ui/react';
import { AlertDialog, AlertDialogHeader, AlertDialogContent, AlertDialogBody, AlertDialogFooter, AlertDialogCloseButton, AlertDialogOverlay } from '@chakra-ui/react';
import { Progress, CircularProgress, Spinner } from '@chakra-ui/react';
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react';
import { useDisclosure, useBoolean, useClipboard, useMediaQuery } from '@chakra-ui/react';
import { AddIcon, CopyIcon, createIcon, CheckIcon } from '@chakra-ui/icons';

export default (props)=>{
    let {lValue, rValue, leftTheme, rightTheme, center,prefix, ...prop} = props;
    return <Stack w="90%">
        <HStack>
            <Text textAlign="left" w="30%">{lValue}{prefix}</Text>
            <Text textAlign="center" w="40%">{center}</Text>
            <Text textAlign="right" w="30%">{rValue}{prefix}</Text>
        </HStack>
    {
        lValue > rValue ? 
        <Progress colorScheme={leftTheme} value={lValue / (lValue + rValue) * 100}/> :
        <Progress colorScheme={rightTheme} transform="rotate(180deg)" value={rValue / (lValue + rValue) * 100}/>
    }
    </Stack>
}