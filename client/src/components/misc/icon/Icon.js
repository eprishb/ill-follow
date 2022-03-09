import React from 'react';
import * as FeatherIcon from "react-feather";

function Icon({ icon }) {
	return (
		<div style={{ lineHeight: 0 }}>
			{
				icon === "heart" ? <FeatherIcon.Heart />
				: icon === "bell" ? <FeatherIcon.Bell />
				: icon === "mail" ? <FeatherIcon.Mail />
				: icon === "edit-3" ? <FeatherIcon.Edit3 />
				: icon === "image" ? <FeatherIcon.Image />
				: icon === "video" ? <FeatherIcon.Video />
				: icon === "x" ? <FeatherIcon.X />
				: icon === "map-pin" ? <FeatherIcon.MapPin />
				: icon === "link-2" ? <FeatherIcon.Link2 />
				: icon === "camera" ? <FeatherIcon.Camera />
				: icon === "tag" ? <FeatherIcon.Tag />
				: icon === "more-horizontal" ? <FeatherIcon.MoreHorizontal />
				: icon === "more-vertical" ? <FeatherIcon.MoreVertical />
				: icon === "globe" ? <FeatherIcon.Globe />
				: icon === "user" ? <FeatherIcon.User />
				: icon === "users" ? <FeatherIcon.Users />
				: icon === "lock" ? <FeatherIcon.Lock />
				: icon === "plus" ? <FeatherIcon.Plus />
				: null
			}
		</div>
	)
}

export default Icon