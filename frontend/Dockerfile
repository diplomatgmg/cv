FROM oven/bun:1.2.15-alpine AS base

ENV PATH="/app/node_modules/.bin:$PATH"

WORKDIR /app

COPY ./package.json ./bun.lock ./


# ============================ #
#        DEPS INSTALLING       #
# ============================ #
FROM base AS deps-dev

RUN --mount=type=cache,target=/app/.cache/bun \
    bun install --frozen-lockfile


# ============================ #
#        DEVELOPMENT           #
# ============================ #
FROM deps-dev AS development

COPY . .

CMD ["bun", "run", "dev"]
