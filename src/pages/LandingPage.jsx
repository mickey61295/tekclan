import { Grid } from '@mui/material'
import React from 'react'

function LandingPage() {
	return (
		<Grid container sx={{ height: '100%' }}>
			{/* Sidebar */}
			<Grid
				container
				item
				sx={{ border: 1, display: { xs: 'none', md: 'block' } }}
				md={1}
			>
				Hi
			</Grid>
			{/* Main Layout */}
			<Grid
				container
				item
				direction="column"
				sx={{ border: 1 }}
				sm={12}
				md={11}
			>
				<Grid container item sx={{ border: 1 }} direction="column">
					{/* Dashboard Context */}
					<Grid container item sx={{ border: 1 }}>
						Top Part
					</Grid>
					<Grid container item sx={{ border: 1 }}>
						Bottom Part
					</Grid>
				</Grid>
				{/* Job Context */}
				<Grid container item sx={{ border: 1 }}>
					<Grid container item sx={{ border: 1 }} md={6}>
						Job Statistics
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

export default LandingPage
