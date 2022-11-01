import {
	Button,
	FormControl,
	InputLabel,
	Select,
	Typography,
} from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
const headersList = ['Overview', 'Views', 'Applied']

const HeaderButtons = () => {
	const theme = useTheme()
	const minWidth = useMediaQuery(theme.breakpoints.up('md'))
	return (
		<>
			{headersList.map((item) => (
				<Button key={item.toLocaleLowerCase()}>
					<Typography variant="subtitle1" fontSize={15} color="grey.500">
						{item}
					</Typography>
				</Button>
			))}
			{minWidth && <FormControl
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
			</FormControl>}
		</>
	)
}

export default HeaderButtons
