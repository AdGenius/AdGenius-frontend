# 🚀 AdGenius Landing Page

**AdGenius** is a powerful B2B platform designed to simplify and centralize digital advertising management across multiple channels. This repository contains the stunning landing page built with Next.js 15, showcasing the platform's capabilities and providing easy access to our web, mobile, and Telegram applications.

## 🌟 About AdGenius

AdGenius empowers businesses to:

- **📊 Monitor** ad performance across various platforms from a single dashboard
- **🔔 Receive** real-time notifications and AI-driven suggestions
- **🤖 Interact** with a built-in AI assistant that analyzes user data and offers profitable insights
- **📱 Access** the platform anywhere - web, mobile, or Telegram mini-app

## ✨ Landing Page Features

- **🎨 Modern Design**: Beautiful gradients, animations, and responsive layout
- **🌙 Dark Mode Support**: Automatic dark/light mode switching
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations**: Engaging hover effects and transitions
- **⚡ Performance Optimized**: Fast loading with Next.js 15 and Tailwind CSS
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Fonts**: [Geist](https://vercel.com/font) font family
- **Language**: TypeScript for type safety

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ad-genius.git
   cd ad-genius
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

## 📁 Project Structure

```
ad-genius/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx            # Main landing page
│       └── globals.css         # Global styles and animations
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🌐 Available Platforms

### 📱 Mobile Applications

- **iOS**: Download from App Store _(coming soon)_
- **Android**: Download from Google Play _(coming soon)_

### 💬 Telegram Mini App

Access AdGenius directly in Telegram: [@ad_genius_bot](https://t.me/ad_genius_bot)

### 🖥️ Web Dashboard

Full-featured web application with advanced analytics and team collaboration tools.

## 🎨 Customization

### Colors

The project uses a custom color palette defined in `globals.css`:

- **Primary**: Indigo (`#4F46E5`)
- **Secondary**: Green (`#10B981`)
- **Accent**: Pink (`#EC4899`)

### Animations

Custom animations are defined in `globals.css`:

- `fadeIn`: Smooth element entrance
- `float`: Floating effect for icons
- `gradient`: Animated gradient backgrounds

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Connect your GitHub repository
2. Configure build settings (auto-detected)
3. Deploy with one click

### Other Platforms

- **Netlify**: Drag and drop the build folder
- **AWS**: Use AWS Amplify for easy deployment
- **Docker**: Build and deploy using containers

## 📝 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# API URLs
NEXT_PUBLIC_API_URL=your_api_url
```

### Telegram Bot Integration

Update the Telegram bot links in `src/app/page.tsx`:

```typescript
href = "https://t.me/ad_genius_bot";
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@adgenius.com
- 💬 Telegram: [@ad_genius_bot](https://t.me/ad_genius_bot)
- 🌐 Website: [https://adgenius.com](https://adgenius.com)

---

<div align="center">
  <strong>Built with ❤️ for the AdGenius community</strong>
  <br>
  <sub>© 2025 AdGenius. All rights reserved.</sub>
</div>
