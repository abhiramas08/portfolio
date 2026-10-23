# 🚀 How to Update Your Live Portfolio Website

This beginner-friendly guide walks you through making changes to your live portfolio website hosted on **Vercel** via **GitHub**.

---

## ⚡ The 3-Step Core Workflow

Because your GitHub repository is connected to Vercel, every time you push code to GitHub, **Vercel automatically rebuilds and updates your live website in ~45 seconds**.

```text
[ 1. Edit code in VS Code ] 
            ↓
[ 2. Save & preview at localhost:3000 ]
            ↓
[ 3. Run: git add . && git commit && git push ]
            ↓
🎉 Vercel automatically deploys your live site!
```

---

## 🛠️ Step-by-Step Instructions

### Step 1: Open VS Code and Start Local Preview
1. Open **VS Code**.
2. Open your project folder (`abhiram-portfolio`).
3. Open the terminal (`Ctrl + \``).
4. Run the development server:
   ```powershell
   npm.cmd run dev
   ```
5. Open your browser to **[http://localhost:3000](http://localhost:3000)** to see your site live as you work.

---

### Step 2: Make Your Code Changes
Edit the files you want to update. Whenever you press **`Ctrl + S`**, your browser preview at `http://localhost:3000` updates instantly without needing to refresh.

---

### Step 3: Push to GitHub to Update the Live Website
Once you are happy with how your changes look locally, stop or open a terminal in VS Code and run these **3 commands**:

```powershell
# 1. Stage all your changes
git add .

# 2. Save your changes with a message describing what you did
git commit -m "Update portfolio projects and bio"

# 3. Send the changes to GitHub
git push
```

---

### Step 4: Done! Vercel Automatically Updates
- The moment `git push` finishes, GitHub alerts Vercel.
- Vercel automatically builds and deploys the new version.
- In about **45 seconds**, your live URL (e.g., `https://portfolio-xxxx.vercel.app`) will display your new updates!

---

# 📖 Practical Real-World Examples

---

### Example 1: Updating Your Bio or Animated Headline

**Goal:** Change your headline or intro text.

1. In VS Code, open: `src/config/portfolio.ts`
2. Scroll to lines 15–35 (the `USER` object):
   ```typescript
   export const USER = {
     name: "Abhiram A S",
     displayName: "ABHIRAM A S",
     headline: "Computer Science & Engineering Student",
     // Edit your animated flip sentences here:
     flipSentences: [
       "Frontend Developer building clean, accessible interfaces.",
       "Exploring Artificial Intelligence, Computer Vision, and OCR.",
       "Interested in Robotics, Embedded Systems, and Space Technology.",
     ],
     summary:
       "Third-year B.Tech Computer Science and Engineering student at ACE College of Engineering, Kerala. Passionate about software engineering, AI, and robotics.",
   }
   ```
3. Change any of the sentences inside `flipSentences` or edit the `summary`.
4. Press `Ctrl + S` to save.
5. In your terminal, deploy live:
   ```powershell
   git add .
   git commit -m "Update headline and summary bio"
   git push
   ```

---

### Example 2: Adding a New Project Card

**Goal:** Add a new software or hardware project to your portfolio.

1. Open `src/config/portfolio.ts`.
2. Scroll down to `PROJECTS` (around line 180).
3. Copy one of the existing project blocks and paste it inside the array:
   ```typescript
   {
     id: "my-new-app",
     title: "Autonomous Pathfinding Rover",
     description: "A ROS2-based path planning robot using LiDAR and computer vision.",
     tags: ["ROS2", "Python", "OpenCV", "Raspberry Pi"],
     links: {
       github: "https://github.com/abhiramas08/my-new-app",
       live: "https://my-new-app.vercel.app",
     },
     featured: true,
     year: 2026,
   },
   ```
4. Save the file (`Ctrl + S`). Check `http://localhost:3000` to see your new project card rendered.
5. Deploy live:
   ```powershell
   git add .
   git commit -m "Add Autonomous Pathfinding Rover project"
   git push
   ```

---

### Example 3: Changing Your Profile Photo

**Goal:** Replace your avatar with a new picture.

1. Choose your new photo and crop it into a square ($1:1$ ratio).
2. Save or copy it to:
   ```text
   public/images/avatar.webp
   ```
   *(Or save it as `public/images/avatar.jpg`).*
3. Save the file.
4. Deploy live:
   ```powershell
   git add .
   git commit -m "Update profile avatar image"
   git push
   ```

---

### Example 4: Adding or Updating Social Links

**Goal:** Update your LinkedIn, GitHub, Instagram, or Email.

1. Open `src/config/portfolio.ts`.
2. Scroll to `SOCIAL_LINKS` (around lines 356–375):
   ```typescript
   export const SOCIAL_LINKS: SocialLink[] = [
     {
       name: "GitHub",
       url: "https://github.com/abhiramas08",
       icon: "github",
     },
     {
       name: "LinkedIn",
       url: "https://www.linkedin.com/in/abhiram-a-s/",
       icon: "linkedin",
     },
     {
       name: "Instagram",
       url: "https://www.instagram.com/abhrm.io/",
       icon: "instagram",
     },
     {
       name: "Email",
       url: "mailto:etherealstellar8@gmail.com",
       icon: "mail",
     },
   ]
   ```
3. Edit the URL string.
4. Deploy live:
   ```powershell
   git add .
   git commit -m "Update social links"
   git push
   ```

---

## 🗂️ Quick File Reference

| Section You Want to Change | File to Edit in VS Code |
| :--- | :--- |
| **Name, Bio, Tagline, & Flip Text** | `src/config/portfolio.ts` |
| **Projects & Showcase Cards** | `src/config/portfolio.ts` |
| **Technical Skills & Tools** | `src/config/portfolio.ts` |
| **Education & Coursework** | `src/config/portfolio.ts` |
| **Social Media Links** | `src/config/portfolio.ts` |
| **Profile Photo** | `public/images/avatar.webp` |
| **ASCII Terminal Animation Video** | `public/media/ascii-earth-computer.mp4` |
| **Blog Articles** | `src/features/blog/data/articles.ts` |
| **Website Title & Metadata** | `src/config/site.ts` |

---

## 🔍 How to Check Your Live Deployment on Vercel

If you ever want to check the build progress or view deployment logs:

1. Go to **[https://vercel.com/dashboard](https://vercel.com/dashboard)**.
2. Click on your **`portfolio`** project.
3. Under the **Deployments** tab, you will see a list of every update you have ever pushed with its commit message.
4. A green dot (`● Ready`) means your website is live and healthy!

---

## 💡 Troubleshooting & Tips

- **How do I test before pushing?** Always check `http://localhost:3000` first. If it works on localhost, it will work on Vercel.
- **Forgot to commit?** Run `git status` anytime in VS Code to see which files you modified.
- **Accidentally made a mistake?** Vercel keeps every deployment saved. You can click on any previous deployment on your Vercel dashboard and click **"Promote to Production"** to roll back instantly!
