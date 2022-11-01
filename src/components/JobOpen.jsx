import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import GaugeChart from 'react-gauge-chart'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import jobs from '../constants/Jobs'

const JobOpen = () => {
	return (
		<>
                <Grid item sx={{ marginTop: 2 }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5">
                        Job Open
                    </Typography>
                </Grid>
			<Grid
				container
				item
				direction="row"
				sx={{
					borderRadius: '10px',
					padding: '5px',
					marginTop: '5px',
					background: '#FAF8F4',
				}}
			>
				<Grid item xs={6}>
					<Paper elevation={0}>
						<Typography
							textAlign="center"
							variant="h3"
							fontWeight="bold"
							sx={{ padding: '15px' }}
						>
							25
						</Typography>
						<Typography
							textAlign="center"
							variant="body2"
							sx={{ paddingBottom: '10px' }}
						>
							Jobs Opened
						</Typography>
					</Paper>
				</Grid>
				<Grid
					item
					xs={6}
					sx={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
				>
					<Typography variant="body2" color="#ED8C7B">
						Details
					</Typography>
				</Grid>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
                    marginTop:'32px'
				}}
			>
				<GaugeChart
					id="gauge-chart5"
					nrOfLevels={10}
					arcsLength={[0.3, 0.5, 0.2, 0.4]}
					formatTextValue={(value) => 80}
					needleBaseColor="transparent"
					needleColor="transparent"
					textColor="black"
				/>
			</Grid>
			<Grid
				item
				container
				direction="column"
				justifyContent={'space-between'}
				sx={{ padding: '5px' }}
			>
				{jobs.map((eachJob) => (
					<Grid key={eachJob.text} item container justifyContent={'space-between'}>
						<Typography
							sx={{
								color: 'grey',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							variant="h6"
						>
							<FiberManualRecordIcon sx={{ color: eachJob.color }} />
							{eachJob.text}
						</Typography>
						<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
							{eachJob.number}
						</Typography>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default JobOpen
