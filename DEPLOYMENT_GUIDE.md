# Complete Deployment Guide - sujitlochan.tech

## 🔍 Tech Stack Analysis

**Your Portfolio Uses:**
- **Framework:** React.js (Create React App)
- **Build Tool:** react-scripts
- **Build Output:** `/build` directory (static files)
- **Dependencies:** React 17.0.2, Bootstrap, React Router, etc.

---

## 🎯 Recommended Hosting: **Vercel**

**Why Vercel is the BEST choice for you:**

✅ **100% FREE for students** (and everyone - generous free tier)  
✅ **Automatic React detection** - zero configuration needed  
✅ **Automatic SSL certificates** - HTTPS enabled by default  
✅ **Custom domain support** - perfect for sujitlochan.tech  
✅ **GitHub integration** - deploy on every push  
✅ **Global CDN** - fast loading worldwide  
✅ **One-click deployment** - simplest process  

**Vercel vs Others:**
- **Netlify:** Also great, but Vercel has better React integration
- **GitHub Pages:** Free but needs extra config for React Router, no automatic SSL for custom domains without CNAME

**Verdict:** Vercel wins for React apps. No brainer.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- [ ] GitHub account (free)
- [ ] Code pushed to a GitHub repository
- [ ] Domain name: sujitlochan.tech
- [ ] Access to your domain's DNS settings (where you bought the domain)

---

## 🚀 PART 1: Deploy to Vercel

### Step 1: Push Your Code to GitHub

**1.1.** Open PowerShell/Terminal in your project folder:
```bash
cd C:\Users\lopch\OneDrive\Desktop\myWebsite
```

**1.2.** Initialize Git (if not already done):
```bash
git init
```

**1.3.** Check if you have a remote repository:
```bash
git remote -v
```

**1.4.** If no remote exists, create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it: `portfolio-website` (or any name you like)
   - Don't initialize with README
   - Click "Create repository"

**1.5.** Add all files and commit:
```bash
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
```

**1.6.** Connect to GitHub and push (replace YOUR_USERNAME and REPO_NAME):
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/Sujitlop/portfolio-website.git
git push -u origin main
```

---

### Step 2: Sign Up for Vercel

**2.1.** Go to https://vercel.com/signup

**2.2.** Click **"Continue with GitHub"** (recommended - easiest integration)

**2.3.** Authorize Vercel to access your GitHub account

**2.4.** Complete the signup process

---

### Step 3: Deploy Your Project

**3.1.** Once logged in, click the **"Add New..."** button → **"Project"**

**3.2.** You'll see your GitHub repositories. Click **"Import"** next to your portfolio repository

**3.3.** Vercel will auto-detect your React app. Verify these settings:

   - **Framework Preset:** `Create React App` (auto-detected)
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `build` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

**3.4.** Click **"Deploy"** (don't add environment variables for now - you don't need any)

**3.5.** Wait 2-3 minutes. You'll see a progress bar.

**3.6.** Once complete, you'll see:
   - ✅ "Congratulations! Your project has been deployed"
   - A URL like: `https://your-project-name.vercel.app`

**3.7.** Click the URL to verify your site is live! 🎉

---

### Step 4: Verify Deployment

**4.1.** Click on your deployed URL (e.g., `https://your-project-name.vercel.app`)

**4.2.** Check that:
   - [ ] Home page loads correctly
   - [ ] All images display
   - [ ] Navigation works
   - [ ] Projects section loads
   - [ ] Mobile responsive (resize browser)

**4.3.** If anything looks wrong, check the build logs:
   - In Vercel dashboard → Your project → "Deployments" tab
   - Click on the latest deployment → "Build Logs"

**Common Build Issues & Fixes:**
- **Build fails with "module not found":** Run `npm install` locally, commit `package-lock.json`
- **Images not loading:** Check paths - use `/Images/filename.png` not `../Images/`
- **404 on refresh:** Add `vercel.json` (we'll do this after domain setup)

---

## 🌐 PART 2: Connect Custom Domain (sujitlochan.tech)

### Step 5: Add Domain in Vercel Dashboard

**5.1.** In Vercel dashboard, go to your project

**5.2.** Click on the **"Settings"** tab

**5.3.** Click on **"Domains"** in the left sidebar

**5.4.** In the "Domains" section, type: `sujitlochan.tech`

**5.5.** Click **"Add"**

**5.6.** Vercel will show you DNS configuration options. You'll see something like:

```
Option 1: CNAME Record (Recommended)
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Option 2: A Record
Type: A
Name: @
Value: 76.76.21.21
```

**📝 IMPORTANT:** Write down the exact values Vercel gives you. They might differ slightly.

---

### Step 6: Configure DNS Records at Your Domain Provider

**6.1.** Identify your domain registrar:
   - Where did you buy `sujitlochan.tech`?
   - Common providers: GoDaddy, Namecheap, Cloudflare, Google Domains, etc.

**6.2.** Log in to your domain provider's dashboard

**6.3.** Find "DNS Management" or "DNS Settings" (location varies by provider):
   - **GoDaddy:** Domain → DNS → Manage Zones
   - **Namecheap:** Domain List → Manage → Advanced DNS
   - **Cloudflare:** Select domain → DNS → Records
   - **Google Domains:** DNS → Custom records

---

### Step 7: Add DNS Records

**You need to add ONE of these (Vercel will tell you which):**

#### Option A: CNAME Record (Recommended - Easier)

**7.1.** Click "Add Record" or "Create Record"

**7.2.** Fill in:
   - **Type:** `CNAME`
   - **Name/Host:** `@` (or leave blank, or `sujitlochan.tech` - depends on provider)
     - Some providers use `@` for root domain
     - Some use blank/empty
     - Some need the full domain name
   - **Value/Target/Points to:** `cname.vercel-dns.com` (or what Vercel shows you)
   - **TTL:** `3600` (or "Auto")

**7.3.** Click "Save" or "Add Record"

**⚠️ IMPORTANT Notes:**
- If your provider doesn't support CNAME for root domain (`@`), use **Option B** (A Record)
- Some providers (like Namecheap) require CNAME to point to a subdomain, not root

---

#### Option B: A Record (Alternative - More Reliable)

**If CNAME doesn't work or provider doesn't support it:**

**7.1.** Click "Add Record"

**7.2.** Fill in:
   - **Type:** `A`
   - **Name/Host:** `@` (or leave blank - root domain)
   - **Value/Points to/IP Address:** `76.76.21.21` (verify with Vercel - they may give you different IPs)
   - **TTL:** `3600` (or "Auto")

**7.3.** Click "Save"

**7.4.** Check Vercel - it might show you 4 different A record IPs. If so, create 4 separate A records:
   ```
   A    @    76.76.21.21
   A    @    76.223.126.88
   A    @    (another IP from Vercel)
   A    @    (another IP from Vercel)
   ```

---

### Step 8: Wait for DNS Propagation

**8.1.** After adding DNS records, changes take time to propagate:
   - **Minimum:** 5-10 minutes
   - **Average:** 1-2 hours
   - **Maximum:** 24-48 hours (rare)

**8.2.** Check propagation status:
   - Go back to Vercel dashboard → Settings → Domains
   - You'll see `sujitlochan.tech` status:
     - 🟡 **"Pending"** = DNS not yet propagated (wait)
     - ✅ **"Valid Configuration"** = Ready!

**8.3.** Test DNS yourself:
   ```powershell
   nslookup sujitlochan.tech
   ```
   
   Or use online tools:
   - https://dnschecker.org/#A/sujitlochan.tech
   - Enter your domain and check if it resolves to Vercel's IPs

---

### Step 9: SSL Certificate (Automatic)

**9.1.** Vercel automatically issues SSL certificates once DNS propagates

**9.2.** You don't need to do anything - it's automatic!

**9.3.** Wait 5-10 minutes after DNS shows "Valid Configuration"

**9.4.** Test HTTPS:
   - Visit `https://sujitlochan.tech`
   - Should show a padlock 🔒 in browser
   - No "Not Secure" warnings

---

### Step 10: Verify Custom Domain is Live

**10.1.** Visit `https://sujitlochan.tech` in your browser

**10.2.** Check:
   - [ ] Site loads correctly
   - [ ] URL shows `https://sujitlochan.tech` (not the .vercel.app URL)
   - [ ] HTTPS padlock is green/secure
   - [ ] All pages work (Home, About, Projects, etc.)

**10.3.** Test navigation:
   - Click through all sections
   - Verify images load
   - Check responsive design on mobile

---

## 🔧 PART 3: React Router Fix (Important!)

**Problem:** If your React app uses React Router, refreshing pages or direct URLs will show 404.

**Solution:** Add `vercel.json` configuration file.

**Step 11: Add Vercel Configuration**

**11.1.** In your project root (`myWebsite` folder), create a file named `vercel.json`

**11.2.** Add this content:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**11.3.** Save the file

**11.4.** Commit and push to GitHub:
```bash
git add vercel.json
git commit -m "Add vercel.json for React Router support"
git push
```

**11.5.** Vercel will automatically redeploy. Wait 1-2 minutes.

**11.6.** Test:
   - Visit `https://sujitlochan.tech`
   - Navigate to a section (e.g., `/about`)
   - Refresh the page - should still work (no 404)

---

## 🐛 PART 4: Troubleshooting Common Issues

### Issue 1: DNS Not Propagating After 24 Hours

**Symptoms:** Domain still shows "Pending" in Vercel after 24+ hours

**Solutions:**
1. **Verify DNS records are correct:**
   - Double-check the exact values Vercel provided
   - Ensure no typos in IP addresses or CNAME target

2. **Check for conflicting records:**
   - Delete any old A or CNAME records for `@`
   - Only ONE record should point to Vercel

3. **Use DNS checker:**
   - Go to https://dnschecker.org
   - Enter `sujitlochan.tech`
   - Check if records match Vercel's values globally

4. **Contact domain provider support:**
   - They might have DNS caching issues

---

### Issue 2: "Invalid Domain Configuration" in Vercel

**Symptoms:** Vercel shows error after adding domain

**Solutions:**
1. **Verify DNS record type:**
   - Ensure you used the exact record type (A or CNAME) Vercel recommended

2. **Check for subdomain conflicts:**
   - If you added `www.sujitlochan.tech`, make sure it also points to Vercel
   - Or remove www if you don't want it

3. **Clear DNS cache:**
   ```powershell
   ipconfig /flushdns
   ```

---

### Issue 3: Site Shows "Default Vercel Page" or "404"

**Symptoms:** Domain works but shows wrong content

**Solutions:**
1. **Check domain assignment:**
   - Vercel → Project → Settings → Domains
   - Ensure `sujitlochan.tech` is assigned to the correct project

2. **Verify deployment:**
   - Check that latest deployment succeeded
   - Look at build logs for errors

3. **Clear browser cache:**
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

---

### Issue 4: HTTPS Not Working / "Not Secure" Warning

**Symptoms:** Site loads but browser shows security warning

**Solutions:**
1. **Wait longer:**
   - SSL certificates can take up to 24 hours after DNS propagation

2. **Force HTTPS in Vercel:**
   - Settings → Domains → `sujitlochan.tech`
   - Toggle "Force HTTPS" if available

3. **Check certificate status:**
   - Vercel dashboard shows SSL status
   - If it says "Error", wait or contact Vercel support

---

### Issue 5: Build Fails on Vercel

**Symptoms:** Deployment shows "Build Failed" in Vercel

**Solutions:**
1. **Check build logs:**
   - Click on failed deployment → "Build Logs"
   - Look for error messages

2. **Test build locally first:**
   ```bash
   npm run build
   ```
   - If local build fails, fix errors before pushing

3. **Common fixes:**
   - **Missing dependencies:** Ensure `package.json` has all dependencies
   - **Node version:** Vercel auto-detects, but you can set it in Settings → General → Node.js Version
   - **Path issues:** Check all file paths are correct (case-sensitive on Linux)

---

### Issue 6: Images Not Loading in Production

**Symptoms:** Images work locally but broken on deployed site

**Solutions:**
1. **Check image paths:**
   - Use absolute paths: `/Images/filename.png`
   - Not relative: `../Images/filename.png`

2. **Verify images are in `public` folder:**
   - Images should be in `public/Images/` not `src/Assets/`
   - Or use `process.env.PUBLIC_URL` for paths

3. **Check file names:**
   - Case-sensitive: `image.png` ≠ `Image.png`

---

## 📝 Quick Reference: DNS Record Examples

### GoDaddy Example:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 1 Hour
```

### Namecheap Example:
```
Type: CNAME Record
Host: @
Value: cname.vercel-dns.com
TTL: Automatic
```

### Cloudflare Example:
```
Type: CNAME
Name: @ (or sujitlochan.tech)
Target: cname.vercel-dns.com
Proxy: DNS only (grey cloud)
TTL: Auto
```

---

## ✅ Final Checklist

Before considering deployment complete:

- [ ] Site is live on Vercel's default URL (e.g., `your-project.vercel.app`)
- [ ] Custom domain `sujitlochan.tech` added in Vercel dashboard
- [ ] DNS records added at domain provider
- [ ] DNS shows "Valid Configuration" in Vercel (wait for propagation)
- [ ] Site loads at `https://sujitlochan.tech`
- [ ] HTTPS padlock shows secure
- [ ] All pages work correctly
- [ ] Images load properly
- [ ] Mobile responsive works
- [ ] `vercel.json` added for React Router support

---

## 🎉 Success!

Once everything is complete:
- Your site is live at `https://sujitlochan.tech`
- SSL certificate is active
- Automatic deployments on every GitHub push
- Global CDN for fast loading
- 100% free hosting

---

## 🆘 Need Help?

**If something doesn't work:**

1. **Check Vercel deployment logs:**
   - Dashboard → Project → Deployments → Click deployment → Build Logs

2. **Verify DNS:**
   - https://dnschecker.org/#A/sujitlochan.tech
   - Should show Vercel's IPs globally

3. **Test locally first:**
   - Run `npm run build` locally
   - Fix any errors before pushing

4. **Vercel Support:**
   - Documentation: https://vercel.com/docs
   - Support: https://vercel.com/support

---

## 📞 Next Steps

**Once you've completed the DNS configuration:**

1. Reply to me: "DNS has been updated"
2. I'll help you verify everything is working
3. If there are issues, share:
   - Screenshot of Vercel domain status
   - Any error messages
   - What happens when you visit the domain

**Let's get your portfolio live! 🚀**
