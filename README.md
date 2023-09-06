# 🐳 My Dockerized Application

This project uses Docker 🐳 to manage both development and production environments. We utilize two separate environment files for each—`.env.dev` for development and `.env.prod` for production. A `Makefile` is also included to simplify Docker commands.

## 🛠 Prerequisites
- Docker 🐳
- Docker Compose 📦

## 🚀 Makefile Commands

### 🔨 Start Development Environment

```bash
make dev
```

This fires up the development environment using the `.env.dev` file for environment variables.

### 🛑 Stop Development Environment

```bash
make dev-stop
```

This stops the development environment.

### 🚀 Start Production Environment

```bash
make prod
```

This fires up the production environment using the `.env.prod` file for environment variables.

### 🛑 Stop Production Environment

```bash
make prod-stop
```

This stops the production environment.

### 🆘 Display Help for Makefile Commands

```bash
make help
```

This displays a help guide for all available Makefile commands.

## 🌍 Environment Files

### 🌱 .env.dev

Environment file for development settings.

Example:

```env
NODE_ENV=development
MONGO_URI=mongodb://mongo:27017/docker-confirmed
SERVER_PORT=8000
REACT_APP_SERVER_URL=http://localhost:${SERVER_PORT}
```

### 🏭 .env.prod

Environment file for production settings.

Example:

```env
NODE_ENV=production
MONGO_URI=mongodb://mongo:27017/docker-confirmed
SERVER_PORT=3000
REACT_APP_SERVER_URL=http://localhost:${SERVER_PORT}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork it ( https://github.com/kilianpichard/dockerConfirmed/fork )
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## 🙋‍♀️🙋‍♂️ Credits

List the collaborators, authors, or any acknowledgements you wish to add.
