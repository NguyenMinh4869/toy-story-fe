# Cleanup Script - Remove Old JSX Files

This file lists all the old JSX files that can be safely deleted after verifying the new TypeScript files work correctly.

## Files to Remove:

### Root Source Files
- [ ] src/App.jsx
- [ ] src/main.jsx

### Pages
- [ ] src/pages/HomePage.jsx
- [ ] src/pages/LoginPage.jsx
- [ ] src/pages/ProductDetail.jsx

### Routes
- [ ] src/routes/AppRoutes.jsx
- [ ] src/routes/routePaths.js

### Components
- [ ] src/components/Header.jsx
- [ ] src/components/Footer.jsx
- [ ] src/components/HeroSection.jsx
- [ ] src/components/ProductSection.jsx
- [ ] src/components/BrandsSection.jsx
- [ ] src/components/BlogSection.jsx

## PowerShell Cleanup Command

After testing the application and confirming everything works, run this command from the project root:

```powershell
# Remove old JSX files (run from project root)
Remove-Item -Path "src\App.jsx" -Force
Remove-Item -Path "src\main.jsx" -Force
Remove-Item -Path "src\pages\HomePage.jsx" -Force
Remove-Item -Path "src\pages\LoginPage.jsx" -Force
Remove-Item -Path "src\pages\ProductDetail.jsx" -Force
Remove-Item -Path "src\routes\AppRoutes.jsx" -Force
Remove-Item -Path "src\routes\routePaths.js" -Force
Remove-Item -Path "src\components\Header.jsx" -Force
Remove-Item -Path "src\components\Footer.jsx" -Force
Remove-Item -Path "src\components\HeroSection.jsx" -Force
Remove-Item -Path "src\components\ProductSection.jsx" -Force
Remove-Item -Path "src\components\BrandsSection.jsx" -Force
Remove-Item -Path "src\components\BlogSection.jsx" -Force
```

## Verification Steps

1. ✅ Run `npm run dev` and verify the app starts without errors
2. ✅ Navigate to home page (/) - should see all sections
3. ✅ Click on a product - should navigate to product detail page
4. ✅ Navigate to login page (/login) - should display login form
5. ✅ Check browser console for any errors
6. ✅ Verify TypeScript types are working (no red squiggles in VS Code)

Only after all verifications pass, proceed with removing old files.
