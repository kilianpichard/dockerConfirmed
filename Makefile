# Makefile pour gérer les environnements Docker Compose

# Lancer l'environnement de développement
dev:
	docker-compose -f docker-compose.dev.yml up -d

# Arrêter l'environnement de développement
dev-stop:
	docker-compose -f docker-compose.dev.yml down

# Lancer l'environnement de production
prod:
	docker-compose -f docker-compose.prod.yml up -d

# Arrêter l'environnement de production
prod-stop:
	docker-compose -f docker-compose.prod.yml down

# Afficher ce message d'aide
help:
	@echo "Utilisez 'make dev' pour démarrer l'environnement de développement"
	@echo "Utilisez 'make dev-stop' pour arrêter l'environnement de développement"
	@echo "Utilisez 'make prod' pour démarrer l'environnement de production"
	@echo "Utilisez 'make prod-stop' pour arrêter l'environnement de production"
