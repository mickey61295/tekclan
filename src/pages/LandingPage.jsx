import React from 'react'
import { Grid } from '@mui/material'
import { withStyles } from '@mui/styles'

import {
	JobOpen,
	JobStatistics,
	SideBar,
	Dashboard,
	JobUpdates,
} from '../components'

const styles = () => ({})

function LandingPage(props) {
	const { classes } = props
	return (
		<Grid container sx={{ height: '100%' }}>
			{/* Sidebar */}
			<SideBar />
			{/* Main Layout */}
			<Grid container item direction="column" md={11.15}>
				{/* Dashboard Context */}
				<Dashboard />
				{/* Job Context */}
				<Grid container item>
					<Grid container item p={2} md={6}>
						<JobStatistics />
					</Grid>
					<Grid
						container
						direction="column"
						item
						sx={{ padding: '5px', marginTop: '5px' }}
						md={3}
					>
						<JobOpen />
					</Grid>
					<Grid
						container
						direction="column"
						item
						sx={{ padding: '5px', marginTop: '5px' }}
						md={3}
					>
						<JobUpdates />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(LandingPage)
