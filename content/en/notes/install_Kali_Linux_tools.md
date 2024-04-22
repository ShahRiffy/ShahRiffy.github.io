---
author: 'Shahabor Hossain Rifat'
title: 'Install Kali Linux tools in Ubuntu'
date: 2024-04-22
description: 'Guide to Install Kali Linux tools in Ubuntu'
tags: ['emoji']
thumbnail: https://picsum.photos/id/1050/400/250
---

### here is the command :

1. `sudo sh -c "echo 'deb https://http.kali.org/kali kali-rolling main non-free contrib' > /etc/apt/sources.list.d/kali.list"`

2. `sudo apt install gnupg`

3. `wget 'https://archive.kali.org/archive-key.asc'`

4. `sudo apt-key add archive-key.asc`

5. `sudo sh -c "echo 'Package: *'>/etc/apt/preferences.d/kali.pref; echo 'Pin: release a=kali-rolling'>>/etc/apt/preferences.d/kali.pref; echo 'Pin-Priority: 50'>>/etc/apt/preferences.d/kali.pref"`

6. `sudo apt update`

### Now install any tools you want

`sudo apt install -t kali-rolling [package_name]`

### Example :

`sudo apt install -t kali-rolling burpsuite`
