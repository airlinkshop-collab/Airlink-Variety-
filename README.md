# Airlink Variety — starter website / Android-ready PWA

Bilingual Bengali/English starter site for Airlink Variety. It includes service cards, phone links, address/Maps link, and a request form that opens WhatsApp with a prefilled message.

## Files
- `index.html` — site content
- `styles.css` — responsive styling
- `app.js` — language switch, order form and PWA registration
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — basic offline caching
- `assets/icon.svg` — app icon

## Important
- The WhatsApp number is set to `917003104215` (India country code + shop number 7003104215).
- Prices are intentionally not listed yet.
- The order form does not take payments or automatically confirm stock. It opens WhatsApp so the customer reviews and sends the message.
- This is a Progressive Web App (PWA): customers can install it from a supported browser after the site is published over HTTPS. It is not a Play Store APK.
- The Google Fonts import requires internet; system fonts remain as fallback.
- Test contact details and service descriptions before publishing.

## Free publishing option: GitHub Pages
1. Sign in or create a GitHub account.
2. Create a public repository, e.g. `airlink-variety`.
3. Upload all files and folders from this ZIP to the repository root (not the ZIP itself).
4. In repository Settings → Pages, choose deploy from branch, select `main` and `/ (root)`, and save.
5. Wait for GitHub Pages to publish; use the URL shown in Pages settings.
6. Open that HTTPS URL on Android Chrome. Use browser menu → Install app / Add to Home screen (wording may vary).
7. Test on another phone, including WhatsApp link and the Bengali/English switch.

Free host features and UI can change. A public repository means the website source is publicly viewable.

## Other free-hosting option
Netlify or Cloudflare Pages can host static HTML/CSS/JS. Upload/deploy the project folder according to the provider's current flow and use the HTTPS URL it gives you.

## To make a Play Store app later
A PWA alone is not a Play Store app. To publish in Google Play you will need to package the site (for example as a Trusted Web Activity using Bubblewrap) and meet Google's current developer registration, testing, privacy, and store-listing requirements. Developer registration may require a one-time fee. Check current Google Play Console rules before paying.

## Before launch checklist
- Verify the address spelling and postal code.
- Confirm the phone/WhatsApp number.
- Add a real shop logo and product photos if desired.
- Add prices only after you provide them.
- Add a privacy notice if you later collect/store personal data or add analytics.
