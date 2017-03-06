const discord = require("discord.js");
const permissions = discord.Constants.PermissionFlags;
const convertreadable = function(permname, readable=true) {
	if (!readable) return permname;

	let names = {
		ADMINISTRATOR: "Administrator",
		MANAGE_GUILD: "Manage Server",
		MANAGE_ROLES_OR_PERMISSIONS: "Manage Roles",
		MANAGE_CHANNELS: "Manage Channels",
		KICK_MEMBERS: "Kick Members",
		BAN_MEMBERS: "Ban Members",
		CREATE_INSTANT_INVITE: "Create Instant Invite",
		CHANGE_NICKNAME: "Change Nickname",
		MANAGE_NICKNAMES: "Manage Nicknames",
		MANAGE_EMOJIS: "Manage Emojis",
		MANAGE_WEBHOOKS: "Manage Webhooks",
		READ_MESSAGES: "Read Messages",
		SEND_MESSAGES: "Send Messages",
		SEND_TTS_MESSAGES: "Send TTS Messages",
		MANAGE_MESSAGES: "Manage Messages",
		EMBED_LINKS: "Embed Links",
		ATTACH_FILES: "Attach Files",
		READ_MESSAGE_HISTORY: "Read Message History",
		MENTION_EVERYONE: "Mention Everyone",
		EXTERNAL_EMOJIS: "Use External Emojis",
		ADD_REACTIONS: "Add Reactions",
		CONNECT: "Connect",
		SPEAK: "Speak",
		MUTE_MEMBERS: "Mute Members",
		DEAFEN_MEMBERS: "Deafen Members",
		MOVE_MEMBERS: "Move Members",
		USE_VAD: "Use Voice Activity"
	};

	if (!names[permname]) throw new RangeError("Invalid permission given!");
	return names[permname];
};

const convertperms = function(permnumber, readablenames=false) {
	//if readablenames is set to true, use the names at Discord instead of the names of PermissionResolvables at discord.js.
	if (isNaN(Number(permnumber))) throw new TypeError(`Expected permissions number, and received ${typeof permnumber} instead.`);
	permnumber = Number(permnumber);
	let evaluatedperms = {};
	for (let perm in permissions) {
		let hasperm = Boolean(permnumber & permissions[perm]);
		evaluatedperms[convertreadable(perm, readablenames)] = hasperm;
	}
	return evaluatedperms;
};
module.exports = {
	convertperms,
	convertreadable,
	permissions
};
