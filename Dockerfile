# Use the official Playwright image with all dependencies
FROM mcr.microsoft.com/playwright:v1.43.1-jammy

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other project files
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Run tests on container start (can modify this as needed)
CMD ["npx", "playwright", "test", "--project=chromium"]
