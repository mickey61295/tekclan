import React from 'react'
import { withStyles } from '@mui/styles'
import {
	Badge,
	Button,
	FormControl,
	Grid,
	InputLabel,
	Select,
	Typography,
} from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AddIcon from '@mui/icons-material/Add'
import ListItem from '../common/ListItem'
import dashboard from '../constants/Dashboard'

const styles = () => ({
	leftContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: '0 6px 0 6px',
		'& h5': {
			margin: '16px 30px 0 30px',
			fontWeight: 'bold',
		},
	},
	rightContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '0 6px 0 6px',
		'& svg': {
			cursor: 'pointer',
		},
		'& button': {
			marginLeft: '50px',
		},
	},
})

const Dashboard = (props) => {
	const { classes } = props
	return (
		<Grid
			container
			item
			sx={{
				background:
					'linear-gradient(176deg, rgb(253, 253, 253) 0%, rgb(241, 239, 226) 100%)',

				height: '11rem',
				'& hr:last-child': {
					display: 'none',
				},
			}}
		>
			{/* Top Part */}
			<Grid container item md={6} className={classes.leftContainer}>
				<Grid item>
					<Typography variant="h5">Dashboard</Typography>
				</Grid>
				<Grid item>
					<FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
						<InputLabel id="demo-simple-select-standard-label">
							Oct 19 - Oct 25
						</InputLabel>
						<Select
							labelId="dateRange"
							id="dateRange"
							label={'Oct 19 - Oct 25'}
							disabled
						></Select>
					</FormControl>
				</Grid>
			</Grid>
			<Grid container item md={6} className={classes.rightContainer}>
				<Grid item>
					<Badge badgeContent={4} color="primary">
						<NotificationsNoneIcon color="action" />
					</Badge>
				</Grid>
				<Grid item>
					<Button variant="contained" startIcon={<AddIcon />}>
						Post a Job
					</Button>
				</Grid>
			</Grid>
			<Grid
				container
				item
				justifyContent="space-evenly"
				sx={{
					background: 'white',
					width: '95%',
					margin: 'auto',
					borderRadius: '10px',
					height: '3.5rem',
				}}
			>
				{dashboard.map((eachItem, idx) => (
					<ListItem key={eachItem.number} {...eachItem} />
				))}
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(Dashboard)
