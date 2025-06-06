.PHONY: help up stop down pull deps lint lint-fix

FRONTEND_DIR = frontend

help:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

up: ## compose up
	@docker compose up --wait -d

stop: ## compose stop
	@docker compose stop

down: ## compose down
	@docker compose down

pull: ## compose pull
	@docker compose pull

deps: ## Установка зависимостей
	@cd $(FRONTEND_DIR) && bun i --frozen-lockfile

lint: ## Запуск линтеров без правок
	@cd $(FRONTEND_DIR) && bun lint

lint-fix: ## Запуск линтеров с правками
	@cd $(FRONTEND_DIR) && bun lint-fix
