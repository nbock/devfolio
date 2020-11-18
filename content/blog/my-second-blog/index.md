---
title: One small step for Kerbal...
date: '2020-11-17T12:00:00.00Z'
description: 'A library of scripts for robotic missions in space using the Kerbal Space Program simulator'
---

## Journey to the Mun and beyond

Using the space simulator, [Kerbal Space Program](https://en.wikipedia.org/wiki/Kerbal_Space_Program), and a modification called [Kerbal Operating System](https://ksp-kos.github.io/KOS/), I created an autopilot mission that launches from the "Earth" (called Kerbin), establishes a circular orbit, calculates and executes a Hohmann Transfer, executes a capture burn around the moon (called Mun), and finally executes a burn to bring the ship to a stop as it makes contact with the Mun.

Check out a video of the mission by clicking below!

[![KSP mission](https://img.youtube.com/vi/sAL-SGgFORs/0.jpg)](https://youtu.be/sAL-SGgFORs "Mun mission!")


## Library of space missions
I'm developing a [library](https://github.com/nbock/kerbal-missions) for Kerbal Space Program missions, feel free to extend it if you're interested! Built into each mission are some functions for orbital transfers and orbital mechanics in general. A good example of the type of calculation that needs to be done during a mission is a [Hohmann Transfer](https://en.wikipedia.org/wiki/Hohmann_transfer_orbit), which calculates a one-time transfer burn between one celestial body and another body's sphere of influence.
