import React from 'react';
import {createRoot} from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Main from './main';
import './main.css';

let theme = extendTheme({
    // colors:{
    //     "naver":{
    //         "100":"#2DB400",
    //         "200":"#2DB400",
    //         "300":"#2DB400",
    //         "main":"#2DB400"
    //     }
    // },
    // components:{
    //     Button:{
    //         baseStyle:{
    //             fontWeight:'bold'
    //         },
    //         sizes:{
    //             xl:{
    //                 h:'50px',
    //                 fontSize:'20px'
    //             }
    //         },
    //         variants:{
    //             solid:{
    //                 bg:'naver.main'
    //             },
    //             'my-style':(props)=>({ bg:props.isLoading ? 'red' : blue })
    //         },
    //         defaultProps:{
    //         }
    //     }
    // }
});

createRoot(document.querySelector("body")).render(
    <ChakraProvider theme={theme}>
        <Main/>
    </ChakraProvider>
);