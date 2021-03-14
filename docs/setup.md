---
id: setup
title: Setup Guide
---

## 1. Invite Chronomate

Invite the bot using the button below.

<a class="button button--info button--outline button--lg" href="https://discord.com/api/oauth2/authorize?client_id=505166442338058251&permissions=11360&scope=bot">Invite Chronomate</a>
<br></br>

#### Required Permissions
`Manage Server` `View Channels` `Send Messages` `Manage Messages` `Add Reactions`

For more informaion on what these permissions are needed for see [Permissions](perms)

---

## 2. Set the icon channel

Chronomate only looks for icons in the channel designated as "icon channel".

The icon channel can be any text channel on the server. 

It is recomended to start a new empty channel however this isn't required.

To set the channel use [`.channel [channel]`](cmds#channel)

---

## 3. Add some icons

Add some icon files to the icon channel.

:::info File Formats
Valid formats for icon images are: `.png` `.jpg` `.jpeg` `.gif`

For animated server icons the server must have at least one boost. 
:::

### Attached image
Upload attached images from a local folder.


### Send url links
You can also use URL links for any image.
- Use one URL per message.
    - If there is more than one URL per message only the first will be used.
- URLs must link directly to the image.
    - URLs must end in one of the appropriate file formats for a server icon.

---

## 4. Add an icon task

Add a task using [`.task add <month> <day> <message>`](cmds#task-add)

---

## 5. Turn on icon tasks

By default icon tasks are disabled in a new server. 

To enable use [`.task toggle on`](cmds#task-toggle)

---

## 6. Set the timezone

This is optional.

Set the timezone using [`.timezone [timezone]`](cmds#timezone).

A full list of TZ Databse names can be found here: [List of tz database time zones - Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

The automatic icon changes will occur at 2am in whatever timezone is set. By default the timezone is UTC.

---

## 7. Review config changes

To make sure all settings are as expected use [`.config`](cmds#config) to list all configuration for the bot.