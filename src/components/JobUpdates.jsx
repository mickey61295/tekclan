import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import JobCard from '../common/JobCard'
import jobList from '../constants/JobList'

const JobUpdates = () => {
	return (
		<>
			<Grid
				item
				sx={{
					marginTop: 2,
					display: 'inline-flex',
					justifyContent: 'space-between',
				}}
			>
				<Typography sx={{ fontWeight: 'bold' }} variant="h5">
					Job Updates
				</Typography>
				<Button>
					<Typography textAlign="center" variant="body2" color="#ED8C7B">
						View All
					</Typography>
				</Button>
			</Grid>
			<Grid item>
				{jobList.map((item) => (
					<JobCard item={item} key={Object.keys(item)} />
				))}
			</Grid>
			<Stack sx={{alignSelf:'center'}} spacing={2}>
				<Pagination count={3} size="small" />
			</Stack>
		</>
	)
}

export default JobUpdates
