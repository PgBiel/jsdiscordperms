const permissions = {
   CREATE_INSTANT_INVITE: 1,
   KICK_MEMBERS: 2,
   BAN_MEMBERS: 4,
   ADMINISTRATOR: 8,
   MANAGE_CHANNELS: 16,
   MANAGE_GUILD: 32,
   ADD_REACTIONS: 64,
   VIEW_AUDIT_LOG: 128,
   PRIORITY_SPEAKER: 256,
   VIEW_CHANNEL: 1024,
   READ_MESSAGES: 1024,
   SEND_MESSAGES: 2048,
   SEND_TTS_MESSAGES: 4096,
   MANAGE_MESSAGES: 8192,
   EMBED_LINKS: 16384,
   ATTACH_FILES: 32768,
   READ_MESSAGE_HISTORY: 65536,
   MENTION_EVERYONE: 131072,
   EXTERNAL_EMOJIS: 262144,
   USE_EXTERNAL_EMOJIS: 262144,
   CONNECT: 1048576,
   SPEAK: 2097152,
   MUTE_MEMBERS: 4194304,
   DEAFEN_MEMBERS: 8388608,
   MOVE_MEMBERS: 16777216,
   USE_VAD: 33554432,
   CHANGE_NICKNAME: 67108864,
   MANAGE_NICKNAMES: 134217728,
   MANAGE_ROLES: 268435456,
   MANAGE_ROLES_OR_PERMISSIONS: 268435456,
   MANAGE_WEBHOOKS: 536870912,
   MANAGE_EMOJIS: 1073741824 };
const convertReadable = function(permName, readable=true, debug=false) {
	if (!readable) return permName;
	if (debug) console.log(permName);
	let names = {
   		CREATE_INSTANT_INVITE: "Create Instant Invite",
   		KICK_MEMBERS: "Kick Members",
   		BAN_MEMBERS: "Ban Members",
   		ADMINISTRATOR: "Administrator",
   		MANAGE_CHANNELS: "Manage Channels",
   		MANAGE_GUILD: "Manage Guild",
   		ADD_REACTIONS: "Add Reactions",
   		VIEW_AUDIT_LOG: "View Audit Log",
   		PRIORITY_SPEAKER: "Priority Speaker",
   		VIEW_CHANNEL: "View Channel",
   		READ_MESSAGES: "Read Messages",
   		SEND_MESSAGES: "Send Messages",
   		SEND_TTS_MESSAGES: "Send TTS Messages",
   		MANAGE_MESSAGES: "Manage Messages",
   		EMBED_LINKS: "Embed Links",
   		ATTACH_FILES: "Attach Files",
  		READ_MESSAGE_HISTORY: "Read Message History",
  		MENTION_EVERYONE: "Mention Everyone",
   		EXTERNAL_EMOJIS: "External Emojis",
   		USE_EXTERNAL_EMOJIS: "Use External Emojis",
   		CONNECT: "Connect",
   		SPEAK: "Speak",
   		MUTE_MEMBERS: "Mute Members",
   		DEAFEN_MEMBERS: "Deafen Members",
   		MOVE_MEMBERS: "Move Members",
   		USE_VAD: "Use Voice Activity",
   		CHANGE_NICKNAME: "Change Nickname",
   		MANAGE_NICKNAMES: "Manage Nicknames",
   		MANAGE_ROLES: "Manage Roles",
   		MANAGE_ROLES_OR_PERMISSIONS: "Manage Roles",
   		MANAGE_WEBHOOKS: "Manage Webhooks",
   		MANAGE_EMOJIS: "Manage Emojis"
};

	if (!names[permName]) throw new RangeError("Invalid permission given!");
	return names[permName];
};

const convertPerms = function(permNumber, readableNames=false, debug=false) {
	//if readableNames is set to true, use the names at Discord instead of the names of PermissionResolvables at discord.js.
	if (isNaN(Number(permNumber))) throw new TypeError(`Expected permissions number, and received ${typeof permNumber} instead.`);
	permNumber = Number(permNumber);
	let evaluatedPerms = {};
	for (let perm in permissions) {
		let hasPerm = Boolean(permNumber & permissions[perm]);
		evaluatedPerms[convertReadable(perm, readableNames, debug)] = hasPerm;
	}
	return evaluatedPerms;
};
module.exports = {
	convertPerms,
	convertReadable,
	permissions
};
