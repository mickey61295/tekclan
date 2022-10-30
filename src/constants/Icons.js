import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded'
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded'
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'

import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded'
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded'

const icons = [
	{
		key: 'home',
		title: 'Home',
		component: <HomeRoundedIcon fontSize={'large'} />,
	},
	{
		key: 'email',
		title: 'Mail',
		component: <EmailRoundedIcon fontSize={'large'} />,
	},
	{
		key: 'location',
		title: 'Location',
		component: <LocationCityRoundedIcon fontSize={'large'} />,
	},
	{
		key: 'people',
		title: 'Groups',
		component: <Groups2RoundedIcon fontSize={'large'} />,
	},
	{
		key: 'jobListing',
		title: 'Job Listing',
		component: <FactCheckRoundedIcon fontSize={'large'} />,
	},
	{
		key: 'calendar',
		title: 'Calendar',
		component: <CalendarMonthRoundedIcon fontSize={'large'} />,
	},

	{
		key: 'settings',
		title: 'Settings',
		component: <SettingsApplicationsRoundedIcon fontSize={'large'} />,
	},
	{
		key: 'support',
		title: 'Help and Support',
		component: <SupportAgentRoundedIcon fontSize={'large'} />,
	},
]

export default icons
