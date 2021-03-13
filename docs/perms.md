---
id: perms
title: Permissions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::info
These are the required permissions for the bot. Click each to see more on why they are required.

**Without all of these permissions the bot may not work as expected.**

:::

<Tabs
  defaultValue="1"
  className="unique-tabs"
  values={[
    {label: 'Manage Server', value: '1'},
    {label: 'View Channels', value: '2'},
    {label: 'Send Messages', value: '3'},
    {label: 'Manage Messages', value: '4'},
    {label: 'Add Reactions', value: '5'},
  ]}>
  <TabItem value="1">Manage Server is needed to change the server icon.</TabItem>
  <TabItem value="2">View channels is need to view see the icons in the icon channel.</TabItem>
  <TabItem value="3">Send Messages is needed to send bot responses to commands.</TabItem>
  <TabItem value="4">Manage messages is needed to auto remove some bot responses after set time.</TabItem>
  <TabItem value="5">Add Reactions is needed to create paginated lists using reactions to switch pages.</TabItem>
</Tabs>