import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination(){
    return(
        <Stack 
         direction='row'
         spacing='6'
         mt='8'
         justify='space-between'
         alignItems='center'
        >
            <Box>
                <strong> 0 </strong> - <strong> 10 </strong> de <strong> 100 </strong>
            </Box> 
            <Stack direction='row' spacing='2'>
                <PaginationItem number={1} IsCurrent/>
                <PaginationItem number={2}/>

            </Stack>
        </Stack>
    )
}