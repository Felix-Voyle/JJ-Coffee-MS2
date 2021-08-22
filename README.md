<a href="https://ibb.co/gVsQRGG"><img src="https://i.ibb.co/HdmRH00/Screenshot-2021-08-21-at-11-28-31.png" alt="MS2 responsiveness" border="0" /></a>

# Java Java Coffee

Java Java coffee is a coffee company run inside co-working spaces. They not only have their doors open to the genral public, but also cater for in house meeting rooms. 
The main purpose of this site would not only be to highlight their offerings, but also to enable people to submit meeting room catering requests over the website via email JS. 
This would streamline the service that the company offers for the meeting rooms.
I have also added in further javascript by making all items on the site able to add to cart which is a feature which although i dont have the skills to fully complete yet, with payment options etc. Is something I would be able to finish off in the near future.  


## User stories
---

### First Time Visitor Goals
- As a first time visitor I want to be able to see what services food/drinks are on offer
- As a first time visitor I want to know the purpose of the site 
- As a first time user I want to be able to navigate around the site seamlessly 
 
 ### Returning Visitor Goals
- As a returning visitor I want to find contact information to enquire about something
- As a returning visitor I want to book catering for a meeting room   

### Frequent Visitor Goals
- As a frequent user I want to be able to go online and order my food and drinks for collection at a specific time.
- As a frequent user I want to be able to get in touch with the company about a meeting room

## Design 
---

* Colour Scheme
  The colour scheme across the site is a main background color of #deecd5 which is a light pale green shade. #272727 which is a shade of black contrasts this nicely at the top of the page and I think the colours compliment eachother. I used #FDBE11 which is a goldy yellow for the brand name and some other small elements which contrasts the black colour and stands out well against it. #ADADAD and white were used across the menu items to make them stand out in the middle of the page. 

* Typography
I used three different fonts across the website. Zen Tokyo Zoo is used for the brand name at the top of the site and a couple of headings. Londrina outline is used on all the hero cards on the main page which i feel is a nice clear font that compliments these sections. The rest of the site and text is using Ubuntu which is a very clean font which is easy to read. 


* Imagery
  The homepage consists of 4 main images that stand out and clearly highlight the main purposes/areas of the site. 
  These images change to video at larger screen size and really stand out and make the site feel alive. 

## Wireframes 
---

Small Screens - [View](assets/wireframes/sm-screen-coffee.pdf)

Medium Screens - [View](assets/wireframes/med-screen-coffee.pdf)

Large Screens - [View](assets/wireframes/lrg-screen-coffee.pdf)

### Any updates made to the Wireframes?

## Features 
---
### Features to implement in the future
I have made a click and collect feature for the website although I don't know how to implement a payment feature or any backend code to receive orders that would be viable or efficient in terms of accepting them. I would like to be able to implement this properly when I have the relevant skills. 
## Technologies used

----
### Languages used
- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Programs Used
- Balsamiq - to create wireframes and plan
- Bootstrap - will mainly be used for the grid system
- JQUERY
- Fontawesome
- gooogle places API

## Testing
---

### Testing User Stories from User Experience (UX) Section

#### First Time Visitor Goals
- As a first time visitor I want to be able to see what services food/drinks are on offer

  i. As a first time visitor I can clearly see different sections of the site and upon navigating to the food/drinks menus can see all products that the company sells. 

  ii. The photo and video hero cards clearly highlight the main offerings of the business.

- As a first time visitor I want to know the purpose of the site

   i. As a first time visitor I can tell the purpose of the site is to represent the business and highlight the services they offer. This is obvious from the homepage and the clear images and videos highlighting what they do. 

- As a first time user I want to be able to navigate around the site seamlessly

  i. I can navigate around the site with ease. Using either the hamburger/dropdown menu or the hero images on the main page which highlight all the main sections the site contains.

#### Returning vistitor Goals
-  As a returning visitor I want to find contact information to enquire about something

  i. I can easily navigate to the find us page where contact information is clear and readily available. 

- As a returning visitor I want to book catering for a meeting room 

  i. This is easily found from the main page. upon sending the form i recieve a confirmation email and a success message to confirm a successful request.  

#### Frequent Vistor Goals
- As a frequent user I want to be able to go online and order my food and drinks for collection at a specific time. 

  i. All items can be added to a cart and the cart counter shows they are being added. There is a time selection on the checkout cart area. to select the time you'd want to pick up your order. 
  I would when i have the relevant skills finish this checkout process with payment and completion of order.

- As a frequent user I want to be able to get in touch with the company about a meeting room. 

  i. This is easily done through either the find us section, or through the success message which supplies a phone number that can be contacted if more urgent assistance is needed. 

### Further Testing

- The site was tested across multiple browsers including ; Firefox, Chrome, Explorer and Safari. 

- The site was tested across multiple screen sizes and resolutions from small to larger phones, tablets, laptops and desktop monitors.

- checked for performance 

- All navigation links and social links were tested extensively to ensure they were working on each and every page, and went to the right place.

- Friends and family tested the site and provided feedback. 

- Used the W3C Markup Validator and W3C CSS Validator to check every page of the project to ensure there were no syntax errors.

CSS Validation - [View](assets/validation/CSSvalidation.png)

HTML Validation - index.html - [View](assets/validation/index.png)
HTML Validation - coffee.html - [View](assets/validation/coffee.png)
HTML Validation - food.html - [View](assets/validation/food.png)
HTML Validation - meetings.html - [View](assets/validation/meetings.png)
HTML Validation - findus.html - [View](assets/validation/findus.png)

- Used Jshint as well as eslint to check for any Javascript errors

- Used lighthouse in google chrome developer tools to test for performance, SEO, accessibility and best practices.


### Bugs and Fixes 

- I couldn't have two onsubmit events on my meeting room form. So incorporating emailJS stopped my validate form working. This was easily fixed by adding my if else statements to the emailJS code. Some parts are hoever validated through HTMl required and some through JS which throws up alerts making it not a completely consistent UX. I would look to fix this given more time. 

- My cart items on load although all accurate and the same, aren't loaded back in the cart in the same order they were put into the cart. Ideally i would be able to fix this but didn't have the time. 

- the time selector for the click and collect service gives 24 hours of options. This would need to be changed to only be between business opening hours.

- I couldn't manage to add another marker by place ID therefore i just added one by location and input the correct values in. I would like to be able to fix this so its in place purely off the place ID.


## Deployment
---
### Github pages
The project was deployed to Github pages using the following steps;
1. Log in to GitHub, locate your chosen repository and select it.
1. At the top of the repository (in it's menu) select the settings button.
1. Scroll towards the bottom of the settings page and locate the "GitHub Pages" section.
1. Under "Source", click the dropdown menu and select "Master Branch".
1. The page then automatically refreshes itself.
1. Scroll back down the page and there will now be a published site link within the "GitHub Pages" section.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the GitHub Repository
1. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
1. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
1. Log in to GitHub and locate the GitHub Repository
1. Under the repository name, click "Clone or download".
1. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
1. Open Git Bash
1. Change the current working directory to the location where you want the cloned directory to be made.
1. Type git clone, and then paste the URL you copied in Step 3.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```


## Credits
---

### Code 

- Animated hamburger menu -  https://codepen.io/nevcanuludas/pen/WbNbow

- box-shadow effects - https://getcssscan.com/css-box-shadow-examples 



### Content
 
- All content was written by the developer

### Media 

- All images and video were sourced from pexels and were free to use. 

### Acknowledgements
- https://www.w3schools.com/ and https://css-tricks.com/ were both invaluable resources for referring back to throughout.
- https://stackoverflow.com/ was a great resource if i had any problems, often i could find the same or similar issue on here and get an idea for how to fix it.
- My mentor for helping me throughout the process and pushing me forward.
