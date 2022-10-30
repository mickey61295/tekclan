import React from 'react'
import { Grid } from '@mui/material'
import { withStyles } from '@mui/styles'

import { JobStatistics, SideBar } from '../components'
import Dashboard from '../components/Dashboard'

const styles = () => ({})

function LandingPage(props) {
	const { classes } = props
	return (
		<Grid container sx={{ height: '100%' }}>
			{/* Sidebar */}
			<SideBar />
			{/* Main Layout */}
			<Grid container item direction="column" sm={12} md={11}>
				{/* Dashboard Context */}
				<Dashboard />
				{/* Job Context */}
				<Grid container item sx={{ border: 1 }}>
					<Grid container item sx={{ border: 1 }} md={6}>
						<JobStatistics />
					</Grid>
					<Grid container item sx={{ border: 1 }} md={3}>
						Job Updates
					</Grid>
					<Grid container item sx={{ border: 1 }} md={3}>
						Job Open
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(LandingPage)
