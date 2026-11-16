# James Stokes Carpentry & Joinery

A five-page website for James Stokes, a carpenter and joiner in London. It's built with [Astro](https://astro.build) and published with GitHub Pages:
https://charliekellycopy-netizen.github.io/james-stoke-carpentry/

James is a test client, so the content is placeholder throughout. See **Placeholder content** below.

## Develop

Requires Node 22.23.4 or later.

```bash
npm install
npm run dev       # http://localhost:4321/james-stoke-carpentry/
npm run build     # outputs to dist/
npm run preview
```

Pushing to `main` deploys the site through `.github/workflows/deploy.yml`, which is Astro's official GitHub Pages workflow.

## Where things live

| What | File |
| --- | --- |
| Contact details, services, projects, testimonials, boroughs | `src/data/site.ts` |
| Pages | `src/pages/*.astro` |
| Header, footer and call to action | `src/components/` |
| Colours, type and shared styles | `src/styles/global.css` |
| Photos (processed by Astro's `<Image>`) | `src/assets/photos/` |

## Placeholder content

- **Contact details:** the phone number 020 0000 0000, hello@example.com and the working hours, all in `src/data/site.ts`.
- **Contact form:** it isn't connected to anything. It shows a "not connected" message instead of sending. The comment above the form in `src/pages/contact.astro` explains how to connect Formspree or a similar service.
- **Testimonials:** all three are invented samples and are marked as such in `src/data/site.ts`.
- **Projects:** all eight are invented, with stock photos.
- **About page:** the biography is bracketed placeholder text, and the photo is a stock image, not James.
- **Service area:** the boroughs are a reasonable guess, not confirmed.
- **Process and values copy:** this is generic and needs checking against how James actually works. It includes the claims "a written, fixed quote within a week" and "reply within two working days".
- **Photos:** every photo is stock (see the credits below). Replace them with photos of James's own work.

## Photo credits

All photos are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license).

| File | Photographer | Source |
| --- | --- | --- |
| workshop-sunlit.jpg | Alice Roncato | https://unsplash.com/photos/WWKXTqVlVxY |
| workbench-tools.jpg | Heng Yin | https://unsplash.com/photos/KKY0GrQPqVo |
| hands-marking.jpg | Craft Kitties | https://unsplash.com/photos/GfYA6q5ESLI |
| hands-chisels.jpg | Sander Hallaste | https://unsplash.com/photos/OoOJyr6BD7I |
| chisel-detail.jpg | Dominik Scythe | https://unsplash.com/photos/3cIvvzjE6Lk |
| carpenter-at-work.jpg | Minh Đức | https://unsplash.com/photos/lQIUbkn6jj4 |
| tool-wall.jpg | Minh Đức | https://unsplash.com/photos/WWLuyDP3t1U |
| hand-plane.jpg | Mike Kenneally | https://unsplash.com/photos/o14nNEbLa-s |
| tool-rack.jpg | Barn Images | https://unsplash.com/photos/t5YUoHW6zRo |
| herringbone-floor.jpg | Alex Cooper | https://unsplash.com/photos/Kq8uV6tZM20 |
| living-room-floor.jpg | Sayless Studios | https://unsplash.com/photos/1zfwTK7oETU |
| fitted-wardrobe.jpg | Lisa Anna | https://unsplash.com/photos/6Y3avYzs6os |
| oak-door.jpg | Runda Choo | https://unsplash.com/photos/WeTGtqVBclU |
| kitchen-island.jpg | Clay Banks | https://unsplash.com/photos/XU_ODlSO9ac |
| kitchen-rustic.jpg | Clay Banks | https://unsplash.com/photos/JbLev8Y0xUQ |
| staircase-glass.jpg | Tai Jyun Chang | https://unsplash.com/photos/JScz5-b5Vto |
| staircase-white.jpg | Tahir Osman | https://unsplash.com/photos/iKOh4HquVfw |
| wall-unit.jpg | Josh Davies | https://unsplash.com/photos/gNB_zp_NdDE |
| shelving.jpg | Pawel Czerwinski | https://unsplash.com/photos/oaZoW-kh1CE |
| decking.jpg | Naoki Suzuki | https://unsplash.com/photos/h4r2V9fdf5Q |
