---
id: cmds
title: Commands
---

:::note

Some command inputs are required and some are optional. Required inputs are wrapped using `<>` while optional inputs are wrapped using `[]`.

:::

## Admin

:::info Permissions

Admin commands can only be used by users with the `Administrator` permission.

:::

### `/showconfig` {#config}
Show the guild config:
- **Timezone** - The timezone used for icon tasks
- **Log Channel** - Channel where logs from the bot will be sent
- **Icon Tasks Enabled** - Whether icon tasks should be executed when they occur
- **Icon Channel** - Icon storage channel where icon images will be sent on upload

---

### `/logchannel [channel]` {#logging}
Set the channel which the bot can send log messages to.

- Optional argument `[channel]` accepts text channels
    - Example `/channel #logs`

If `[channel]` is left blank the log channel will be cleared.

---

### `/timezone [timezone]` {#timezone}
Set the timezone Chronomate will use for this guild (when tasks will run). Default is Coordinated Universal Time (UTC)

If `[timezone]` is left blank the timezone is reset to UTC.

- Optional argument `[timezone]` accepts timezones from the [TZ Database](https://en.wikipedia.org/wiki/Tz_database) only. 
    - Example: `/timezone Australia/Sydney`

A full list of TZ Databse names can be found here: [List of tz database time zones - Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)


## Icon

:::info Permissions

Icon commands can only be used by users with the `Manage Server` permission.

:::

### `/icon channel [channel]` {#channel}
Set the channel which will be used to store icons.

This must be set for Chronomate to be able to upload and find icons when tasks run.

- Optional argument `[channel]` accepts text channels
    - Example `/channel #chronomate-icons`

---

### `/icon get` {#geticon}
Sends a message containing the current guild icon.

---

### `/icon set <message>` {#seticon}
Manually run an icon change task using any stored icon.

Required argument `<message>` will accept either the message ID or the message link.

---

### `/icon upload <icon>` {#iconupload}
Uploads an icon image to the icon channel.

Required argument `<icon>` accepts an image file.

:::info File Formats
Valid formats for icon images are: `.png` `.jpg` `.jpeg` `.gif` `.webp`

For animated guild icons the guild must have at least one boost. 
:::

## Icon Tasks

:::info Permissions

Icon task commands can only be used by users with the `Manage Server` permission.

:::

### `/icon task toggle [bool]` {#task-toggle}
Enable or disable the automatic icon tasks. Default is off.

If `[bool]` is left blank the setting will toggle between on or off.

- Optional argument `[bool]` accepts valid boolean expressions.
    - To enable: `yes`,`on`,`enable`,`true` or `1`
    - To disable: `no`,`off`,`disable`,`false` or `0`

---

### `/icon task add <month> <day> <message>` {#task-add}
Add a new task on the specified month and day. Tasks set on on 29th Feb will only occur on leap years.

- Required argument `<month>` accepts a number 1-12 or a month name in short or full form. 
    - Example: `3`, `Mar` or `March`
- Required argument `<day>` accepts valid days for the month chosen. 
    - Example: `1`-`31` for the month of March
- Required argument `<message>` accepts the message ID or the message link.

---

### `/icon task del <month> <day>` {#task-del}
Delete a task on the specified month and day.

- Required argument `<month>` accepts a number 1-12 or a month name in short or full form. 
    - Example: `9`, `Sep`, `September`
- Required argument `<day>` accepts valid days for the month chosen. 
    - Example: `1` to `30` for the month of September

---

### `/icon task list` {#task-list}
List all the tasks currently set for this guild.

Tasks followed by a ⚠ emoji are broken, meaning the icon file couldn't be found.

---

### `/icon task next` {#task-next}
Finds the next scheduled task and displays and ETA (Estimated Time of Action) which counts down to the task running.

*Note that Feb 29 tasks only run on leap years so even if it appears next in the task list it may not actually be the next task to run.*

---

### `/icon task clean` {#task-clean}

Delete ***all*** tasks which are broken. Broken tasks will be followed by a ⚠ emoji in the when listed using `.task list`

:::caution Warning
This command will delete ***all*** broken tasks. They cannot be recovered once this command is excecuted.

:::

---

### `/icon task reset` {#task-reset}

Delete ***all*** automatic icon tasks.

:::danger Warning
This command will delete ***all*** tasks. They cannot be recovered once this command is excecuted.

:::

## Misc

### `/uptime` {#uptime}
See how long the bot has been running for.