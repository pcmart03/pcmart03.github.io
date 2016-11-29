# Personal Portfolio Site

This is site was built using Jekyll, Sass, and Skeleton. So far, all Javascript is vanilla, as nothing on the site itself warranted pulling in any outside libraries.

## Custom Front Matter

### Page

Items listed under technologies used will appear in the sidebar under the "Technology" heading.

```
technologies_used:
  - Python
  - Flask
  - PostgreSQL
  - SqlAlchemy
  - Foundation
  - Amazon EC2
  - Ubuntu
```

The github and live_site links will appear in the sidebar under the "More Info" heading. Both settings are optional.

```
links:
  github_repo: "https://github.com/pcmart03/FSND-P3-Catalog-App"
  live_site: "http://ec2-52-26-24-122.us-west-2.compute.amazonaws.com/"
```
slide_images populates the screenshots slider. Include a file path and alt text for each image.

```
slide_images:
  - file: /images/thumbnails/catalog_thumb2.jpg
    alt_text: "The catalog home page displaying a variety of items."
  - file: /catalog_project/images/responsive_view.jpg
    alt_text: "A view of the catalog as it would appear on a mobile device"
  - file: /catalog_project/images/add_item_view.jpg
    alt_text: "The form for adding items to the app."
```

### Notes on Images
Slider dimensions 455px x 320px
