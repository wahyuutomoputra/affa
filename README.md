# affa

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

**Catatan:** Untuk development, pastikan backend API dapat diakses langsung dari browser (tidak ada CORS issues), atau set `VITE_API_URL` di file `.env.local` dengan URL backend Anda.

### Compile and Minify for Production

```sh
npm run build
```

## Deployment Production dengan Docker

Proyek ini dapat di-deploy ke production menggunakan Docker. Berikut adalah langkah-langkahnya:

### Prasyarat

- Docker Engine versi 20.10 atau lebih baru
- Docker Compose versi 2.0 atau lebih baru

### Konfigurasi API URL

**PENTING:** Sebelum deploy, pastikan untuk mengkonfigurasi URL API backend Anda.

#### Untuk Development:
1. Copy file `env.example` ke `.env.local`:
   ```bash
   cp env.example .env.local
   ```
2. Edit file `.env.local` dan ganti `https://your-api-url.com` dengan URL API backend Anda yang sebenarnya:
   ```bash
   VITE_API_URL=https://your-api-url.com
   ```
3. **Catatan:** Jika tidak set `VITE_API_URL`, aplikasi akan menggunakan `/api` sebagai baseURL. Pastikan backend Anda dapat diakses langsung dari browser (tidak ada CORS issues) atau gunakan Nginx proxy.

#### Untuk Production (Docker):
1. Copy file `env.example` ke `.env`:
   ```bash
   cp env.example .env
   ```
2. Edit file `.env` dan ganti `https://your-api-url.com` dengan URL API backend Anda yang sebenarnya:
   ```bash
   VITE_API_URL=https://your-api-url.com
   ```
3. Atau set environment variable saat menjalankan docker-compose:
   ```bash
   VITE_API_URL=https://your-api-url.com docker-compose up -d
   ```

**Catatan:** Jika tidak mengatur `VITE_API_URL`, aplikasi akan menggunakan URL default yang mungkin tidak sesuai dengan backend Anda.

### Cara Deploy

#### 1. Build dan Jalankan dengan Docker Compose

Cara termudah untuk deploy adalah menggunakan Docker Compose:

```bash
# Pastikan sudah membuat file .env dengan VITE_API_URL
# Atau set environment variable langsung:
export VITE_API_URL=https://your-api-url.com

# Build dan jalankan container
docker-compose up -d

# Melihat logs
docker-compose logs -f

# Menghentikan container
docker-compose down
```

Aplikasi akan berjalan di `http://localhost:80`

#### 2. Build dan Jalankan dengan Docker Manual

Jika ingin menggunakan Docker secara manual:

```bash
# Build image
docker build -t affa-app .

# Jalankan container dengan environment variable
docker run -d -p 80:80 \
  -e VITE_API_URL=https://your-api-url.com \
  --name affa-app \
  --restart unless-stopped \
  affa-app
```

#### 3. Deploy ke Server Production

**Langkah-langkah deploy ke server:**

1. **Siapkan server dengan Docker:**
   ```bash
   # Install Docker (jika belum terinstall)
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   
   # Install Docker Compose
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

2. **Clone repository ke server:**
   ```bash
   git clone <repository-url>
   cd affa
   ```

3. **Buat file `.env` dengan URL API Anda:**
   ```bash
   echo "VITE_API_URL=https://your-api-url.com" > .env
   ```

4. **Build dan jalankan:**
   ```bash
   docker-compose up -d --build
   ```

5. **Verifikasi aplikasi berjalan:**
   ```bash
   docker-compose ps
   curl http://localhost
   ```

#### 4. Konfigurasi Nginx untuk Domain (Opsional)

Jika ingin menggunakan domain custom, konfigurasi reverse proxy dengan Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### 5. Menggunakan HTTPS dengan Let's Encrypt (Opsional)

Untuk menambahkan SSL/TLS:

```bash
# Install certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot --nginx -d yourdomain.com
```

### Perintah Docker yang Berguna

```bash
# Melihat container yang berjalan
docker ps

# Melihat logs
docker logs affa-app
docker logs -f affa-app  # follow logs

# Restart container
docker restart affa-app

# Stop container
docker stop affa-app

# Start container
docker start affa-app

# Hapus container
docker rm affa-app

# Hapus image
docker rmi affa-app

# Masuk ke dalam container
docker exec -it affa-app sh
```

### Troubleshooting

**Container tidak bisa start:**
```bash
# Cek logs untuk error
docker-compose logs

# Cek apakah port 80 sudah digunakan
sudo lsof -i :80
```

**Build gagal:**
```bash
# Hapus cache dan rebuild
docker-compose build --no-cache
```

**Update aplikasi:**
```bash
# Pull perubahan terbaru
git pull

# Rebuild dan restart
docker-compose up -d --build
```

### Struktur File Docker

- `Dockerfile` - Konfigurasi untuk build image Docker
- `docker-compose.yml` - Konfigurasi untuk menjalankan container
- `nginx.conf.template` - Template konfigurasi Nginx (menggunakan environment variable)
- `.dockerignore` - File yang diabaikan saat build Docker
- `.env` - File environment variable untuk production (buat sendiri dengan `VITE_API_URL`)

### Catatan Penting

- Pastikan port 80 tidak digunakan oleh aplikasi lain
- Untuk production, pertimbangkan menggunakan reverse proxy (Nginx/Caddy) di depan container
- Konfigurasi environment variables dapat ditambahkan di `docker-compose.yml` jika diperlukan
- Untuk skala besar, pertimbangkan menggunakan orchestration tools seperti Kubernetes
