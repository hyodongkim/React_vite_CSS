import React, {useEffect, useState} from 'react';
import { useClass, useRadio } from '../hook/main';
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
import MyInput from './input';
import ProgressBox from './progressbox';
import VsProgress from './vsprogress';
// code highlight

export default ()=>{
    let [leftTheme, rightTheme] = ["green", "purple"];

    return <VStack>
        <HStack>
            <Box p={1} bg={leftTheme} borderRadius="full" w={28}>
                <Image borderRadius="full" src="https://opgg-static.akamaized.net/meta/images/lol/14.4.1/champion/Ezreal.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1708681571653"/>
            </Box>
            <ProgressBox w={200} lValue={53.2} rValue={46.8} leftTheme={leftTheme} rightTheme={rightTheme}/>
            <Box p={1} bg={rightTheme} borderRadius="full" w={28}>
                <Image borderRadius="full" src="https://opgg-static.akamaized.net/meta/images/lol/14.4.1/champion/Kaisa.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1708681571653"/>
            </Box>
        </HStack>
        <VsProgress center={"kda"} prefix={" : 1"} lValue={2.47} rValue={2.59} leftTheme={leftTheme} rightTheme={rightTheme}/>
        <VsProgress center={"챔피언에게 가한 피해량"} lValue={24642} rValue={22517} leftTheme={leftTheme} rightTheme={rightTheme}/>
    </VStack>;
}

// select, 그외 기능 만들 방법이 어느정도 존재

// export default ()=>{
//     // let code = `
//     //     void main(){
//     //         printf("Hello");
//     //     }
//     // `;
//     // css -> opacity, visible, display:none
//     // collapse -> 무너지다
//     // let {isOpen, onToggle} = useDisclosure();
//     // let [isTrue, boolChanger] = useBoolean();
//     // let { value, setValue, onCopy, hasCopied } = useClipboard();
//     let isMQ = useMediaQuery(["(min-width: 700px)", "(max-width: 900px)"]);
//     return <Stack>
//         {
//             isMQ.map(mq=><Text>{mq ? "TRUE" : "FALSE"}</Text>)
//         }
//         {/* <InputGroup>
//             <Input onChange={(e)=>{setValue(e.currentTarget.value)}}/>
//             <InputRightElement>
//                 {
//                     hasCopied ? 
//                     <CheckIcon/> : 
//                     <CopyIcon onClick={onCopy}/>
//                 }
//             </InputRightElement>
//         </InputGroup>
//         <Text>{value}</Text> */}
//         {/* <Button onClick={onToggle}>이벤트 동작</Button>
//         <Collapse in={isOpen} startingHeight={30}>
//             <Text>블라블라 내용이 많아요</Text>
//             <Text>블라블라 내용이 많아요</Text>
//             <Text>블라블라 내용이 많아요</Text>
//             <Text>블라블라 내용이 많아요</Text>
//             <Text>블라블라 내용이 많아요</Text>
//         </Collapse> */}
//         {/* <SlideFade in={isOpen}>
//             <Center>
//                 <Stack w={200} h={200}>
//                     <Center>내용물</Center>
//                 </Stack>
//             </Center>
//         </SlideFade> */}
//         {/* <Slide in={isOpen} direction="bottom" style={{position:"relative"}}>
//             <Center>
//                 <Stack w={200} h={200}>
//                     <Center>내용물</Center>
//                 </Stack>
//             </Center>
//         </Slide> */}
//         {/* <ScaleFade in={isOpen} initialScale={0.3}>
//             <Center>
//                 <Stack w={200} h={200}>
//                     <Center>내용물</Center>
//                 </Stack>
//             </Center>
//         </ScaleFade> */}
//         {/* { isOpen &&
//         <Fade in={isOpen}>
//             <Center>
//                 <Stack w={200} h={200}>
//                     <Center>내용물</Center>
//                 </Stack>
//             </Center>
//         </Fade>
//         } */}
//         {/* <Text>1</Text> */}
//         {/* <Spinner thickness={3} speed='0.1s' size="xl" color="red"/> */}
//         {/* <CircularProgress value={30} isIndeterminate/> */}
//         {/* <Button onClick={onOpen}>알림창을 띄우는 버튼</Button>
//         <AlertDialog motionPreset='scale' closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
//             <AlertDialogOverlay/>
//             <AlertDialogContent>
//                 <AlertDialogCloseButton onClick={onClose}/>
//                 <AlertDialogHeader>헤더 내용</AlertDialogHeader>
//                 <AlertDialogBody>본문 내용</AlertDialogBody>
//                 <AlertDialogFooter>푸터 내용</AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog> */}
//         {/* <Button onClick={onOpen}>드로워을 띄우는 버튼</Button>
//         <Drawer placement='top' closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
//             <DrawerOverlay/>
//             <DrawerContent>
//                 <DrawerCloseButton onClick={onClose}/>
//                 <DrawerHeader>헤더 내용</DrawerHeader>
//                 <DrawerBody>본문 내용</DrawerBody>
//                 <DrawerFooter>푸터 내용</DrawerFooter>
//             </DrawerContent>
//         </Drawer> */}
//         {/* <Button onClick={onOpen}>모달창을 띄우는 버튼</Button>
//         <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
//             <ModalOverlay/>
//             <ModalContent>
//                 <ModalCloseButton onClick={onClose}/>
//                 <ModalHeader>헤더 내용</ModalHeader>
//                 <ModalBody>본문 내용</ModalBody>
//                 <ModalFooter>푸터 내용</ModalFooter>
//             </ModalContent>
//         </Modal> */}
//         {/* <Menu>
//             <MenuButton>버튼</MenuButton>
//             <MenuList>
//                 <MenuItem>아이템1</MenuItem>
//                 <MenuItem>아이템2</MenuItem>
//             </MenuList>
//         </Menu> */}
//         {/* <select>
//             <option>아이템1</option>
//             <option>아이템2</option>
//         </select> */}
//         {/* <Popover>
//             <PopoverTrigger>
//                 <Button>버튼</Button>
//             </PopoverTrigger>
//             <PopoverContent>
//                 <PopoverArrow/>
//                 <PopoverCloseButton/>
//                 <PopoverHeader>헤더</PopoverHeader>
//                 <PopoverBody>본문</PopoverBody>
//             </PopoverContent>
//         </Popover>
//         <Text>내용물0</Text>
//         <Text>내용물1</Text> */}

//         {/* <Code colorScheme='red'>
//             {code}
//         </Code> */}
//     </Stack>
// }

// // const GoogleIcon = createIcon({
// //     displayName:"GoogleIcon",
// //     viewBox:'0 0 50 50',
// //     path:[
// //     <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>,
// //     <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>,
// //     <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>,
// //     <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>]
// // })

// // export default ()=>{
// //     return <Stack>
// //         <Center fontSize="3xl">환영합니다!</Center>
// //         <Center fontSize="xl">통합 근태관리 솔루션 시프티, 지금 바로 시작하세요.</Center>
// //         <MyInput titleholder="이메일" placeholder='support@shitee.io'/>
// //         <MyInput titleholder="비밀번호" hintholder="8자 이상이면서 최소한 숫자 하나와 글자 하나를 포함해야 합니다." type='password'/>
// //         <MyInput titleholder="비밀번호 재확인" hintholder="비밀번호를 다시 입력해주세요." type='password'/>
// //         <Grid templateColumns="repeat(2, 1fr)" gap={10}>
// //             <Stack>
// //                 <MyInput titleholder="이름"/>
// //             </Stack>
// //             <Stack>
// //                 <MyInput titleholder="전화번호 (선택)"/>
// //             </Stack>
// //         </Grid>
// //         <Button colorScheme='blue'>가입하기</Button>
// //         <Button><GoogleIcon/> 구글 계정으로 가입하기</Button>
// //     </Stack>
// // }


// // xs sm md lg xl + 2xl ~ 6xl

// // export default ()=>{
// //     return <div>
// //         {/* <Button variant="solid">버튼</Button> */}
// //         {/* <InputGroup>
// //             <InputLeftElement pointerEvents="none">
// //                 <AddIcon/>
// //             </InputLeftElement>
// //             <Input variant="outline"/>
// //             <InputRightAddon>
// //                 .Phone
// //             </InputRightAddon>
// //         </InputGroup> */}
// //         {/* <AddIcon/> */}
// //         {/* <Button 
// //             variant="solid" 
// //             colorScheme='red' 
// //             leftIcon={<CopyIcon/>}
// //             // rightIcon={<AddIcon/>}
// //             isLoading 
// //             loadingText="로딩중..."
// //             spinner={<AddIcon/>}
// //             spinnerPlacement='end'
// //             onClick={()=>{console.log("클릭했을때")}}
// //         >
// //             버튼
// //         </Button> */}
// //         {/* <Button variant="outline" colorScheme='gray'>버튼</Button>
// //         <Button variant="ghost" colorScheme='gray'>버튼</Button>
// //         <Button variant="link" colorScheme='gray'>버튼</Button> */}
// //         {/* <Image fallbackSrc='https://6.soompi.io/wp-content/uploads/image/20240121152710_GIDLE_f0bf7d.jpg?s=900x600&e=t' borderRadius="full" src=''/> */}
// //         {/* <Text fontSize="4xl" noOfLines={[1,2]} as='del'>
// //             텍스트 내용물 입니다.
// //             텍스트 내용물 입니다.
// //             텍스트 내용물 입니다.
// //             텍스트 내용물 입니다.
// //         </Text> */}
// //         {/* <HStack>
// //             <VStack w={50} bgColor="red">
// //                 <Center>내용물0</Center>
// //                 <Center>내용물1</Center>
// //             </VStack>
// //             <VStack w={300} bgColor="blue">
// //                 <Center h={30}>상단 배너</Center>
// //                 <HStack>
// //                     <VStack w={30}>
// //                         <Center>내용물2</Center>
// //                         <Center>내용물3</Center>
// //                     </VStack>
// //                     <Box w={270} h={300} bgColor="yellow"></Box>
// //                 </HStack>
// //             </VStack>
// //         </HStack> */}
// //     </div>
// // }



// // // 1 ~ 100까지 숫자 그리드로 바둑판 배열 생성
// // // 기본 1x2 크기 차지
// // // 짝수는 빨간 배경에 초록 글자
// // // 홀수는 검은 배경에 흰 글자
// // // 글자 크기는 20px
// // // 외곽선은 회색 3px
// // // 외곽선은 둥글게
// // // 위쪽에 input 한개를 만들고 해당 input의 배수번째 칸은 1x1로 크기 변경

// // // export default ()=>{
// // //     // let [value, valueChanger] = useState(1);
// // //     // 글자 스타일 -> text-~
// // //     // 크기 -> xs, sm, base, lg, xl
// // //     // 정렬방향 -> left, center, right, justify
// // //     // 색상 -> red-500, blue-600
// // //     // 투명도 -> red-500/100

// // //     // 레이아웃 속성
// // //     // w, minW, maxW, h, minH, maxH 단위 -> rem
// // //     // % - 1/2
// // //     // full, screen(100vw), min, max, fit
// // //     // 마진과 패딩
// // //     // m-3, p-3
// // //     // py, px, my, mx -> 가로, 세로
// // //     // pt, pb, pl, pr, mt, mb, ml, mr

// // //     // 외곽선

// // //     // block, inline, inline-block, hidden, grid, flex
// // //     // flex
// // //     // grid
// // //     // justify-center, jutify-between - 가로
// // //     // items-center, items-start - 세로
// // //     // static, relative, absolute, fixed, sticky
// // //     // visible, invisible
// // //     // z-50

// // //     // let parimary = (n)=>{
// // //     //     for(let i = 2; i < n / 2 + 1; i += 1) {
// // //     //         if(n % i == 0) return false;
// // //     //     }
// // //     //     return true;
// // //     // }

// // //     // let divs = []
// // //     // for(let i = 0; i < 100; i += 1) divs.push(i + 1);

// // //     // 내가 변화하면 안되는데 변화하는 경우

// // //     // 이미지가 30장 반복해서 출력되는 바둑판
// // //     // 가로 4장씩 반복해서 출력
// // //     // 각 이미지는 마우스가 올라가면 크기가 1.5배가 되어야 한다
// // //     // 1.5배는 서서히 0.5초에 걸쳐서 된다
// // //     // 이미지는 둥그렇게 원형으로 잘려있어야 한다
// // //     // 각 이미지 사이의 거리는 정확히 5px
// // //     // filter를 이용해서 3개의 버튼으로 흑백, 원본, 밝게 3가지 효과가 적용되게
// // //     // let img = [];
// // //     // let imgClass = useClass(
// // //     //     "pf-rounded-[50%]",
// // //     //     "pf-duration-500",
// // //     //     "hover:pf-scale-150"
// // //     // );
// // //     // for(let i = 0; i < 30; i += 1) img.push(i);
// // //     // let radios = useRadio("radio", ["흑백", "원본", "밝게"], [],
// // //     //     (e)=>{
// // //     //         if(e.currentTarget.id == '흑백'){
// // //     //             imgClass.remove('pf-brightness-150');
// // //     //             imgClass.push("pf-grayscale");
// // //     //         }
// // //     //         else if(e.currentTarget.id == '원본'){
// // //     //             imgClass.remove('pf-brightness-150');
// // //     //             imgClass.remove("pf-grayscale");
// // //     //         }
// // //     //         else if(e.currentTarget.id == '밝게'){
// // //     //             imgClass.push('pf-brightness-150');
// // //     //             imgClass.remove("pf-grayscale");
// // //     //         }
// // //     //     });
// // //     // return <div>
// // //     //     {
// // //     //         radios.map(d=>d)
// // //     //     }
// // //     //     <div className="pf-grid pf-grid-cols-4 pf-gap-5">
// // //     //         {
// // //     //             img.map(img=>
// // //     //                 <img className={imgClass.value} src="https://6.soompi.io/wp-content/uploads/image/20240121152710_GIDLE_f0bf7d.jpg?s=900x600&e=t"/>
// // //     //             )
// // //     //         }
// // //     //     </div>
// // //     // </div>

// // //     // active:
// // //     // disabled: - 비활성화 했을때
// // //     // group-hover: - 부모에 마우스가 올라갔을때
// // //     // focus-within: - 자식 요소중에 한개에 포커스가 되었을때
// // //     // Transform
// // //     // let svgClass = useClass("pf-fill-current");
// // //     // let darkClass = useClass();
// // //     // return <div>
// // //     //     {/* <img className="pf-filter pf-grayscale pf-w-200 pf-m-5"
// // //     //             src="https://eu-images.contentstack.com/v3/assets/blt949ea8e16e463049/blt6132f3f563a648b7/65b2ac5206e5ea04099b7a30/palworld-pokemon.jpg"/>
// // //     //     <label>Dark</label><input type='checkbox' onChange={(e)=>{
// // //     //         darkClass.toggle('pf-text-red-500');
// // //     //     }}/>
// // //     //     <label>Red</label><input type="radio" name="color" value="red" onClick={(e)=>{
// // //     //         svgClass.remove("pf-text-green-500");
// // //     //         svgClass.remove("pf-text-blue-500");
// // //     //         svgClass.remove("pf-text-red-500");
// // //     //         svgClass.push(`pf-text-${e.currentTarget.value}-500`);
// // //     //     }}/>
// // //     //     <label>Green</label><input type="radio" name="color" value="green" onClick={(e)=>{
// // //     //         svgClass.remove("pf-text-green-500");
// // //     //         svgClass.remove("pf-text-blue-500");
// // //     //         svgClass.remove("pf-text-red-500");
// // //     //         svgClass.push(`pf-text-${e.currentTarget.value}-500`);
// // //     //     }}/>
// // //     //     <label>Blue</label><input type="radio" name="color" value="blue" onClick={(e)=>{
// // //     //         svgClass.remove("pf-text-green-500");
// // //     //         svgClass.remove("pf-text-blue-500");
// // //     //         svgClass.remove("pf-text-red-500");
// // //     //         svgClass.push(`pf-text-${e.currentTarget.value}-500`);
// // //     //     }}/>
// // //     //     <br/>
// // //     //     <input type="range" min="0" max="3" onChange={(e)=>{
// // //     //         for(let i = 0; i <= 3; i += 1)
// // //     //             svgClass.remove(`pf-stroke-[${i*100}px]`);
// // //     //         svgClass.push(`pf-stroke-[${e.currentTarget.value*100}px]`);
// // //     //     }}/>
// // //     //     <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="150.000000pt" height="150.000000pt" viewBox="0 0 1279.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
// // //     //         <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" className={svgClass.value}>
// // //     //             <path d="M8860 12794 c-14 -2 -59 -9 -100 -15 -239 -33 -517 -147 -776 -317 -253 -167 -443 -325 -819 -682 -289 -274 -407 -378 -542 -479 -519 -386 -1257 -658 -2443 -901 l-156 -32 -89 58 c-553 357 -1131 620 -1767 804 -195 57 -477 122 -628 146 -125 19 -378 22 -470 5 -396 -73 -610 -344 -660 -836 -17 -158 -8 -489 20 -755 94 -917 291 -1732 625 -2595 130 -336 155 -428 155 -568 -1 -133 -47 -238 -167 -378 -26 -31 -117 -129 -200 -218 -84 -89 -193 -216 -242 -281 -327 -434 -515 -957 -583 -1620 -17 -164 -17 -713 0 -895 41 -446 102 -807 228 -1360 75 -325 82 -363 100 -490 18 -130 46 -197 103 -251 33 -32 139 -89 148 -80 2 1 -15 56 -37 122 -331 981 -467 2193 -345 3069 63 449 180 794 364 1066 84 125 155 206 249 283 417 340 958 352 1592 35 731 -366 1229 -927 1365 -1539 26 -118 31 -375 10 -501 -81 -484 -404 -847 -863 -971 -121 -33 -373 -37 -520 -9 -458 88 -858 409 -1068 857 -25 55 -62 131 -80 171 -64 135 -170 194 -224 125 -50 -62 -4 -272 106 -482 83 -160 174 -280 324 -431 228 -229 457 -359 755 -427 138 -32 259 -42 645 -52 374 -10 459 -19 603 -65 115 -37 218 -87 326 -159 133 -89 222 -165 476 -406 251 -238 343 -317 469 -402 118 -79 219 -129 347 -171 94 -32 188 -52 609 -132 404 -78 626 -196 775 -414 l46 -68 -25 -89 c-67 -241 -97 -383 -87 -403 12 -22 107 -61 151 -61 58 0 66 17 130 273 86 350 118 437 206 568 110 164 210 287 348 425 394 392 882 646 1363 709 611 80 1175 -201 1482 -740 132 -232 196 -482 189 -743 l-3 -132 30 -12 c96 -40 221 27 261 139 18 52 17 209 -2 318 -47 272 -223 638 -431 895 -61 75 -221 235 -320 320 l-53 45 236 415 c707 1245 769 1347 864 1433 94 85 219 109 337 65 78 -28 185 -136 231 -229 96 -197 82 -365 -63 -767 -116 -325 -141 -460 -132 -720 8 -257 61 -471 177 -711 149 -307 359 -552 628 -732 123 -83 235 -137 379 -185 180 -61 272 -48 338 45 l30 43 -2 236 c-4 659 -168 1348 -472 1977 -103 213 -190 365 -326 570 -138 207 -243 342 -456 585 -195 223 -275 333 -340 465 -66 136 -89 237 -89 395 0 160 16 253 94 563 104 407 141 633 155 939 22 501 -50 960 -239 1510 -33 97 -128 346 -211 555 -364 913 -411 1112 -454 1933 -24 472 -43 684 -76 880 -79 471 -251 842 -508 1101 -185 185 -377 292 -623 345 -70 15 -326 27 -378 18z m310 -389 c418 -154 764 -684 909 -1391 108 -528 85 -1038 -69 -1488 -33 -99 -38 -156 -15 -200 8 -15 57 -85 109 -155 564 -762 742 -1203 850 -2111 61 -511 54 -960 -25 -1530 -45 -325 -135 -704 -195 -821 -7 -15 -50 -134 -95 -265 -44 -131 -103 -288 -130 -349 -194 -433 -500 -797 -942 -1118 -234 -171 -447 -291 -883 -498 -1049 -498 -1480 -649 -1998 -700 -175 -17 -564 -6 -736 20 -370 58 -792 181 -1245 363 -458 184 -929 419 -971 483 -24 37 -11 67 55 124 33 29 83 84 112 124 29 40 73 99 97 132 54 72 105 178 127 260 23 84 30 291 16 411 -18 141 -54 305 -116 526 -122 439 -218 648 -386 848 -30 36 -77 94 -104 130 -28 36 -78 96 -112 133 -96 105 -96 126 1 238 35 41 100 116 145 168 219 254 389 514 675 1034 277 502 376 870 445 1652 40 444 37 631 -13 829 -44 172 -163 438 -242 542 -49 64 -64 98 -64 149 0 41 5 51 45 94 95 102 276 168 815 299 380 93 898 177 1175 191 102 5 150 12 177 25 68 33 188 172 323 374 71 106 165 237 209 290 104 125 381 407 508 520 360 316 881 621 1175 686 109 25 279 16 373 -19z m-7618 -2080 c128 -22 260 -69 398 -142 439 -231 634 -454 690 -793 32 -188 -30 -385 -184 -590 -123 -164 -422 -426 -566 -497 -173 -85 -303 -10 -472 273 -146 245 -255 484 -322 707 -44 145 -122 492 -136 601 -29 233 80 406 280 445 72 14 220 12 312 -4z"/>
// // //     //             <path d="M8851 11829 c-71 -12 -216 -61 -288 -98 -259 -131 -535 -391 -766 -724 -137 -196 -187 -308 -187 -419 0 -132 69 -206 275 -293 50 -21 252 -119 449 -218 198 -98 387 -190 420 -202 177 -66 342 -72 461 -17 221 104 336 414 322 872 -6 190 -21 294 -86 585 -44 196 -55 235 -96 314 -85 168 -265 239 -504 200z m64 -342 c64 -67 101 -182 179 -547 47 -223 67 -393 69 -586 2 -146 0 -164 -17 -183 -37 -41 -114 -24 -335 70 -210 90 -382 193 -576 344 -163 127 -194 188 -142 284 37 70 256 350 350 448 138 143 260 212 376 213 51 0 57 -3 96 -43z"/>
// // //     //             <path d="M8896 7075 c-33 -13 -110 -58 -170 -98 -61 -41 -150 -100 -197 -131 -98 -63 -185 -152 -220 -223 -35 -72 -38 -174 -7 -232 36 -68 87 -103 153 -109 53 -4 57 -3 89 32 23 24 48 72 76 143 69 180 119 240 260 306 113 54 177 42 294 -55 32 -27 73 -56 90 -66 42 -22 141 -22 184 1 69 37 92 129 53 206 -30 58 -123 137 -215 181 -156 75 -282 90 -390 45z"/>
// // //     //             <path d="M10005 6115 c-133 -23 -455 -129 -567 -186 -47 -24 -78 -64 -78 -101 0 -39 32 -100 70 -132 51 -42 99 -36 233 29 98 48 126 57 222 71 86 12 126 24 184 52 85 43 92 55 95 159 1 60 -2 75 -19 91 -28 28 -60 31 -140 17z"/>
// // //     //             <path d="M4960 5864 c-14 -2 -52 -9 -85 -15 -143 -25 -289 -131 -389 -282 -146 -222 -157 -309 -46 -384 44 -31 106 -30 151 0 21 14 49 50 74 97 52 97 186 236 266 274 115 55 216 53 379 -9 109 -41 160 -44 221 -12 84 45 90 109 18 191 -61 70 -113 91 -289 120 -93 16 -261 27 -300 20z"/>
// // //     //             <path d="M10045 5513 c-332 -90 -336 -92 -371 -128 -34 -37 -49 -87 -34 -115 5 -10 24 -23 41 -29 58 -20 114 -13 226 30 99 38 117 41 223 45 146 5 244 21 263 42 40 45 32 125 -18 177 -29 31 -38 35 -81 34 -27 -1 -139 -26 -249 -56z"/>
// // //     //             <path d="M7263 5475 c-261 -47 -493 -195 -623 -396 -63 -98 -77 -186 -41 -264 42 -90 132 -142 318 -181 267 -56 316 -74 332 -117 19 -49 62 -389 62 -490 0 -96 -4 -117 -37 -217 -58 -176 -123 -258 -246 -315 -193 -88 -433 -28 -636 159 -51 46 -108 90 -127 96 -53 18 -98 -8 -131 -76 -23 -48 -26 -63 -22 -124 8 -113 72 -196 203 -262 158 -81 327 -113 544 -105 286 10 431 83 523 260 77 148 159 236 242 258 36 10 49 9 106 -12 59 -22 84 -24 260 -27 107 -2 253 1 324 7 156 13 204 32 295 117 35 32 107 95 159 139 127 106 138 128 164 331 12 92 17 175 13 201 -8 55 -51 106 -103 121 -53 16 -155 15 -195 -2 -62 -26 -70 -45 -78 -179 -9 -136 -37 -262 -70 -309 -30 -42 -101 -85 -184 -111 -89 -28 -266 -30 -365 -4 -151 40 -271 128 -304 222 -8 26 -20 93 -27 149 -21 189 10 317 129 534 116 209 135 255 140 341 3 71 2 79 -26 123 -58 90 -226 148 -422 147 -58 0 -137 -7 -177 -14z"/>
// // //     //             <path d="M9828 4739 c-44 -13 -88 -60 -88 -95 0 -40 25 -88 61 -118 32 -27 36 -28 99 -20 142 18 180 12 282 -39 102 -51 140 -57 193 -31 43 20 135 117 135 142 0 56 -99 111 -257 143 -115 23 -369 34 -425 18z"/>
// // //     //             <path d="M4855 4609 c-171 -59 -384 -188 -478 -289 -56 -60 -86 -123 -74 -154 11 -29 57 -39 114 -28 68 14 505 196 566 236 68 45 76 168 15 234 -27 28 -64 28 -143 1z"/>
// // //     //             <path d="M4830 3973 c-14 -2 -60 -15 -102 -29 -195 -64 -340 -225 -308 -343 14 -52 62 -108 101 -116 43 -10 125 33 185 96 27 28 58 56 69 62 12 6 71 11 140 12 104 0 126 4 162 23 70 37 88 93 54 167 -46 102 -162 151 -301 128z"/>
// // //     //             <path d="M4955 3331 c-46 -21 -106 -77 -227 -215 -117 -131 -132 -191 -66 -256 89 -89 261 -41 354 100 35 52 61 67 144 85 139 29 180 62 180 146 0 57 -18 80 -85 109 -47 20 -188 50 -234 50 -14 0 -44 -9 -66 -19z"/>
// // //     //             <path d="M3003 4475 c-34 -15 -37 -23 -33 -95 5 -94 71 -212 180 -320 86 -87 153 -125 201 -115 42 9 95 59 109 100 15 46 3 83 -59 177 -95 145 -182 220 -290 252 -65 19 -67 19 -108 1z"/>
// // //     //             <path d="M2341 4194 c-13 -9 -29 -32 -37 -50 -25 -60 -19 -78 47 -136 70 -60 99 -106 133 -205 45 -131 81 -159 188 -147 83 9 102 29 95 98 -10 94 -53 189 -118 260 -98 107 -222 196 -271 196 -8 0 -24 -7 -37 -16z"/>
// // //     //             <path d="M1684 3875 c-26 -40 -14 -104 34 -177 56 -87 87 -157 116 -267 14 -52 33 -102 41 -110 10 -10 33 -16 61 -16 40 0 50 5 79 36 83 91 38 290 -100 438 -108 115 -195 151 -231 96z"/>
// // //     //         </g>
// // //     //     </svg>
// // //     //     {
// // //     //         divs.map(div=>{
// // //     //             let classes = useClass(
// // //     //                 "pf-bg-white", 
// // //     //                 'pf-text-black',
// // //     //                 "pf-w-30",
// // //     //                 "pf-h-20"
// // //     //             );
// // //     //             if(div % 2 == 0){
// // //     //                 classes.push("hover:pf-cursor-not-allowed");
// // //     //             }
// // //     //             return <div className={classes.append(darkClass)} onClick={()=>{classes.toggle("pf-bg-naver")}}>
// // //     //                 {div}
// // //     //             </div>
// // //     //         })
// // //     //     } */}
// // //     //     {/* <input className="focus:pf-bg-pink-600" type="text" onChange={(e)=>{valueChanger(parseInt(e.currentTarget.value))}}/>
// // //     //     <div className="pf-group pf-m-1 pf-grid pf-grid-cols-7 pf-gap-1">
// // //     //         {divs.map(div=>{
// // //     //             let classes = [
// // //     //                 "pf-text-[20px]",
// // //     //                 "pf-text-center",
// // //     //                 "pf-border-[3px]",
// // //     //                 "pf-border-gary-500",
// // //     //                 "pf-rounded-lg",
// // //     //                 "pf-col-span-1",
// // //     //                 "pf-row-span-2",
// // //     //                 // sm, md, lg, xl, 2xl
// // //     //                 // 640px, 768px, 1024px, 1280px, 1536px
// // //     //                 "DH:hover:pf-bg-naver",
// // //     //                 // @keyframe
// // //     //                 // transition == transition-all
// // //     //                 "pf-transition",
// // //     //                 // [숫자] 숫자
// // //     //                 "pf-duration-[1.5s]",
// // //     //                 "pf-delay-0",
// // //     //                 // 타이밍
// // //     //                 "pf-ease-out",
// // //     //                 // "hover:pf-row-span-5",
// // //     //                 "pf-transform",
// // //     //                 // translate, rotate, skew
// // //     //                 "hover:pf-scale-150"
// // //     //             ];
// // //     //             if(div % 2 == 0) classes.push('pf-bg-red-500', 'pf-text-green-500');
// // //     //             else classes.push('pf-bg-black', 'pf-text-white');
// // //     //             if(value && div % value == 0){
// // //     //                 delete classes[classes.indexOf("pf-row-span-2")];
// // //     //                 classes.push("pf-row-span-1");
// // //     //             }
// // //     //             return <div className={classes.join(" ")}>{div}</div>
// // //     //         })}
// // //     //     </div> */}
// // //     //     {/* <div>
// // //     //         <div className="pf-text-naver pf-z-fullback">내용물0</div>
// // //     //         <div className="pf-z-over pf-rounded-lg pf-border-2 pf-border-red-500 pf-text-xs pf-text-left pf-text-red-700/80">내용물1</div>
// // //     //         <div className="pf-text-base pf-text-right pf-text-red-700/20">내용물2</div>
// // //     //         <div className="pf-text-xl pf-text-center pf-text-red-700">내용물3</div>
// // //     //     </div>
// // //     //     <div>
// // //     //         <div className="pf-hidden pf-flex-row">
// // //     //             <img className="pf-w-32 pf-minW-20 pf-maxW-48 pf-m-5"
// // //     //             src="https://eu-images.contentstack.com/v3/assets/blt949ea8e16e463049/blt6132f3f563a648b7/65b2ac5206e5ea04099b7a30/palworld-pokemon.jpg"/>
// // //     //             <img className="pf-w-1/2 pf-h-1/2 pf-p-5"
// // //     //             src="https://cdn.vox-cdn.com/thumbor/n2XDZTVsRZ7kIkj4TkOJ9ZpcOh4=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/73067967/ss_8ef8a16df5e357df5341efdb814192835814107f.0.jpg"/>
// // //     //         </div>
// // //     //         <div className="pf-grid pf-grid-cols-3">
// // //     //             <img className="pf-col-span-2"
// // //     //             src="https://readwrite.com/wp-content/uploads/2024/01/palworld_factory-825x500.jpg"/>
// // //     //             <img src="https://pyxis.nymag.com/v1/imgs/84e/b89/be0e8bf90a3090e1c2514c191e6e85dcf5-palworld-lede.2x.rsocial.w600.png"/>
// // //     //         </div>
// // //     //     </div> */}
// // //     // </div>
// // // }