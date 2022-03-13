import React from 'react';
import * as FeatherIcon from "react-feather";

function Icon({ icon }) {
	return (
		<div style={{ lineHeight: 0 }}>
			{
				icon === "arrow-left" ? <FeatherIcon.ArrowLeft />
				: icon === "bell" ? <FeatherIcon.Bell />
				: icon === "camera" ? <FeatherIcon.Camera />
				: icon === "calendar" ? <FeatherIcon.Calendar />
				: icon === "check" ? <FeatherIcon.Check />
				: icon === "clock" ? <FeatherIcon.Clock />
				: icon === "code" ? <FeatherIcon.Code />
				: icon === "compass" ? <FeatherIcon.Compass />
				: icon === "edit-3" ? <FeatherIcon.Edit3 />
				: icon === "flag" ? <FeatherIcon.Flag />
				: icon === "file-text" ? <FeatherIcon.FileText />
				: icon === "globe" ? <FeatherIcon.Globe />
				: icon === "heart" ? <FeatherIcon.Heart />
				: icon === "image" ? <FeatherIcon.Image />
				: icon === "link-2" ? <FeatherIcon.Link2 />
				: icon === "lock" ? <FeatherIcon.Lock />
				: icon === "log-out" ? <FeatherIcon.LogOut />
				: icon === "mail" ? <FeatherIcon.Mail />
				: icon === "map-pin" ? <FeatherIcon.MapPin />
				: icon === "message-circle" ? <FeatherIcon.MessageCircle />
				: icon === "message-square" ? <FeatherIcon.MessageSquare />
				: icon === "moon" ? <FeatherIcon.Moon />
				: icon === "monitor" ? <FeatherIcon.Monitor />
				: icon === "more-horizontal" ? <FeatherIcon.MoreHorizontal />
				: icon === "more-vertical" ? <FeatherIcon.MoreVertical />
				: icon === "plus" ? <FeatherIcon.Plus />
				: icon === "search" ? <FeatherIcon.Search />
				: icon === "server" ? <FeatherIcon.Server />
				: icon === "settings" ? <FeatherIcon.Settings />
				: icon === "share-2" ? <FeatherIcon.Share2 />
				: icon === "smile" ? <FeatherIcon.Smile />
				: icon === "sun" ? <FeatherIcon.Sun />
				: icon === "tag" ? <FeatherIcon.Tag />
				: icon === "user" ? <FeatherIcon.User />
				: icon === "users" ? <FeatherIcon.Users />
				: icon === "video" ? <FeatherIcon.Video />
				: icon === "x" ? <FeatherIcon.X />
				: null
			}
		</div>
	)
}

export default Icon