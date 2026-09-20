# IEEE IIIT Ranchi Student Branch

Local React/Vite implementation closely matching https://iiitieee.netlify.app/.

## Run

```sh
cd ~/Desktop/IEEE/frontend
npm install
npm run dev
```

## Design

Reuses the source site's actual geometric background, circular branch graphic, institute and IEEE logos, circuit-board backdrop, and society images from public/reference. Recreates its white navigation, large two-column hero, introduction with Notice panel, three-column About section, society panels, and dark footer. Keeps the user's five pages (Home, Members, About, Events & Activities, Contact) and Home team preview. Responsive mobile navigation and accessible focus states are included. No backend, form, or deployment.

## Content and provenance

Reference inspected: Home, Resources, Gallery, and previously Members and Events. The source records establishment in 2020 by 12 engineering undergraduates under Prof. Vishnu Priye, then Director. Its society listings and IEEE resource links are represented in the site. Long descriptive text and testimonial are summarized; the original testimonial is linked directly. The original non-home pages only say “Hold Tight!”, so no current members or events could be imported. Unconfirmed student names remain placeholders.

The original footer lists Sirkha Toli, Kali Nagar, Namkum, Ranchi, Jharkhand 834010; phone 123-24578; email iiitranchi@contact.info. These are preserved here as historical source details, not published as verified current contact information. Its four social links point only to https:// and cannot function. Source footer credit: WebDev Team IEEESB IIITRanchi, copyright 2020.

The visible contact page retains the institute address and Dr. Ravi Shanker's contact details from https://acm-smoky.vercel.app/contact, explicitly requested by the user in this task. The ACM source project has not been modified.

## Stack and checks

React 19, Vite 6, React Router 7, Lucide React, and plain CSS. `npm run build` and `npm run lint` pass. Assets are local so no third-party asset request is required to render the design. Old URLs redirect to the corresponding current pages.
