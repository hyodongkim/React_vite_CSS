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
    let {lValue, rValue, leftTheme, rightTheme, ...prop} = props;
    let total = (lValue + rValue);
    [lValue, rValue] = [lValue / total * 100, rValue / total * 100];
    return <Box {...prop}>
        <HStack gap={0} pt={30}>
            <Stack w={`${lValue}%`} m={0} p={0}>
                <Text>{lValue}%</Text>
                <Box bg={leftTheme} w="100%" h="25px" borderLeftRadius="5px" m={0} p={0}/>
            </Stack>
            <Stack w={`${rValue}%`} m={0} p={0}>
                <Text textAlign={"right"}>{rValue}%</Text>
                <Box bg={rightTheme} w="100%" h="25px" borderRightRadius="5px" m={0} p={0}/>
            </Stack>
        </HStack>
    </Box>
}