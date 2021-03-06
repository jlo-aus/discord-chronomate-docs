---
id: trble
title: Troubleshooting
---

### The bot is offline.
- Check the outages channel in the support server for info any outages.

---

### The bot is online but isn't responding to my command.
All commands are listed in the [commands](cmds) section.
- Check you have typed the command correctly.
- Check you have the permissions needed to use that command.
- Make sure the bot is able to see the channel and has permission to send messages.

---

### The icon task I've setup didn't work.

Check your server config using `.config`

The icon tasks are triggered within the hour of 2am in the selected timezone.
If it has not reached 3am yet then there is a chance that the task may still trigger.

If the time is 3am in the timezone set and the icon still hasn't changed then check the following.

For icon tasks to work properly you must have:
- Set the icon channel using [`.channel [channel]`](cmds#channel)
- Set icon tasks enabled to "True" using `.task toggle True`

