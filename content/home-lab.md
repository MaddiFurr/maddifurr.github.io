+++
title = "What's in my Home Lab"
author = "Last Updated: NEVER HAHAHA"
aliases = ["home-lab", "hardware"]
toc = true
+++

---

<br>

## My lab!

All of the wacky, goofy and insanely over kill equipment and software because I find it fun!

<br>

### Before we dive in

Something to know, this setup is evolving on a constant basis with new software and hardware. Some of this may be outdated. I will do my best to keep it as close to accurate as possible. Honestly though, if I did, it would probably take a ton of time with every single change. So instead, I'm going to try and keep this relatively updated with hardware and *roughly* with software/services. I also will, at my own discretion, intentionally not mention some details about the configuration for the sake of security.

<br>

Another thing, this amount of compute is kinda insane especially considering I don't host services for anyone but me, my mate and maybe a few friends here and there. This has just mostly become and experiment of *what can I possibly do* and also exploring and expanding my hobby. This gives me the ability to try new things and experiment without having a negative impact on the services that I have come to rely on day to day

<br>

With all of that out of the way, here is what I've got!

<br>

> [!INFO] This might help
> 'PoP' stands for 'Point of Presence' which is basically a location that I have some form of hardware, virtual or physical as well as some kind of service running there

<br>

---

<br>

> [!IMPORTANT]
> This page is still heavily under construction. Just so you're aware :3

<br>

## PoPs 1, 2 & 3

I decided to merge these PoPs together because they are honestly the easiest to put into a list because they are just VPSes/Services that I rent. 

<br>

### **CHI**

<br>

This VPS is hosted in Chicago Illinois. I've been renting this VPS since early '23 and it has served many purposes over the years. For right now though, it's just running a proxy that feeds over my [Nebula](https://github.com/slackhq/nebula) network into my house to the services that are hosted there. The reason being is I have a rule at home and that is, no ports are ever forwarded. Ever since implementing that rule, things have ran smoothly with virtually no issues. It also runs and instance of [Nginx Proxy Manager](https://nginxproxymanager.com/) with the UI only be accessible from over the Nebula network with appropriate ACLs.

<br>

|   Item    |  Details  |
|----------|--------------------|
| OS | Ubuntu Server |
| CPU | 3x vCPUs: Intel E5-2680 v2 @2.7GHz |
| Memory | 4GB DDR3 |
| Storage | 70GB |

<br>

---

<br>

### **DFW**

<br>

The DFW PoP is actively working as a transitional device while I continue to get my KCI PoP online. The intention eventually is for it to become one of my two authoritative DNS servers with the CHI PoP doing the same

<br>

This PoP is where my [Headscale](https://headscale.net/stable/) instance runs. I wanted to keep it located out of the KCI PoP while I get it turned up so that in case something went horribly wrong, I didn't lose access to the Tailnet. 

<br>

There is an instance of [Headplane](https://github.com/tale/headplane) running to help keep management simple. Logins are required to be through my SSO portal with a strict 2FA requirement on your account and proper permissions. 

<br>

This is where I also currently am running my [Keycloak](https://www.keycloak.org/) instance. This is the front end where most of the authentication happens in order to get access to any of the services I run that I choose to lock behind it.

The intention is that this will end up in the KCI PoP once it's up and running along with the Headscale/Headplane services.

<br>

To ensure access is secure, there is also an instance of [Nginx Proxy Manager](https://nginxproxymanager.com/) running on this host as well.

<br>

|   Item    |  Details  |
|----------|--------------------|
| OS | Debian |
| CPU | 3x vCPUs: Intel E5-2690 v4 @ 2.60GHz |
| Memory | 4GB DDR4 |
| Storage | 105GB |

<br>

---

<br>

Related to both, each of these VMs has ~10TB of bandwidth per month. I personally use [Rack Nerd](https://racknerd.com) to host these VMs. They're cheaper, and yes they definitely are older, but they do the job and honestly do it really well so I can't complain. I don't pay nearly "advertised" price and if you are looking for a VPS, they're honestly not bad. And they often have [really good deals](https://www.racknerd.com/specials/) on some of their services (hence why I said "advertised" since they basically just tell you that they have better deals on VPSes).

<br>

A word of caution about this though, a lot of the IPs that Rack Nerd will hand out are usually blacklisted. For the CHI one for example, it took me over a year before that IP was no longer blacklisted. If I tried to use it as a VPN, I'd be doing captcha after captcha with Google being the most egregious offender of the check points. Over all though, I haven't had any complains with the service or anything like that. Support has been great and respond really quickly. I do wish they offered IPv6 at all of their sites, but for now it seems they only offer it in California and one other location (I can't recall what support told me). I do hope they look to expand this in the future since IPv6 has a ton of potential.

<br>

---

<br>

### **NL**

> [!WARNING] Just so ya know
> I will not be listing the hosting provider for this PoP

<br>

This PoP honestly doesn't handle a whole lot. It's used as a place to store my *Linux ISOs* for the time being. While I have a similar service that I run out of my house, I haven't gotten around to canceling this one yet because it's just proven to be convenient to have from time to time.

<br>

Currently there is an instance of [qBittorrent](https://www.qbittorrent.org/) running as well as an instance of [Jellyfin](https://jellyfin.org/) for when I wanna stream a movie or a show in a pinch.

<br>

|   Item    |  Details  |
|----------|--------------------|
| OS | *Unknown* |
| CPU | *Unknown* |
| Memory | *Yes (idk)* |
| Storage | 1TB |
| Bandwidth | 3TB |

<br>

---

## NE PoP

This PoP is actually my home. I often go back and forth on if I should call it a true "PoP" or not since 

*I'm working on getting info past this*
