import React from 'react'
import { Grid, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import HeaderButtons from '../common/HeaderButtons'

const styles = () => ({})
const jobStatistics = (props) => {
	const { classes } = props
	return (
		<>
			{/* Header */}
			<Grid container item justifyContent="space-between">
				<Grid alignSelf="center" item>
					<Typography sx={{ fontWeight: 'bold' }} variant="h5">
						Job Statistics
					</Typography>
				</Grid>
				<Grid item>
					<HeaderButtons />
				</Grid>
			</Grid>
			{/* Job Boxes */}
			<Grid container item sx={{ border: 1 }}>
				<Grid  item sx={{ border: 1 }}>
					Hello
				</Grid>
				<Grid  item sx={{ border: 1 }}>
					Hello
				</Grid>
			</Grid>
			<Grid></Grid>
		</>
	)
}

export default withStyles(styles)(jobStatistics)
