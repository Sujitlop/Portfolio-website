<h2 align="center">
  Sujit Lopchan - Portfolio Website<br/>
  <a href="https://sujitlopchan.com" target="_blank">sujitlopchan.com</a>
</h2>
<div align="center">
  <img alt="Demo" src="./Images/readme-img1.png" />
</div>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com)

</center>

## Built With

My personal portfolio website which features my projects, resume, and technical skills.<br/>

This project was built using these technologies.

- React.js
- Bootstrap
- CSS3
- React Icons
- Vercel (for deployment)

## Features

**📖 Multi-Page Layout**

**🎨 Styled with React-Bootstrap and Css with easy to customize colors**

**📱 Fully Responsive**

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Usage Instructions

Open the project folder and Navigate to `/src/components/`. <br/>
You will find all the components used and you can edit your information accordingly.

### Customizing Content

- **Home Page**: Edit `/src/components/Home/Home.js` and `/src/components/Home/Type.js`
- **About Section**: Edit `/src/components/About/AboutCard.js` for personal info
- **Skills**: Edit `/src/components/About/Techstack.js` for programming languages
- **Projects**: Edit `/src/components/Projects/Projects.js` to add your projects
- **Resume**: Replace `/src/Assets/Resume_Sujit.pdf` with your own resume PDF
- **Social Links**: Update links in `/src/components/Home/Home.js` and `/src/components/Footer.js`

## Deploying to Vercel

1. **Install Vercel CLI** (optional, or use GitHub integration):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard** (Recommended):
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

4. **Build Settings** (usually auto-detected):
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

5. **Environment Variables**: None required for basic setup

6. **Custom Domain** (Optional):
   - In Vercel dashboard, go to your project settings
   - Add your custom domain (e.g., sujitlopchan.com)
   - Follow DNS configuration instructions

### Notes for Deployment

- The site is fully responsive and ready for production
- All assets are optimized for web
- The resume PDF viewer works in production
- GitHub calendar integration requires your GitHub username in `/src/components/About/Github.js`

## Credits

This portfolio is based on the template by [Soumyajit4419](https://github.com/soumyajit4419/Portfolio). Thanks for the great template!
