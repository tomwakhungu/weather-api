# Weather API - Docker Optimized 🌤️

# Weather API - Docker Optimized 🌤️

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

A simple Express.js weather API demonstrating Docker optimization techniques including multi-stage builds.

## Features

- ✅ RESTful API with Express.js
- ✅ Multi-stage Docker builds (88% size reduction!)
- ✅ Optimized layer caching
- ✅ Alpine-based images for security
- ✅ Non-root user implementation
- ✅ Health check endpoint

## Quick Start

### Prerequisites
- Docker
- Docker Compose

### Run the Application
```bash
# Clone the repository
git clone <your-repo-url>
cd weather-api

# Start with Docker Compose
docker-compose up --build

# Or build and run manually
docker build -t weather-api .
docker run -p 3000:3000 weather-api
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | API information |
| `/health` | GET | Health check |
| `/weather` | GET | Get all weather data |
| `/weather/:city` | GET | Get weather for specific city |

## Testing
```bash
# Home
curl http://localhost:3000

# All weather data
curl http://localhost:3000/weather

# Specific city
curl http://localhost:3000/weather/nairobi
```

## Docker Optimization Comparison

| Version | Size | Description |
|---------|------|-------------|
| Dockerfile.bad | ~1GB | Unoptimized |
| Dockerfile.better | ~180MB | Improved with Alpine |
| Dockerfile | ~120MB | Multi-stage build |

### Build all versions to compare:
```bash
docker build -f Dockerfile.bad -t weather-api:bad .
docker build -f Dockerfile.better -t weather-api:better .
docker build -t weather-api:best .
docker images | grep weather-api
```

## Project Structure
```
weather-api/
├── app.js              # Express application
├── package.json        # Dependencies
├── Dockerfile          # Optimized multi-stage build
├── Dockerfile.bad      # Unoptimized (for comparison)
├── Dockerfile.better   # Improved version
├── .dockerignore       # Docker ignore rules
└── docker-compose.yml  # Docker Compose config
```

## Learning Points

- **Multi-stage builds** reduce image size by 88%
- **Layer caching** speeds up rebuilds
- **Alpine images** provide security and size benefits
- **Proper file ordering** maximizes cache efficiency

## License

MIT

## Author

Tom Wakhungu
