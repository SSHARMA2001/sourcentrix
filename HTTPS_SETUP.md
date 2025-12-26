# HTTPS Setup Guide for SOURCENTRIX

This guide explains how to set up HTTPS (SSL/TLS) for your website at **sourcentrix.in**.

## Development (Local)

HTTPS is already configured in `vite.config.ts`. When you run:

```bash
npm run dev
```

The development server will start with HTTPS enabled at `https://localhost:5173`

**Note:** Your browser may show a security warning because it's a self-signed certificate. This is normal for local development. Click "Advanced" and "Proceed to localhost" to continue.

## Production Deployment

### Option 1: Using a Hosting Provider with Free SSL

Most modern hosting providers offer free SSL certificates:

#### **Vercel** (Recommended for React apps)
1. Deploy your site to Vercel
2. SSL is automatically enabled
3. Your site will be available at `https://sourcentrix.vercel.app`
4. Add custom domain `sourcentrix.in` in Vercel dashboard
5. SSL certificate is automatically provisioned

#### **Netlify**
1. Deploy to Netlify
2. SSL is automatically enabled
3. Add custom domain in Netlify dashboard
4. SSL certificate is automatically provisioned

#### **Cloudflare Pages**
1. Deploy to Cloudflare Pages
2. SSL is automatically enabled
3. Add custom domain in Cloudflare dashboard
4. SSL certificate is automatically provisioned

### Option 2: Using Let's Encrypt (Free SSL)

If you're hosting on your own server:

1. **Install Certbot:**
   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. **Get SSL Certificate:**
   ```bash
   sudo certbot --nginx -d sourcentrix.in -d www.sourcentrix.in
   ```

3. **Auto-renewal (already configured):**
   Certbot automatically sets up renewal. Test with:
   ```bash
   sudo certbot renew --dry-run
   ```

### Option 3: Using Cloudflare (Free SSL + CDN)

1. Sign up for Cloudflare (free plan)
2. Add your domain `sourcentrix.in`
3. Update your domain's nameservers to Cloudflare
4. Enable "SSL/TLS" → "Full" mode
5. SSL is automatically enabled

## Nginx Configuration (If using your own server)

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name sourcentrix.in www.sourcentrix.in;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name sourcentrix.in www.sourcentrix.in;

    ssl_certificate /etc/letsencrypt/live/sourcentrix.in/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sourcentrix.in/privkey.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    root /var/www/sourcentrix/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Apache Configuration (Alternative)

```apache
<VirtualHost *:80>
    ServerName sourcentrix.in
    ServerAlias www.sourcentrix.in
    Redirect permanent / https://sourcentrix.in/
</VirtualHost>

<VirtualHost *:443>
    ServerName sourcentrix.in
    ServerAlias www.sourcentrix.in
    
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/sourcentrix.in/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/sourcentrix.in/privkey.pem
    
    DocumentRoot /var/www/sourcentrix/dist
    
    <Directory /var/www/sourcentrix/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    # React Router support
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
</VirtualHost>
```

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder, ready for HTTPS deployment.

## Security Best Practices

1. **Always use HTTPS** - Never serve your site over HTTP in production
2. **Enable HSTS** - Add `Strict-Transport-Security` header
3. **Keep certificates updated** - Let's Encrypt certificates expire every 90 days (auto-renewal recommended)
4. **Use strong SSL/TLS protocols** - Disable TLS 1.0 and 1.1, use TLS 1.2+
5. **Enable security headers** - X-Frame-Options, X-Content-Type-Options, etc.

## Testing HTTPS

After deployment, test your HTTPS setup:

1. Visit `https://sourcentrix.in`
2. Check SSL certificate: https://www.ssllabs.com/ssltest/analyze.html?d=sourcentrix.in
3. Verify security headers: https://securityheaders.com/?q=https://sourcentrix.in

## Troubleshooting

### Certificate not working
- Ensure DNS points to your server
- Check firewall allows port 443
- Verify certificate files exist and have correct permissions

### Mixed content warnings
- Ensure all resources (images, scripts, stylesheets) use HTTPS URLs
- Check browser console for mixed content errors

### Redirect loops
- Ensure both HTTP and HTTPS are properly configured
- Check that redirects don't create infinite loops

## Support

For issues with SSL setup, contact your hosting provider or refer to:
- Let's Encrypt: https://letsencrypt.org/docs/
- Certbot: https://certbot.eff.org/

