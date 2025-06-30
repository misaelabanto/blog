---
title: "CovidMap - Pandemic Dashboard"
description: "A comprehensive COVID-19 tracking dashboard that provided real-time data visualization and analytics, serving thousands of users across Latin America during the pandemic."
image: "/images/projects/covid-map.jpg"
technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express", "Mapbox", "Chart.js", "AWS"]
githubUrl: "https://github.com/misaelabanto/covid-map"
liveUrl: ""
featured: true
startDate: 2020-03-01
endDate: 2021-06-01
status: "archived"
---

## Project Overview

CovidMap was a public service project I built during the early days of the COVID-19 pandemic to help people in Latin America access reliable, up-to-date information about the pandemic's spread and impact in their regions.

## Key Features

- **Real-Time Data Visualization**: Interactive maps showing case counts, deaths, and recovery rates
- **Regional Analytics**: Detailed breakdowns by country, state, and city
- **Trend Analysis**: Historical data with trend lines and growth rate calculations
- **Mobile-Optimized**: Responsive design for mobile users across different devices
- **Multi-Language Support**: Spanish, Portuguese, and English interfaces

## Data Sources and Integration

### Data Pipeline
Built a robust data pipeline that aggregated information from multiple sources:
- Official government health departments
- WHO and PAHO databases
- Johns Hopkins CSSE data repository
- Local health authorities APIs

### Data Processing
Implemented automated data validation and cleaning processes to ensure accuracy:
- Cross-reference validation between multiple sources
- Anomaly detection for unusual data points
- Historical data consistency checks
- Real-time data updates every 15 minutes

## Technical Architecture

### Frontend
- **React**: Component-based architecture for maintainable UI
- **D3.js**: Custom data visualizations and interactive charts
- **Mapbox**: High-performance mapping with custom styling
- **Responsive Design**: Mobile-first approach with progressive enhancement

### Backend
- **Node.js/Express**: RESTful API for data serving
- **MongoDB**: Document-based storage for flexible data structures
- **Caching Layer**: Redis for high-performance data caching
- **Scheduled Jobs**: Automated data fetching and processing

### Infrastructure
- **AWS EC2**: Scalable compute instances
- **CloudFront**: Global CDN for fast content delivery
- **Route 53**: DNS management and health checks
- **SSL/TLS**: Secure data transmission

## Impact and Usage

### Reach
- **Daily Users**: 50,000+ daily active users at peak
- **Geographic Spread**: Users from 15+ Latin American countries
- **Media Coverage**: Featured in local news outlets and social media
- **Government Recognition**: Acknowledged by health authorities as a reliable source

### Community Contribution
- **Open Source**: Made the codebase publicly available for other developers
- **Data Sharing**: Provided APIs for other organizations and researchers
- **Educational**: Helped people understand pandemic data and trends

## Technical Challenges

### Scalability
Handled massive traffic spikes during major pandemic milestones, requiring rapid scaling of infrastructure and optimization of data delivery.

### Data Quality
Managed inconsistent data formats and reporting standards across different countries and regions, implementing robust validation and normalization processes.

### Performance
Optimized for users with slower internet connections common in the region, implementing progressive loading and efficient caching strategies.

## Lessons Learned

- **Public Service Technology**: Gained experience building technology for social good
- **Crisis Response**: Learned to rapidly deploy and scale applications under pressure
- **Data Reliability**: Developed expertise in handling sensitive, time-critical data
- **International Collaboration**: Worked with health organizations across multiple countries

## Project Sunset

The project was gradually sunset as official government dashboards became more comprehensive and the acute phase of the pandemic subsided. The codebase remains available as a reference for future public health technology initiatives.