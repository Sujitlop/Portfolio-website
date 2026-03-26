# .techdomains DNS Setup Guide for Vercel

## 🎯 Quick Overview

You need to add DNS records at .techdomains so `sujitlochan.tech` points to your Vercel deployment.

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### Part A: Get DNS Records from Vercel (Do This First!)

**1.1.** Go to your Vercel dashboard: https://vercel.com/dashboard

**1.2.** Click on your **Portfolio-website** project

**1.3.** Click the **"Settings"** tab (top navigation)

**1.4.** Click **"Domains"** in the left sidebar

**1.5.** In the "Domains" section, type: `sujitlochan.tech`

**1.6.** Click **"Add"** button

**1.7.** Vercel will now show you **DNS configuration instructions**

**You'll see something like this:**

```
For sujitlochan.tech:

Option 1: A Record
Type: A
Name: @
Value: 76.76.21.21

OR

Option 2: CNAME Record  
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

**📝 IMPORTANT:** Write down the EXACT values Vercel shows you. They might be different!

**Common Vercel A Record IPs (for reference):**
- `76.76.21.21`
- `76.223.126.88`  
- Sometimes Vercel gives you 4 different IPs - you'll need to add all 4

---

### Part B: Access .techdomains DNS Management

**2.1.** Go to your .techdomains account: https://techdomains.com (or wherever you log in)

**2.2.** Log in to your account

**2.3.** Find your domain `sujitlochan.tech` in your domain list

**2.4.** Click on **"Manage Domain"** or **"DNS Settings"** or **"DNS Management"**

**Note:** The exact menu name varies, but look for:
- "DNS"
- "DNS Management"  
- "DNS Settings"
- "Name Servers" (might be in this section)
- "Advanced DNS"

---

### Part C: Add DNS Records at .techdomains

**IMPORTANT:** Use the EXACT values from Vercel (from Part A). The examples below are common, but verify with what Vercel shows you!

#### Option 1: Add A Record (Most Common)

**If Vercel shows you A Record configuration:**

**3.1.** In .techdomains DNS management, click **"Add Record"** or **"Create Record"**

**3.2.** Fill in the form:

   - **Record Type:** Select `A` (or "A Record")
   
   - **Name/Host:** Enter `@` 
     - Some registrars use `@` for root domain
     - If `@` doesn't work, try leaving it **blank/empty**
     - If blank doesn't work, try `sujitlochan.tech` (full domain)
   
   - **Value/Points to/IP Address:** Enter the IP from Vercel
     - Example: `76.76.21.21`
     - Use the EXACT IP Vercel gave you!
   
   - **TTL:** 
     - Set to `3600` (1 hour)
     - Or select "Auto" / "Default"
   
   - **Click "Save"** or **"Add Record"**

**3.3.** If Vercel shows you MULTIPLE A Record IPs (e.g., 4 different IPs):

   - **Add 4 separate A records**, one for each IP
   - Each record should have:
     - Type: `A`
     - Name: `@` (or blank)
     - Value: One of the 4 IPs
   - Example:
     ```
     Record 1: A  @  76.76.21.21
     Record 2: A  @  76.223.126.88
     Record 3: A  @  [IP 3 from Vercel]
     Record 4: A  @  [IP 4 from Vercel]
     ```

---

#### Option 2: Add CNAME Record (If A Record doesn't work)

**If .techdomains doesn't support A records for root domain, or Vercel recommends CNAME:**

**3.1.** Click **"Add Record"**

**3.2.** Fill in:

   - **Record Type:** Select `CNAME` (or "CNAME Record")
   
   - **Name/Host:** Enter `@`
     - If `@` doesn't work, try blank or `sujitlochan.tech`
   
   - **Value/Target/Points to:** Enter `cname.vercel-dns.com`
     - Use the EXACT value from Vercel!
   
   - **TTL:** `3600` or "Auto"
   
   - **Click "Save"**

**Note:** Some registrars don't support CNAME for root domain (`@`). If CNAME doesn't work, use A Record instead.

---

### Part D: Remove Conflicting Records (IMPORTANT!)

**4.1.** Check if there are any EXISTING A or CNAME records for your domain

**4.2.** Look for records with:
   - Name: `@` or blank or `sujitlochan.tech`
   - Type: `A` or `CNAME`

**4.3.** If you find any OLD records pointing elsewhere:
   - **Delete them!**
   - You should only have records pointing to Vercel

**4.4.** Common records to DELETE:
   - Old A records pointing to different IPs
   - Old CNAME records pointing to other services
   - Parking page records

---

### Part E: Verify DNS Records Are Saved

**5.1.** After adding records, scroll down and check they appear in your DNS records list

**5.2.** Verify each record:
   - Type is correct (A or CNAME)
   - Name is `@` or blank
   - Value matches what Vercel gave you

**5.3.** Save changes if there's a **"Save Changes"** button at the bottom

---

### Part F: Check Status in Vercel

**6.1.** Go back to Vercel dashboard → Your project → Settings → Domains

**6.2.** You should see `sujitlochan.tech` with status:

   - 🟡 **"Pending"** = DNS records added, waiting for propagation (NORMAL - wait 5 minutes to 2 hours)
   
   - ✅ **"Valid Configuration"** = DNS is correct! (Success!)
   
   - 🔴 **"Invalid Configuration"** = Something is wrong (see troubleshooting below)

**6.3.** Wait for DNS propagation:
   - Usually takes **10-60 minutes**
   - Can take up to **24-48 hours** (rare)
   - Be patient!

---

## 🔍 Troubleshooting .techdomains Specific Issues

### Issue 1: Can't Find DNS Management in .techdomains

**Problem:** Don't know where DNS settings are

**Solutions:**
1. **Check your domain dashboard:**
   - Look for tabs: "DNS", "DNS Management", "Name Servers", "Advanced"

2. **Contact .techdomains support:**
   - They can direct you to the exact location
   - Email support or live chat

3. **Check if using custom nameservers:**
   - If you changed nameservers (e.g., to Cloudflare), you manage DNS at Cloudflare, not .techdomains
   - Look at your domain settings to see current nameservers

---

### Issue 2: "@" Symbol Not Allowed in Name Field

**Problem:** .techdomains interface doesn't accept `@` symbol

**Solutions:**
1. **Try leaving the Name field BLANK/EMPTY**
   - Many registrars use blank for root domain

2. **Try the full domain name:**
   - Enter: `sujitlochan.tech`

3. **Check the interface help text:**
   - Some registrars show "Use @ for root domain" or similar instructions

---

### Issue 3: CNAME Not Allowed for Root Domain

**Problem:** .techdomains shows error when adding CNAME with `@`

**Solution:**
- Use **A Records** instead of CNAME
- A Records work for root domains on all registrars
- Use the A Record IPs from Vercel

---

### Issue 4: DNS Records Not Showing Up

**Problem:** Added records but they don't appear in the list

**Solutions:**
1. **Refresh the page** - records might need a moment to appear

2. **Check if you clicked "Save"** - some interfaces require an extra save button

3. **Clear browser cache** - reload the page

4. **Check different section** - records might be in a different tab

---

### Issue 5: "Invalid Configuration" in Vercel After 1 Hour

**Problem:** Vercel still shows invalid DNS after waiting

**Solutions:**
1. **Verify records are correct:**
   - Go back to .techdomains DNS management
   - Check the exact values match Vercel's requirements
   - Common mistakes:
     - Wrong IP address (typo)
     - Wrong record type (used CNAME instead of A)
     - Name field has extra characters

2. **Test DNS propagation:**
   - Go to: https://dnschecker.org/#A/sujitlochan.tech
   - Enter your domain
   - Check if A records show Vercel's IPs globally
   - If not showing, DNS hasn't propagated yet (wait longer)

3. **Double-check Vercel requirements:**
   - In Vercel → Settings → Domains → Click on your domain
   - See what DNS records it's expecting
   - Compare with what you added

4. **Delete and re-add records:**
   - Sometimes records need to be re-added
   - Delete the old record
   - Wait 5 minutes
   - Add it again with exact values

---

### Issue 6: Domain Still Points to Old/Parking Page

**Problem:** Domain shows parking page or old website

**Solutions:**
1. **Check for conflicting records:**
   - Look for other A or CNAME records pointing elsewhere
   - Delete any old records

2. **Check nameservers:**
   - If using custom nameservers (not .techdomains default), manage DNS where nameservers point
   - Example: If nameservers are Cloudflare's, manage DNS at Cloudflare

3. **Wait longer:**
   - DNS changes can take 24-48 hours to fully propagate
   - Clear your browser cache and try again

---

## ✅ Verification Checklist

Before considering DNS setup complete:

- [ ] Added domain `sujitlochan.tech` in Vercel dashboard
- [ ] Wrote down exact DNS values from Vercel
- [ ] Logged into .techdomains account
- [ ] Found DNS Management section
- [ ] Added A Record(s) or CNAME Record with correct values
- [ ] Removed any conflicting old DNS records
- [ ] Verified records appear in DNS records list
- [ ] Vercel shows "Pending" or "Valid Configuration" status
- [ ] Waited at least 10-60 minutes for propagation
- [ ] Tested at https://dnschecker.org

---

## 📞 Need More Help?

**If you're still stuck:**

1. **Screenshot these and share:**
   - Vercel's DNS requirements (from Settings → Domains)
   - Your .techdomains DNS records list (after adding records)
   - Any error messages you see

2. **Check .techdomains documentation:**
   - Look for DNS management guide on their website
   - Contact their support

3. **Test DNS propagation:**
   - Visit: https://dnschecker.org/#A/sujitlochan.tech
   - See if records are propagating globally

**Common .techdomains Support:**
- Check their help center
- Email support
- Live chat (if available)

---

## 🎯 Quick Reference: What to Add

**Based on common Vercel configuration:**

```
Record Type: A
Name: @ (or blank)
Value: 76.76.21.21
TTL: 3600

(If Vercel gives you 4 IPs, add 4 separate A records with same name)
```

**OR if using CNAME:**

```
Record Type: CNAME
Name: @ (or blank)
Value: cname.vercel-dns.com
TTL: 3600
```

**Remember:** Always use the EXACT values Vercel provides in your dashboard!

---

Good luck! You've got this! 🚀


