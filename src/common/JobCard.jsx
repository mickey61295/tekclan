import MediationSharpIcon from '@mui/icons-material/MediationSharp'
import { grey } from '@mui/material/colors'
import { Card, CardContent, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import Bull from './Bull'
import DiffBars from './DiffBars'

const JobCard = ({ item }) => {
	const obj = item[Object.keys(item)]
	return (
		<>
			<Card variant="outlined" sx={{ my: 0.5 }}>
				<CardContent>
					<Grid item container justifyContent="space-between" sx={{ my: 0.5 }}>
						<MediationSharpIcon />
						<Chip
							label={obj.jobCategory}
							size="small"
							color="primary"
							variant="outlined"
							sx={
								obj.jobCategory === 'Design'
									? { background: '#F2F8FE', color: '#85C0F7', border: 'none' }
									: { background: '#F6F2FE', color: '#B392F8', border: 'none' }
							}
						/>
					</Grid>
					<Grid item>
						<Typography fontWeight="bold" variant="body1" sx={{ my: 2 }}>
							{Object.keys(item)}
						</Typography>
						<Grid item sx={{ my: 2 }}>
							<Typography color="#ED8C7B" fontWeight="bold" variant="body2">
								{obj.jobType}
							</Typography>
							<Typography
								fontWeight="bold"
								variant="subtitle2"
								color={grey[500]}
							>
								{obj.company} <Bull /> {obj.location}
							</Typography>
						</Grid>
					</Grid>
					<Grid item sx={{ marginBottom: -1 }}>
						<hr style={{ borderStyle: 'dashed', color: 'lightgray' }} />
						<Grid container item justifyContent="space-between" direction="row">
							<DiffBars count={obj.diff}/>
							<Typography fontSize="0.8rem" sx={{ alignSelf: 'center' }}>
								<span style={{ fontWeight: 'bold', color: '#65D5B9' }}>
									{obj.diff}
								</span>
								/10
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</>
	)
}

export default JobCard
