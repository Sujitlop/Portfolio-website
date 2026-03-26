# Fix DNS Record - Quick Guide

## ❌ Problem Identified

Your A record currently points to: `216.198.79.1` (This is WRONG - it's not Vercel!)

**This IP belongs to .techdomains parking page, NOT Vercel.**

---

## ✅ Solution: Update to Vercel's IP Addresses

### Step 1: Get Correct IP from Vercel

1. Go to: https://vercel.com/dashboard
2. Click on your **Portfolio-website** project
3. Click **"Settings"** tab → **"Domains"** in left sidebar
4. If you haven't added the domain yet:
   - Type: `sujitlochan.tech`
   - Click **"Add"**
5. Vercel will show you the CORRECT IP addresses to use

**Common Vercel A Record IPs:**
- `76.76.21.21`
- `76.223.126.88`
- Or Vercel might give you different ones - use what THEY show!

---

### Step 2: Update DNS Record at .techdomains

**2.1.** Go back to .techdomains DNS management for `sujitlochan.tech`

**2.2.** You should see your current A record:
   - Name: `sujitlochan.tech`
   - Type: `A`
   - Value: `216.198.79.1` ❌ (WRONG - this needs to change!)

**2.3.** Edit this record:
   - Click **"Edit"** or click on the record
   - Change **Value/IP Address** from `216.198.79.1` to Vercel's IP
   - Example: Change to `76.76.21.21` (use the IP Vercel gives you!)
   - Keep everything else the same:
     - Name: `sujitlochan.tech`
     - Type: `A`
     - TTL: `28800` (or change to `3600`)
   - Click **"Save"** or **"Update"**

**2.4.** If Vercel gives you MULTIPLE IPs (e.g., 2-4 different IPs):
   - You need to add MULTIPLE A records
   - Each record with same name (`sujitlochan.tech`) but different IP
   - Example:
     ```
     Record 1: A  sujitlochan.tech  76.76.21.21
     Record 2: A  sujitlochan.tech  76.223.126.88
     Record 3: A  sujitlochan.tech  [IP 3 from Vercel]
     Record 4: A  sujitlochan.tech  [IP 4 from Vercel]
     ```
   - DELETE the old record (`216.198.79.1`) first
   - Then add all the new Vercel IPs

---

### Step 3: Wait for DNS Propagation

**3.1.** After updating, wait **10-60 minutes**

**3.2.** Check status in Vercel:
   - Vercel → Settings → Domains
   - Should show: "Pending" (waiting) or "Valid Configuration" (ready!)

**3.3.** Test DNS propagation:
   - Visit: https://dnschecker.org/#A/sujitlochan.tech
   - Should show Vercel's IPs (not `216.198.79.1`)

---

## 🎯 Exact Steps for .techdomains Interface

Based on your screenshot, here's what to do:

1. **Edit the existing A record:**
   - Click on the record with Value `216.198.79.1`
   - Click "Edit" button
   - Change "Value" field to: `76.76.21.21` (or what Vercel shows)
   - Save

2. **OR Delete and Re-add:**
   - Delete the record with `216.198.79.1`
   - Click "Add Record" or "Create Record"
   - Type: `A`
   - Name: `sujitlochan.tech`
   - Value: `76.76.21.21` (or Vercel's IP)
   - TTL: `3600` or `28800`
   - Save

---

## ⚠️ Important: Make Sure Domain is Added in Vercel First!

**Before updating DNS, verify:**

1. Go to Vercel → Your Project → Settings → Domains
2. Check if `sujitlochan.tech` appears in the domains list
3. If NOT, add it now:
   - Click "Add Domain"
   - Enter: `sujitlochan.tech`
   - Click "Add"
4. Vercel will show you the EXACT DNS records to use
5. Use those values (not the examples I gave)

---

## 🔍 How to Verify It's Working

**After updating DNS and waiting 30-60 minutes:**

1. **Check Vercel Status:**
   - Should show "Valid Configuration" ✅

2. **Visit your site:**
   - Go to: `https://sujitlochan.tech`
   - Should load your portfolio (not parking page)

3. **Test DNS:**
   ```powershell
   nslookup sujitlochan.tech
   ```
   - Should show Vercel's IP, not `216.198.79.1`

4. **DNS Checker:**
   - https://dnschecker.org/#A/sujitlochan.tech
   - Should show Vercel IPs globally

---

## 📝 Quick Checklist

- [ ] Domain `sujitlochan.tech` added in Vercel dashboard
- [ ] Got correct IP address(es) from Vercel
- [ ] Updated/Deleted old A record (`216.198.79.1`)
- [ ] Added new A record(s) with Vercel's IP(s)
- [ ] Waited 10-60 minutes for propagation
- [ ] Vercel shows "Valid Configuration"
- [ ] Site loads at `https://sujitlochan.tech`

---

## 🆘 Still Not Working?

**If after updating you still see issues:**

1. **Double-check Vercel's requirements:**
   - Make sure you're using the EXACT IPs Vercel shows
   - Sometimes Vercel needs 4 different A records

2. **Verify domain is in Vercel:**
   - If domain isn't added in Vercel, DNS won't work
   - Vercel needs to know about your domain first

3. **Check for typos:**
   - IP address should match exactly (no spaces, correct numbers)

4. **Wait longer:**
   - DNS can take 24-48 hours (rare but possible)
   - Be patient!

5. **Clear browser cache:**
   - Hard refresh: `Ctrl + Shift + R`
   - Or try incognito/private window

---

**The key issue:** Your DNS is pointing to .techdomains (`216.198.79.1`) instead of Vercel. Update it to Vercel's IPs and it should work! 🚀


