# Deployment Guide for AgentPay Documentation

## 🚀 Quick Deployment to Replit

### Step 1: Create New Replit

1. Go to [replit.com](https://replit.com)
2. Click "Create Repl"
3. Choose "Import from GitHub" or "Upload folder"
4. Upload the `docs_site` folder contents
5. Name it: `agentpay-docs`

### Step 2: Configure for Deployment

The repository already includes the necessary configuration files:

- `.replit` - Replit runtime configuration
- `replit.nix` - Nix dependencies (Node.js)
- `package.json` - With proper host binding

### Step 3: Deploy

1. In your Replit, click the "Deploy" tab
2. Choose "Autoscale" deployment
3. The URL will be: `https://agentpay-docs.replit.app`

### Step 4: Update Main App

The main AgentPay application has already been updated to link to:
`https://agentpay-docs.replit.app`

## 🛠️ Manual Deployment Steps

If you need to deploy manually or to a different platform:

### Build the Documentation

```bash
cd docs_site
npm install
npm run build
```

### Deploy to Static Hosting

The `build/` folder contains the static website that can be deployed to:
- Netlify
- Vercel  
- GitHub Pages
- Any static hosting service

### Update URLs

If deploying to a different domain, update these files:

1. `docs_site/docusaurus.config.js` - Change the `url` field
2. `client/src/components/navigation.tsx` - Update documentation links
3. `client/src/components/hero-section.tsx` - Update hero documentation button

## 🔗 Current Links

The main application links to documentation in these places:

1. **Navigation Menu**: Top-right "Documentation" button
2. **Hero Section**: "Documentation" button in the main hero
3. **Footer**: Documentation links

All links open in new tabs (`target="_blank"`) for better user experience.

## 🎯 Benefits of Separate Deployment

- ✅ **Independent Updates**: Update docs without redeploying main app
- ✅ **Fast Deploys**: Documentation changes deploy in ~1-2 minutes  
- ✅ **Better Performance**: Dedicated hosting for documentation
- ✅ **SEO Optimized**: Better indexing for documentation content
- ✅ **Version Control**: Clear separation of concerns

## 🚨 Important Notes

1. **URL Consistency**: Ensure the documentation URL in the main app matches your deployment
2. **HTTPS Required**: Use HTTPS URLs for external links
3. **Cross-Origin**: External links work without CORS issues
4. **Mobile Responsive**: Documentation is fully responsive

## 🎨 Theme Consistency

The documentation theme is designed to match the main AgentPay application:
- Same purple-to-pink gradients
- Glass morphism effects
- Hidden scrollbars
- Consistent typography and spacing

## 📈 Analytics & Monitoring

Consider adding analytics to track documentation usage:
- Google Analytics
- Replit Analytics (built-in)
- User feedback forms