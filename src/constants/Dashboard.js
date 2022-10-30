import GroupsIcon from '@mui/icons-material/Groups'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import EventNoteIcon from '@mui/icons-material/EventNote'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'
import { orange } from '@mui/material/colors'

const dashboard = [
	{
		startIcon: (
			<GroupsIcon
				sx={{
					width: 25,
					height: 25,
					background: orange[300],
					borderRadius: '90%',
					padding: '5px',
				}}
			/>
		),
		endIcon: (
			<NavigateNextIcon
				sx={{
					cursor: 'pointer',
					background: orange[100],
					borderRadius: '50%',
				}}
			/>
		),
		number: '76',
		string: 'New candidates to review',
	},
	{
		startIcon: (
			<EventNoteIcon
				sx={{
					width: 25,
					height: 25,
					background: orange[300],
					borderRadius: '90%',
					padding: '5px',
				}}
			/>
		),
		endIcon: (
			<NavigateNextIcon
				sx={{
					cursor: 'pointer',
					background: orange[100],
					borderRadius: '50%',
				}}
			/>
		),
		number: '5',
		string: 'Schedule for today',
	},
	{
		startIcon: (
			<MarkUnreadChatAltIcon
				sx={{
					width: 25,
					height: 25,
					background: orange[300],
					borderRadius: '90%',
					padding: '5px',
				}}
			/>
		),
		endIcon: (
			<NavigateNextIcon
				sx={{
					cursor: 'pointer',
					background: orange[100],
					borderRadius: '50%',
				}}
			/>
		),
		number: '28',
		string: 'Messages received',
	},
]

export default dashboard
