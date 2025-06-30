---
title: "YouTube Party - Real-Time Party Game"
description: "A real-time multiplayer party game built with Vue.js and WebSockets, where players guess YouTube video details in a fun, competitive environment."
image: "/images/projects/youtube-party.jpg"
technologies: ["Vue.js", "Node.js", "Socket.io", "Express", "YouTube API", "Tailwind CSS"]
githubUrl: "https://github.com/misaelabanto/youtube-party"
liveUrl: "https://youtube-party.app"
featured: true
startDate: 2020-08-01
endDate: 2020-12-01
status: "completed"
---

## Project Overview

YouTube Party is a real-time multiplayer party game that brings friends together through the universal language of YouTube videos. Players join rooms and compete to guess video titles, creators, and other details in a fast-paced, entertaining format.

## Game Features

- **Real-Time Multiplayer**: Up to 8 players per room with live synchronization
- **Multiple Game Modes**: Title guessing, creator identification, and view count estimation
- **Smart Video Selection**: Algorithm that selects engaging videos across different categories
- **Live Scoring**: Real-time leaderboard updates with animated score changes
- **Room Management**: Easy room creation and joining with shareable codes

## Technical Implementation

### Frontend Architecture
Built with Vue.js 3 using the Composition API for better state management and reactivity. The UI is designed to be responsive and engaging with smooth animations and real-time updates.

### Real-Time Communication
Implemented using Socket.io for bidirectional communication between clients and server. The system handles:
- Room management and player connections
- Game state synchronization
- Real-time scoring and leaderboard updates
- Chat functionality during games

### YouTube Integration
Integrated with the YouTube Data API to:
- Fetch video metadata and statistics
- Select appropriate videos based on view count and category
- Ensure video availability and quality

## Technical Challenges

### State Synchronization
Ensuring all players see the same game state simultaneously required careful management of WebSocket events and client-side state updates.

### Video Selection Algorithm
Developed an algorithm that selects engaging videos while avoiding inappropriate content, balancing between popular and obscure videos for optimal gameplay.

### Performance Optimization
Implemented efficient data structures and caching strategies to handle multiple concurrent games without performance degradation.

## Impact and Reception

- **User Engagement**: Average session time of 45 minutes
- **Viral Growth**: Shared organically across social media platforms
- **Community**: Built a small but dedicated community of regular players
- **Learning**: Gained valuable experience in real-time web applications

## Future Enhancements

- Custom playlist support
- Tournament mode with brackets
- Mobile app development
- Integration with streaming platforms