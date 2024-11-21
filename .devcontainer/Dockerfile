FROM node:22.11.0

RUN npm install -g pnpm

WORKDIR /workspace

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]
