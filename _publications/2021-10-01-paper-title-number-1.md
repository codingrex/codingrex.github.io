---
title: "Multi-Agent Reinforcement Learning for Visibility-based Persistent Monitoring"
collection: publications
permalink: /publication/2021-10-01-paper-title-number-1
venue: 'Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)'
paperurl: 'http://raaslab.org/pubs/chen2021multi.pdf'

---
[Download paper here](http://raaslab.org/pubs/chen2021multi.pdf) <br />
[Watch presentation](https://www.youtube.com/watch?v=KpRwpBaBrGQ) <br/>
**Abstract:**
The Visibility-based Persistent Monitoring (VPM) problem seeks to find a set of trajectories (or controllers) for robots to persistently monitor a changing environment. Each robot has a sensor, such as a camera, with a limited field-of-view that is obstructed by obstacles in the environment. The robots may need to coordinate with each other to ensure no point in the environment is left unmonitored for long periods of time. We model the problem such that there is a penalty that accrues every time step if a point is left unmonitored. However, the dynamics of the penalty are unknown to us. We present a Multi-Agent Reinforcement Learning (MARL) algorithm for the VPM problem. Specifically, we present a Multi-Agent Graph Attention Proximal Policy Optimization (MA-G-PPO) algorithm that takes as input the local observations of all agents combined with a low resolution global map to learn a policy for each agent. The graph attention allows agents to share their information with others leading to an effective joint policy. Our main focus is to understand how effective MARL is for the VPM problem. We investigate five research questions with this broader goal. We find that MA-G-PPO is able to learn a better policy than the non-RL baseline in most cases, the effectiveness depends on agents sharing information with each other, and the policy learnt shows emergent behavior for the agents.


**Jingxi Chen**, Amrish Baskaran, Zhongshun Zhang, and Pratap Tokekar (2021). &quot;Multi-Agent Reinforcement Learning for Visibility-based Persistent Monitoring&quot; <br /><i>Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2021</i><br /> 