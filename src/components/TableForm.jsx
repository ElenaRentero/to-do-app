import { Table, TableContainer } from '@chakra-ui/react'

function TableForm({ renderTasks }) {
    return (
        <TableContainer width='100%' height='310px' overflowY='scroll' overflowX='hidden' marginTop='10px'>
            <Table variant='simple' className='table'>{renderTasks()}</Table>
        </TableContainer>
    )
}

export default TableForm