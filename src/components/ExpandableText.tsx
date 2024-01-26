import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface Props {
    children: string
}

const ExpandableText = ({ children }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if(children.length<=300)
        return <Text>{children}</Text>;

    if(!children) return null;
    
    const summary =expanded? children: children.substring(0, limit)+ '...';

    return (
        <Text>{summary}<Button size='xs' marginLeft={2} fontWeight='bold' colorScheme='yellow' onClick={()=>setExpanded(!expanded)}>{expanded?'Show less': 'Read more'}</Button></Text>
    )
}

export default ExpandableText