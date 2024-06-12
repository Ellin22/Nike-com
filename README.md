# Convention Guide

Goals :   Design Prototype and re-develop a user-friendly and visually captivating clone of the Nike.com frontend platform and ensures seamless compatibility across multiple devices and screen sizes.de .

# Development Tools

![Vscode](./assets/convention-guide/vscode.webp)
- **Visual Studio Code (VSCode):** A powerful and versatile code editor that provides an excellent development environment with features like syntax highlighting, debugging support, and extensions for enhanced productivity.

- **GitLab:** A web-based Git repository manager that offers version control, issue tracking, and continuous integration/continuous deployment (CI/CD) pipelines, facilitating collaborative software development.

- **Figma:** An innovative design tool used for creating user interfaces, prototypes, and collaborative design projects.

# Communication tools

- **ANB community :** A built-in platform in ANB learning platform used to communication and scrum-note purposes.
- **Peer Review Board:**A platform for teammates to share their code and ask for their teammate opinions and criticism for a better way to construct their code.
- **Notion:** A platform to organize team progress and sprint report. Note down the thing that we stuck on and the things that we learn.

# Plan

- Website : Nike.com
- **Page : 2 pages**
    - **Homepage**
    - **Sign in**

# Figma Design Convention

- **Frame naming:** Frames must have proper names corresponding to their responsible pages that they represent.
- **Element naming:** Elements inside frames must have proper names corresponding to their purpose and usage.
- **Frame alignment:** Frames must have proper alignment and all have the exact same spacing and gap which is 150px gap between each frame.
- **Frame placement:** All frames must follow their placement, the frames containing the components for each resolution must be on the right, whereas, the frames that contain the UI clone of each page is on the left.

# Figma Grid system

- **Desktop :** ( 1920 * 1080 )
    - Desktop-width : 1824px
    - Grid-columns : 12
    - Gap or Gutters : 24px
- **Tablet** : (1024 * 1399)
    - Tablets-width : 915px
    - Grid-columns: 12
    - Gap or Gutter : 8px
- **Mobile** : (390 * 844)
    - Mobile-width : 340px
    - Grid-columns : 12
    - Gap or Gutters : 15px

# Font-Family

- **Font usage instruction :** Use each fonts as the replacement for the fonts in the website.
- **Font-family :**
    - Futura (For a bold and Header)
    - ui-sans-serif (For paragraph, anchor-tag, Li)

# Project structure

**Description:**

- **assets:** a folder to store images and videos.
- **components:**  a folder to store reusable components.
- **pages:** stores each page that the members are responsible for.
- **src:** a folder to store a bunch of stylization and javascript.
- **git-ignore:** a file to store all the untracked files.
- **index.html:** the file that represents the landing page of the website.

# **Rules**

- **assets:** The sub-folders such as images and videos must contain sub-folders correlating to each specific page **e.g homepage, tv-shows etc.**
- **src:** The sub-folders such as the styles and script folders must contain sub-folders correlating to each specific page **e.g homepage, tv-shows etc.**

Image Download Rule

- **Image** : Every image must download with a **‘.webp ’** extension. **e.g Prime-bottle.wepb**

Font-Family :

- **Font usage instruction:** Use each fonts as the replacement for the fonts in the website.

# File naming

**HTML:**

- The file must contain all lower-case letters.
- The file must have a **‘ - ’** in between each new word **e.g : tv-show.html**

**Javascript:**

- The file must be named according to camelCasing. **e.g : tvShows.js**

**CSS:**

- The file must contain all lower-case letters.
- The file must have a **‘ - ’** in between each new word. **e.g : tv-shows.css**

# Classes, function and variable naming

**HTML:**

- **Class naming** : class names must use ‘ - ’ to separate each word, with the names corresponding to their sections. **e.g: navbar-container.**

**Javascript:**

- **Function naming** : The function names must follow the camelCasing naming convention and the names must be relevant to their usage. **e.g: buttonToggle**

**Note**: Functions must contain the function keyword (no usage of arrow functions, unless it is an anonymous function).

- **Variable naming**: The variable’s names must follow the camelCasing naming convention and the names must have meaning according to their usage. **e.g: toggleButton**

**Note**: Variables must be declared with their ‘const’ or ‘let’

# Comment rules

**Common comments rule**: Regardless of the file type, the comments must contain a prefix followed by a **‘ : ’** and then an explanation/description.  **e.g : Card : Product card**

**HTML:**

- Each main section must be separated by a space and then a comment on a new space.
- Sub-sections do not follow the same rules as the main sections.

**Javascript:**

- Each function must have a comment with the function name followed by a description of its functionality. e.g: accordionToggle : toggles a items to create an accordion affect.

**CSS:**

- Each block of Css code must contain a comment with the section and a description of the section. e.g: Section 1: meaning/description

# Peer review comments :

## **Common comments rule**

- **Inline comments**: comments can be made on specific lines of code inside the peer review board
- **General comments**: inline comments made must be specified in the general comment

e.g: Please check my comment on file-name.ext( css, js, html ) on line :

- 112
- 321

# CSS Styling & Framework

- **Tailwind-css** : utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.
- **CSS Styling** : Do not write inline style or external styles that is not needed.

# Version Control

Issue naming convention :

**Issue naming :** The issues must have the issue name followed by ‘:’ and then a description of the issue at hand

Merge Request :

- **Title:** The issue name must be put in the title part.
- **Description:** The issue name must be followed by a description of what the issue is and how it should be fixed. e.g: homepage: Create the homepage with responsiveness.

# Commit Message

- **Common commit rules:** Commits must be detailed stating the changes made along with a short and meaningful description of the changes.
- **Commit prefixes:**
- **Init:** when you initialize the workspace on a new branch.
- **Add:** when adding a new functionality on a branch.
- **Finish:** when the entire branch is finished (the last commit before merging the branch).
- **Fix:** when fixing something on the bugfix/hotfix branch.
- **Merge:** when merging your branch into a parent branch.

**e.g : Merge: merging into the release branch with the bugfix/homepage branch**

# Style guide

- font-size : 14px, 16px, 24px
- Text-color : #ffffff ,  #ffffffb3,  #6b7280, #000000
- Background-color : #ffffff, #000000
- Border-color : #e5e7eb

# IA

Link to acess the IA : https://www.figma.com/board/Q1JbpTai54RCRWhtneSgXg/Nike.com?node-id=0-1&t=y4XtWBvsttaeAwFa-1

# Work Start

- Always start your work by using the tailwind command because I’m using the tailwind external .
- Run : npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css —watch

# Figma

Link to access the Figma :

https://www.figma.com/design/oc99ZQXRDSBCzBOThYt1Mb/Nike.com?node-id=0-1&t=lAOE4zWz5nKaDh03-1