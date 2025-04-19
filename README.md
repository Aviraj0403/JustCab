# JustCab - Transportation Service Website

A visually attractive and SEO-optimized transportation service website (JustCab) with animated UI, service showcases, and WhatsApp-integrated enquiry form.

## Features

- Fully responsive design with mobile-first approach
- SEO-optimized with appropriate meta tags
- Animated UI elements using AOS and custom animations
- Interactive service showcase with hover effects
- WhatsApp-integrated enquiry form
- Pure HTML, CSS, and JavaScript (no framework needed)

## Structure

```
static_site/
├── css/
│   └── style.css
├── js/
│   ├── animations.js
│   └── main.js
├── svg/
│   ├── airport.svg
│   ├── chardham.svg
│   ├── happy-client.svg
│   ├── holiday.svg
│   ├── round-trip.svg
│   └── taxi.svg
├── index.html
├── server.js (for local testing)
└── README.md
```

## Local Testing

You can test the website locally using the included Node.js server:

1. Open a terminal in the project directory
2. Run `node server.js`
3. Open your browser and navigate to `http://localhost:8080`

## Deployment to GoDaddy

To deploy this website to GoDaddy hosting:

1. Log in to your GoDaddy account
2. Go to your cPanel or hosting dashboard
3. Use the File Manager or FTP to upload all files and folders (except server.js) to your website's root directory (typically public_html)
4. Make sure to maintain the same folder structure

OR

1. Create a ZIP file of all contents (excluding server.js)
2. Upload the ZIP file to your GoDaddy hosting
3. Extract the contents to your website's root directory

## Customization

### Update Contact Information

Edit the following files to update contact information:

- `index.html`: Update phone number, email, and social media links in the footer section

### Change WhatsApp Number

Edit the `main.js` file:

- Find `const adminPhone = "911234567890";` and replace it with your WhatsApp number (including country code without '+')

### Change Colors and Theme

Edit the `css/style.css` file:

- Find the `:root` selector at the top and modify the color variables

## Credits

- Font Awesome for icons
- AOS library for scroll animations
- Google Fonts (Poppins, Montserrat)
- Custom SVG illustrations