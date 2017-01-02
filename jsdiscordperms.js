const discord = require("discord.js");
const permissions = discord.Constants.PermissionFlags;
const convertreadable = function(permname, readable=true) {
	if (!readable) return permname;
	switch(permname) {
		case "ADMINISTRATOR":
			return "Administrator";
		case "MANAGE_GUILD":
			return "Manage Server";
		case "MANAGE_ROLES_OR_PERMISSIONS":
			return "Manage Roles";
		case "MANAGE_CHANNELS":
			return "Manage Channels";
		case "KICK_MEMBERS":
			return "Kick Members";
		case "BAN_MEMBERS":
			return "Ban Members";
		case "CREATE_INSTANT_INVITE":
			return "Create Instant Invite";
		case "CHANGE_NICKNAME":
			return "Change Nickname";
		case "MANAGE_NICKNAMES":
			return "Manage Nicknames";
		case "MANAGE_EMOJIS":
			return "Manage Emojis";
		case "MANAGE_WEBHOOKS":
			return "Manage Webhooks";
		case "READ_MESSAGES":
			return "Read Messages";
		case "SEND_MESSAGES":
			return "Send Messages";
		case "SEND_TTS_MESSAGES":
			return "Send TTS Messages";
		case "MANAGE_MESSAGES":
			return "Manage Messages";
		case "EMBED_LINKS":
			return "Embed Links";
		case "ATTACH_FILES":
			return "Attach Files";
		case "READ_MESSAGE_HISTORY":
			return "Read Message History";
		case "MENTION_EVERYONE":
			return "Mention Everyone";
		case "EXTERNAL_EMOJIS":
			return "Use External Emojis";
		case "ADD_REACTIONS":
			return "Add Reactions";
		case "CONNECT":
			return "Connect";
		case "SPEAK":
			return "Speak";
		case "MUTE_MEMBERS":
			return "Mute Members";
		case "DEAFEN_MEMBERS":
			return "Deafen Members";
		case "MOVE_MEMBERS":
			return "Move Members";
		case "USE_VAD":
			return "Use Voice Activity";
		default:
			throw new RangeError("Invalid permission given!");
	}
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