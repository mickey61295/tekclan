import React from 'react'
import { FormControl, Grid, InputLabel, Select, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import HeaderButtons from '../common/HeaderButtons'
import JobStatisticsCard from '../common/JobStatisticsCard'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Chart from '../common/Chart'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
const styles = () => ({})

const cardTitles = [
	{
		'Job View': {
			count: 2342,
			percent: '+6.4%',
		},
	},
	{
		'Job Applied': {
			count: 654,
			percent: '-0.5%',
		},
	},
]

const JobStatistics = (props) => {
	const theme = useTheme()
	const minWidth = useMediaQuery(theme.breakpoints.up('md'))
	const { classes } = props
	return (
		<>
			{/* Header */}
			<Grid container item justifyContent="space-between">
				<Grid container={!minWidth} alignSelf="center" justifyContent='space-between' sx={{display:'flex', alignItems:'center'}}  item>
					<Typography sx={{ fontWeight: 'bold' }} variant="h5">
						Job Statistics
					</Typography>
					{!minWidth && <FormControl
						variant="standard"
						sx={{ minWidth: '80px', p: 0, verticalAlign: 'bottom', paddingBottom:'12px' }}
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
				</Grid>
				<Grid item sx={{ scale: '0.9' }}>
					<HeaderButtons />
				</Grid>
			</Grid>
			{/* Job Boxes */}
			<Grid container item justifyContent="space-between">
				{cardTitles.map((item) => (
					<Grid
						item
						xs={5.75}
						sx={{
							borderStyle: 'dashed',
							borderRadius: '5px',
							borderColor: 'lightgrey',
						}}
						key={Object.keys(item)}
					>
						<JobStatisticsCard item={item} />
					</Grid>
				))}
			</Grid>
			<Grid container item direction="column" sx={{ marginTop: '18px' }}>
				<Grid item container sx={{ padding: '1rem' }}>
					<Typography
						variant="h6"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: '3rem',
						}}
					>
						<FiberManualRecordIcon sx={{ color: 'orange' }} />
						Job view
					</Typography>
					<Typography
						variant="h6"
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<FiberManualRecordIcon sx={{ color: 'lightgrey' }} />
						Job applied
					</Typography>
				</Grid>
				<Grid
					item
					container
					sx={{
						overflowX: 'scroll',
						overflowY: 'hidden',
						'&::-webkit-scrollbar': {
							display: 'none',
							width: 0,
						},
						msOveflowStyle: 'none' /*IE and Edge*/,
						scrollbarWidth: 'none' /*Firefox*/,
					}}
				>
					<Chart />
				</Grid>
			</Grid>
		</>
	)
}

export default withStyles(styles)(JobStatistics)
