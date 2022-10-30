import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const headersList = ['Overview', 'Views', 'Applied']
export default function JobStatistics() {
	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Typography sx={{ margin:"2px" ,fontWeight: 'bold' }} variant="h5">
					Job Statistics
				</Typography>
				{headersList.map((item) => (
					<Button>
						<Typography variant="subtitle1" color="grey.500">
							{item}
						</Typography>
					</Button>
				))}
			</Box>
		</>
	)
}
