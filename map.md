# Portfolio Map — kahaan kya hai

Static site hai, sab content alag-alag jagah organized hai taake easy se update ho.

## 📝 Content (ye sab edit karo)

| Kya change karna hai | File |
|---|---|
| Naam, email, socials, role | [src/lib/site.ts](src/lib/site.ts) |
| **Hero** ka heading & subtitle (homepage ka top) | [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx) |
| **About** section (homepage ki short bio) | [src/components/sections/About.tsx](src/components/sections/About.tsx) |
| **About** ka full page (long version) | [src/content/about.mdx](src/content/about.mdx) |
| **Now** page (kya currently kar rahe ho) | [src/content/now.mdx](src/content/now.mdx) |
| **Skills & Tools** (Languages, Frameworks, Tools, Infra) | [src/content/skills.ts](src/content/skills.ts) |
| **Experience** timeline (jobs, roles) | [src/content/experience.ts](src/content/experience.ts) |
| **Testimonials** (kind words) | [src/content/testimonials.ts](src/content/testimonials.ts) |
| **Projects** — har project ki story | [src/content/projects/](src/content/projects/) (`.mdx` files) |
| **Résumé PDF** | [public/resume/hasrat-resume.pdf](public/resume/hasrat-resume.pdf) — apni real PDF se replace karo |

## 🎨 Design (agar look change karna ho)

| Kya change karna hai | File |
|---|---|
| Colors (background, accent, text) | [src/app/globals.css](src/app/globals.css) — top mein `:root { ... }` |
| Fonts | [src/app/layout.tsx](src/app/layout.tsx) |
| Header / nav links | [src/components/layout/Header.tsx](src/components/layout/Header.tsx) |
| Footer | [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) |
| Section animations | [src/app/globals.css](src/app/globals.css) — bottom mein `@keyframes` |

## ➕ New project add karna ho?

Bas ek naya MDX file create karo `src/content/projects/` mein, e.g. `my-new-project.mdx`. Existing file copy karke shuru karo — frontmatter (title, summary, problem, role, date, tech, featured, links) bhar do, niche apni story likh do. Site auto pick kar legi.

`featured: true` rakhoge to homepage pe dikhega, `false` rakhoge to sirf `/projects` page pe.

## 🔧 Contact form messages

Abhi sirf `npm run dev` ke terminal mein dikhte hain. Real email paane ke liye:

- Resend signup karo → API key
- `.env.local` file banao, daalo:
  ```
  RESEND_API_KEY=re_xxxxxx
  CONTACT_TO=zerovlabs18@gmail.com
  ```

## 🚀 Common workflow

1. Content edit karo (upar wali files)
2. `npm run dev` → http://localhost:3000 pe preview
3. Sahi lag raha hai? `git add . && git commit -m "update about"` aur `git push`
4. Vercel/Netlify pe deploy ho rakha ho to live update khud ho jayega

## 🌿 Branches

- `main` — clean warm-minimal version (default, non-technical audience ke liye)
- `terminal-style` — interactive terminal wali version (preserved)

Switch karna ho: `git checkout terminal-style` ya `git checkout main`.
