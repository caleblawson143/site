# Build stage
FROM node:18-bullseye AS builder

WORKDIR /app

# Copy package files (including package-lock.json)
COPY package*.json ./

  # Install dependencies (align with V0 behavior)
  RUN npm install --legacy-peer-deps --no-audit --no-fund

# Copy source code
COPY . .

# Ensure public directory exists so copy in runner stage doesn't fail
RUN mkdir -p public

# Build the Next.js app with standalone output
RUN npm run build

# Production stage
FROM node:18-bullseye AS runner

WORKDIR /app

  ENV NODE_ENV=production
  ENV NEXT_TELEMETRY_DISABLED=1
  ENV NPM_CONFIG_FUND=false
  ENV NPM_CONFIG_AUDIT=false

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone build
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]