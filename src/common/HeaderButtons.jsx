import {
	Button,
	Divider,
	FormControl,
	InputLabel,
	Select,
	Typography,
} from '@mui/material'
import { borderLeft } from '@mui/system'
import React from 'react'
const headersList = ['Overview', 'Views', 'Applied']

const HeaderButtons = () => {
	return (
		<>
			{headersList.map((item) => (
				<Button>
					<Typography variant="subtitle1" fontSize={15} color="grey.500">
						{item}
					</Typography>
				</Button>
			))}
			<FormControl
				variant="standard"
				sx={{ minWidth: '80px', p: 0, verticalAlign: 'bottom' }}
			>
				<InputLabel
					id="demo-simple-select-standard-label"
					sx={{ fontWeight: 'bold', color: 'black' }}
				>
					14 days
				</InputLabel>
				<Select
					labelId="dateRange"
					id="dateRange"
					label={'Oct 19 - Oct 25'}
					disabled
				></Select>
			</FormControl>
		</>
	)
}

export default HeaderButtons
