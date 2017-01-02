# jsdiscordperms
Some tools to help you in working with `discord.js` permissions.

Made for the `discord.js` library, check it out [here](https://github.com/hydrabolt/discord.js).

## Usage

First set the variable.

```js
var jsdiscordperms = require("jsdiscordperms");
```
The function called `convertperms` will convert any permission(s) number to a object containing all permissions and if they are positive in that or not (as boolean). (Note: Even if the permission number grants the `Administrator` permission, the object won't have all permissions as `true` just because of it.)

It takes 2 arguments, although the second is optional. The first is the permission number, and the second specifies if the returned object's properties are User-Friendly (User-Friendly permissions, such as "Use Voice Activity" instead of "USE_VAD"). The default value for the second argument is `false`.

Example, with the permissions number being 103091264:
```js
var permissions = jsdiscordperms.convertperms(103091264);
console.log(permissions);
```
At console:
```js
{ CREATE_INSTANT_INVITE: false,
  KICK_MEMBERS: false,
  BAN_MEMBERS: false,
  ADMINISTRATOR: false,
  MANAGE_CHANNELS: false,
  MANAGE_GUILD: false,
  ADD_REACTIONS: true,
  READ_MESSAGES: true,
  SEND_MESSAGES: true,
  SEND_TTS_MESSAGES: false,
  MANAGE_MESSAGES: false,
  EMBED_LINKS: false,
  ATTACH_FILES: false,
  READ_MESSAGE_HISTORY: true,
  MENTION_EVERYONE: false,
  EXTERNAL_EMOJIS: true,
  CONNECT: false,
  SPEAK: true,
  MUTE_MEMBERS: false,
  DEAFEN_MEMBERS: false,
  MOVE_MEMBERS: false,
  USE_VAD: true,
  CHANGE_NICKNAME: true,
  MANAGE_NICKNAMES: false,
  MANAGE_ROLES_OR_PERMISSIONS: false,
  MANAGE_WEBHOOKS: false,
  MANAGE_EMOJIS: false }
```

If we add `true` for enabling User-Friendly permission names, the result will be:
```js
{ 'Create Instant Invite': false,
  'Kick Members': false,
  'Ban Members': false,
  Administrator: false,
  'Manage Channels': false,
  'Manage Server': false,
  'Add Reactions': true,
  'Read Messages': true,
  'Send Messages': true,
  'Send TTS Messages': false,
  'Manage Messages': false,
  'Embed Links': false,
  'Attach Files': false,
  'Read Message History': true,
  'Mention Everyone': false,
  'Use External Emojis': true,
  Connect: false,
  Speak: true,
  'Mute Members': false,
  'Deafen Members': false,
  'Move Members': false,
  'Use Voice Activity': true,
  'Change Nickname': true,
  'Manage Nicknames': false,
  'Manage Roles': false,
  'Manage Webhooks': false,
  'Manage Emojis': false }
```

The other function, `convertreadable`, grabs a permission resolvable and returns the equivalent user-friendly permission.
Example:
```js
var permission = jsdiscordperms.convertreadable("USE_VAD");
console.log(permission);
```
At console:
```js
'Use Voice Activity'
```

The module also comes with a property named `permissions` which is basically the list of permission flags. Just for a shortcut.
##More
Credits for hydrabolt for his awesome `discord.js` library, check it out [here](https://github.com/hydrabolt/discord.js). It uses it to grab the permission list.
