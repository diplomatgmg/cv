FROM oven/bun:1.2.15-alpine AS deps

ENV PATH="/app/node_modules/.bin:$PATH"

WORKDIR /app/frontend

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile


# ============================ #
#         DEVELOPMENT          #
# ============================ #
FROM deps AS development

COPY --from=deps /app/frontend/node_modules ./node_modules

CMD ["bun", "dev"]


# ============================ #
#            BUILD             #
# ============================ #
FROM deps AS build

COPY . .

RUN bun run build


# ============================ #
#          PRODUCTION          #
# ============================ #
FROM nginx:1.28.0-alpine AS production

COPY --from=build /app/frontend/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
