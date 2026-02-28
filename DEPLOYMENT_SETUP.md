# 🚀 GitHub Pages Deployment Setup

This guide will help you complete the setup for automatic deployment of your Docusaurus site to GitHub Pages.

## ✅ What's Already Configured

- ✅ **GitHub Actions Workflow**: Created at `.github/workflows/deploy.yml`
- ✅ **Docusaurus Configuration**: Updated `docusaurus.config.ts` with GitHub Pages settings
- ✅ **Build Scripts**: Package.json already has the necessary build commands

## 🔧 Required Configuration Steps

### 1. Update GitHub Repository Information

Replace the placeholder values in `docusaurus.config.ts`:

```typescript
// Replace YOUR_GITHUB_USERNAME with your actual GitHub username or organization
url: 'https://ximxim.github.io',
organizationName: 'ximxim',
editUrl: 'https://github.com/ximxim/WorkflowyOS-Docs/tree/main/',
```

**Example:** If your GitHub username is `ximxim`, update these to:
```typescript
url: 'https://ximxim.github.io',
organizationName: 'ximxim',
editUrl: 'https://github.com/ximxim/WorkflowyOS-Docs/tree/main/',
```

### 2. Enable GitHub Pages in Your Repository

1. **Push your changes to GitHub** (if you haven't already)
2. **Go to your repository settings**:
   - Navigate to `https://github.com/ximxim/WorkflowyOS-Docs/settings`
3. **Configure GitHub Pages**:
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select **"GitHub Actions"**
   - Save the settings

### 3. Verify Repository Permissions

Ensure your repository has the correct permissions for GitHub Actions:

1. Go to **Settings > Actions > General**
2. Under "Workflow permissions", select:
   - **"Read and write permissions"**
   - ✅ **"Allow GitHub Actions to create and approve pull requests"**

## 🏗️ How the Deployment Works

1. **Automatic Trigger**: The workflow runs on every push to the `main` branch
2. **Build Process**: 
   - Installs dependencies with `npm ci`
   - Builds the site with `npm run build`
   - Uploads the `build` folder as a GitHub Pages artifact
3. **Deployment**: GitHub Pages serves the built site from the artifact

## 🌍 Accessing Your Site

After successful deployment, your site will be available at:
```
https://ximxim.github.io/WorkflowyOS-Docs/
```

## 🔍 Monitoring Deployments

- **GitHub Actions Tab**: Monitor workflow runs at `https://github.com/ximxim/WorkflowyOS-Docs/actions`
- **Pages Settings**: Check deployment status in repository Settings > Pages
- **Workflow Badge**: Add this to your README to show deployment status:
  ```markdown
  ![Deploy to GitHub Pages](https://github.com/ximxim/WorkflowyOS-Docs/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
  ```

## 🛠️ Troubleshooting

### Common Issues and Solutions

1. **404 Error on Site**: 
   - Verify the `baseUrl` in `docusaurus.config.ts` matches your repository name
   - Ensure GitHub Pages source is set to "GitHub Actions"

2. **Build Failures**:
   - Check the Actions tab for error details
   - Ensure all dependencies are properly listed in `package.json`
   - Verify Node.js version compatibility (workflow uses Node 18)

3. **Permission Errors**:
   - Check repository Settings > Actions > General for proper permissions
   - Ensure the workflow file has correct YAML syntax

4. **Custom Domain** (optional):
   - Add a `CNAME` file to the `static` directory with your domain
   - Configure DNS records as per GitHub Pages documentation

## 📝 Optional Customizations

### Custom Deployment Branch
To deploy from a different branch, modify the workflow trigger:
```yaml
on:
  push:
    branches:
      - your-branch-name  # Change this
```

### Deployment Environment Variables
If you need environment-specific configurations, add them to the workflow:
```yaml
- name: Build website
  run: npm run build
  env:
    NODE_ENV: production
    CUSTOM_VAR: ${{ secrets.CUSTOM_VAR }}
```

## ✨ Next Steps

1. **Update the placeholder values** in `docusaurus.config.ts`
2. **Push your changes** to GitHub
3. **Enable GitHub Pages** in repository settings
4. **Monitor the first deployment** in the Actions tab
5. **Access your live site** at the generated URL

Your Docusaurus documentation site will now automatically deploy to GitHub Pages whenever you push changes to the main branch! 🎉 