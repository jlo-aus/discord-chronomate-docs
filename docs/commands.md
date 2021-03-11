---
id: commands
title: Commands
---

:::info

The default prefix for Chronomate is `.`. All commands listed here are shown with that prefix ie. `.ping`. 

If you have changed the prefix using `.prefix` then you will need to use that prefix instead. 

Alternate to a prefix you can mention the bot ie. `@Chronomate ping`

:::

## Admin

### `.config`
Show the server config:
- **Prefix** - The custom prefix set for the server
- **Timezone** - The timezone used for icon tasks
- **Icon Tasks Enabled** - Whether icon tasks should be executed when they occur
- **Icon Channel** - The channel where icon images are stored

---

### `.prefix [prefix]`
Change the server's prefix.

If `[prefix]` is left blank the prefix is reset to the default.

---

### `timezone [timezone]`
Set the timezone for the server, used for icon tasks. Default is Coordinated Universal Time (UTC)

If `[timezone]` is left blank the timezone is reset to UTC.

- Optional argument `[timezone]` accepts timezones from the [TZ Database](https://en.wikipedia.org/wiki/Tz_database) only. 
    - Example: `.timezone Australia/Sydney`

A full list of TZ Databse names can be found here: [List of tz database time zones - Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)


## Icon

### `.channel [channel]`
Set the chanel which will be used to stored icons.

If this is not set then the icon tasks will not be able to locate the icons.

---

### `.geticon`
Show the current icon for this server.

---

### `.seticon <message>`
Set the server icon to one stored in the icon channel.

Required argument `<message>` will accept either the message ID or the message link.

## Icon Tasks

### `.task toggle [bool]`
Enable or disable the automatic icon tasks. Default is off.

If `[bool]` is left blank the setting will toggle between on or off.

- Optional argument `[bool]` accepts valid boolean expressions.
    - To enable: `yes`,`on`,`enable`,`true` or `1`
    - To disable: `no`,`off`,`disable`,`false` or `0`

---

### `.task add <month> <day> <message>`
Add a new task on the specified month and day. Tasks set on on 29th Feb will only occur on leap years.

- Required argument `<month>` accepts a number 1-12 or a month name in short or full form. 
    - Example: `3`, `Mar` or `March`
- Required argument `<day>` accepts valid days for the month chosen. 
    - Example: `1`-`31` for the month of March
- Required argument `<message>` accepts the message ID or the message link.

---

### `.task del <month> <day>`
Delete a task on the specified month and day.

- Required argument `<month>` accepts a number 1-12 or a month name in short or full form. 
    - Example: `9`, `Sep`, `September`
- Required argument `<day>` accepts valid days for the month chosen. 
    - Example: `1` to `30` for the month of September

---

### `.task list`
List all the tasks currently set for this server.

Tasks followed by a ⚠ emoji are broken, meaning the icon file couldn't be found.

---

### `.task clean`
:::caution
This command will delete ***all*** broken tasks. They cannot be recovered once this command is excecuted.

:::

Delete ***all*** tasks which are broken. Broken tasks will be followed by a ⚠ emoji in the when listed using `.task list`

---

### `.task reset`
:::caution
This command will delete ***all*** tasks. They cannot be recovered once this command is excecuted.

:::

Delete ***all*** automatic icon tasks.

## Misc

### `.ping`
Ping the bot.

---

### `.uptime`
See how long the bot has been running for.