import React from 'react';
import {Input, Text} from '@chakra-ui/react';
export default (props)=>{
    return <div>
        {props.titleholder ? <Text>{props.titleholder}</Text> : undefined}
        <Input {...props}/>
        {props.hintholder ? <Text fontSize="xs" color="gray">* {props.hintholder}</Text> : undefined}
    </div>
}