import React, {useState} from 'react';
export default (...defaultArgs)=>{
    let [args, argsChanger] = useState([...defaultArgs]);
    return {
        value:args.join(' '),
        append:(keys)=>{
            return `${args.join(' ')} ${keys.value}`;
        },
        toggle:(key)=>{
            let index = args.indexOf(key);
            console.log(index);
            console.log(args);
            if(index > -1){
                delete args[index];
                args = args.filter(arg=>arg);
                argsChanger([...args]);
            } else {
                args.push(key);
                argsChanger([...args]);
            }
        },
        remove:(key)=>{
            let index = args.indexOf(key);
            if(index > -1){
                delete args[index];
                args = args.filter(arg=>arg);
                argsChanger([...args]);
            }
        },
        push:(key)=>{
            let index = args.indexOf(key);
            if(index < 0){
                args.push(key);
                argsChanger([...args]);
            }
        }
    };
}