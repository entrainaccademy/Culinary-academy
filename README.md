This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Contact enquiry sheet

The contact form writes to a private Google Sheet through the server-side `/api/enquiries` route. To connect it:

1. Use the Google Sheet named `Entrain Culinary Academy — Enquiries`. Its `Enquiries` tab has these headings in row 1, columns A–G: `Submitted at`, `Name`, `Phone`, `City / location`, `Course of interest`, `Message`, `Source`.
2. In a Google Cloud project, enable the Google Sheets API and create a service account with a JSON key.
3. Share the Sheet with the service account's email as **Editor**. Keep **General access** set to **Restricted**. Share it separately with staff as **Viewer** or **Editor**, according to their role.
4. Set `GOOGLE_SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` in `.env.local` and in the hosting platform's server environment. Use the values from the service account JSON key. Never prefix them with `NEXT_PUBLIC_` or commit the private key.

If the JSON key is saved locally, run `./scripts/configure-enquiry-sheet.ps1 -CredentialPath "C:\\path\\to\\service-account.json"` to fill `.env.local` without putting the private key in chat. The helper prints the service-account email to share with the Sheet. Restart the local Next.js server after configuring it. Hosting still needs the same three server environment variables.

The form reports an error until these values are configured; it never displays success for a failed write. Google Sheets sharing controls access to the whole file. For different visibility of individual fields or rows, use separate files with different sharing settings or an authenticated dashboard; hidden tabs and protected ranges are not private from file viewers.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
