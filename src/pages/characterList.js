import React from 'react'
import {useQuery,gql} from "@apollo/client";
const GET_CHARACTERS=gql
`query{
    characters{
        results{
            id
            name
            image
        }
    }
}
`
export default function characterList(){
    const obj=useQuery(GET_CHARACTERS);
    obj.error;
    obj.loading;
    obj.data;
    return (
        <div>
            
        </div>
    )
}
