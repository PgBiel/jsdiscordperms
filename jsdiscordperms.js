const discord = require("discord.js");
const permissions = discord.Constants.PermissionFlags;
const convertReadable = function(permName, readable=true) {
	if (!readable) return permName;

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

	if (!names[permName]) throw new RangeError("Invalid permission given!");
	return names[permName];
};

const convertPerms = function(permNumber, readableNames=false) {
	//if readableNames is set to true, use the names at Discord instead of the names of PermissionResolvables at discord.js.
	if (isNaN(Number(permNumber))) throw new TypeError(`Expected permissions number, and received ${typeof permNumber} instead.`);
	permNumber = Number(permNumber);
	let evaluatedPerms = {};
	for (let perm in permissions) {
		let hasPerm = Boolean(permNumber & permissions[perm]);
		evaluatedPerms[convertReadable(perm, readableNames)] = hasPerm;
	}
	return evaluatedPerms;
};
module.exports = {
	convertPerms,
	convertReadable,
	permissions
};
