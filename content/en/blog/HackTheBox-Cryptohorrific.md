---
author: "ShahRiffy"
title: "HackTheBox: Cryptohorrific Challenge"
date: 2023-01-01
description: "In this write-up, I'm going to show you how can you solve Cryptohorrific Challenge from HackTheBox."
tags: ["CTF"]
thumbnail: /images/blog/HackTheBox-Cryptohorrific/Cryptohorrific.png
---


It's me Shahabor Hossain Rifat aka ShahRiffy. Today I'm going to show you how can you solve Cryptohorrific Challenge from HackTheBox . So let's get started.

![Untitled](/images/blog/HackTheBox-Cryptohorrific/1.png)

First, download the file and unzip it .

```
hackthebox.app/ 
├── Base.lproj 
│ ├── LaunchScreen.storyboardc 
│ │ ├── 01J-lp-oVM-view-Ze5–6b-2t3.nib 
│ │ ├── Info.plist 
│ │ └── UIViewController-01J-lp-oVM.nib 
│ └── Main.storyboardc 
│ ├── BYZ-38-t0r-view-8bC-Xf-vdC.nib 
│ ├── Info.plist 
│ └── UIViewController-BYZ-38-t0r.nib 
├── challenge.plist 
├── _CodeSignature 
│ └── CodeResources 
├── hackthebox 
├── hackthebox.id0 
├── hackthebox.id1 
├── hackthebox.nam 
├── hackthebox.til 
├── htb-company.png 
├── Info.plist 
└── PkgInfo 
 
4 directories, 17 files
```

An IOS mobile application was presented. The plist file wasn’t easy to read, so the challenge.plist file seemed to contain an interesting base64 string, so I started investigating this. After finding this article on converting plist files to xml, I immediately found the plistutil tool for Linux and was able to convert plist to xml .
![Untitled](/images/blog/HackTheBox-Cryptohorrific/2.png)

An encoding line was found.

Let’s perform reverse engineering. I think I need Hopper disassembler because I have a MachO 64-bit x86_64 executable. Use the hopper disassembler

![Untitled](/images/blog/HackTheBox-Cryptohorrific/3.png)

Let’s take a look at the ViewController SecretManager function .

![Untitled](/images/blog/HackTheBox-Cryptohorrific/4.png)

After analysis, they using Apple’s CCCrypt, but this function was (yet) not very useful. Another look at where the function was called looked like in the viewDidLoad function. This function call also showed a key and an IV value.

See ViewController viewDidLoad.

![Untitled](/images/blog/HackTheBox-Cryptohorrific/5.png)

we found the iv key .

```
!A%D*G-KaPdSgVkY
```

Let’s decrypt with this tool

![Untitled](/images/blog/HackTheBox-Cryptohorrific/6.png)

Yes I done it

Hope you guys enjoyed this Walkthrough.