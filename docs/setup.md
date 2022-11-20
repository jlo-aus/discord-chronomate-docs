---
id: setup
title: Setup Guide
---

## 1. Invite Chronomate

Invite the bot using the button below.

<a class="button button--info button--outline button--lg" href="https://discord.com/api/oauth2/authorize?client_id=505166442338058251&permissions=3104&scope=bot%20applications.commands">Invite Chronomate</a>
<br></br>

#### Required Permissions
`Manage Server` `View Channels` `Send Messages` `Manage Messages` `Add Reactions`

For more informaion on what these permissions are needed for see [Permissions](perms)

---

## 2. Set the icon channel

Chronomate uses a designated channel to upload icons and use them when tasks are triggered.

The icon channel can be any text channel on the guild. 

It is recomended to start a new empty channel however this isn't required.

To set the channel use [`/icon channel [channel]`](cmds#channel)

---

## 3. Add some icons

From September 2022 Discord updated the TOS, bots now require special permission to read other users messages. This means Chronomate will not be able to read any icons which are sent to the channel except for it's own.

Add some icons to the icon channel using [`/icon upload <icon>`](cmds#iconupload)

:::info File Formats
Valid formats for icon images are: `.png` `.jpg` `.jpeg` `.gif` `.webp`

For animated guild icons the guild must have at least one boost. 
:::

---

## 4. Add an icon task

Add a task using [`/icon task add <month> <day> <message>`](cmds#task-add)

---

## 5. Turn on icon tasks

By default icon tasks are disabled in a new guild. 

To enable use [`/icon task toggle on`](cmds#task-toggle)

---

## 6. Set the timezone

This is optional.

Set the timezone using [`/timezone [timezone]`](cmds#timezone).

A full list of TZ Databse names can be found here: [List of tz database time zones - Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

The automatic icon changes will occur within the hour of 2am (2:00 to 2:59) in whatever timezone is set. By default the timezone is UTC.

---

## 7. Review config changes

To make sure all settings are as expected use [`/showconfig`](cmds#config) to list all configuration for the bot.