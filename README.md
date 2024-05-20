Nike Clone Project

Goals
Design Prototype and Redevelopment: Create a user-friendly and visually captivating clone of the Nike.com frontend platform.
Compatibility: Ensure seamless compatibility across multiple devices and screen sizes.

## Development Tools
Visual Studio Code (VSCode): A powerful code editor with features like syntax highlighting, debugging support, and extensions for enhanced productivity.
GitLab : A web-based Git repository manager that offers version control, issue tracking, and CI/CD pipelines for collaborative software development.
Figma: An innovative design tool used for creating user interfaces, prototypes, and collaborative design projects.

## Communication Tools
- ANB Community: A built-in platform in ANB for communication and scrum notes.
- Peer Review Board: A platform for teammates to share their code and receive feedback.
- Notion: A platform to organize team progress, sprint reports, and document challenges and learnings.

## Plan
- Project*: Clone of Nike.com
- Pages: 4 pages (Homepage, Women, Kid, Sign in)

## Figma Design Convention
- Frame Naming: Proper names corresponding to their responsible pages.
- Element Naming: Proper names corresponding to their purpose and usage.
- Frame Alignment: Uniform alignment with a 150px gap between each frame.
- **Frame Placement**: UI clone frames on the left, component frames on the right.

## Figma Grid System
- Desktop: 1920x1080, Width: 1824px, 12 columns, 24px gutters.
- **Tablet**: 1024x1399, Width: 915px, 12 columns, 8px gutters.
- **Mobile**: 390x844, Width: 340px, 12 columns, 15px gutters.

## Font-Family
- Font: Arial
- Usage: Replace website fonts with Arial.

## Project Structure
## Description
- assets: Store images and videos.
- component: Store reusable components.
- pages: Store each page the members are responsible for.
- src: Store stylization and JavaScript files.
- .gitignore: Store untracked files.
- index.html: Represents the landing page of the website.

## Rules
- assets: Sub-folders for each specific page (e.g., homepage, tv-shows).
- src: Sub-folders for styles and scripts for each specific page.

## Image Download Rule
- Format: `.webp`
- Example: `Prime-bottle.webp`

## File Naming
- HTML: Lowercase, words separated by ‘-’ (e.g., `tv-show.html`).
- JavaScript: CamelCase (e.g., `tvShows.js`).
- CSS: Lowercase, words separated by ‘-’ (e.g., `tv-shows.css`).

## Classes, Function, and Variable Naming
## HTML
- Class Naming: Use ‘-’ to separate words (e.g., `navbar-container`).

### JavaScript
- Function Naming: CamelCase (e.g., `buttonToggle`), use `function` keyword.
- Variable Naming: CamelCase (e.g., `toggleButton`), use `const` or `let`.

## Comment Rules
## Common Comments Rule
Regardless of the file type, the comments must contain a prefix followed by a ‘:’ and then an explanation/description.
- Example: `Card: Product card`

##HTML
- Each main section must be separated by a space and then a comment on a new line.
- Sub-sections do not follow the same rules as the main sections.

##JavaScript
- Each function must have a comment with the function name followed by a description of its functionality.
- Example: `accordionToggle: toggles items to create an accordion effect`

##CSS
- Each block of CSS code must contain a comment with the section and a description of the section.
- Example**: `Section 1: meaning/description`

## Peer Review Comments
## Common Comments Rule
- Inline Comments: Comments can be made on specific lines of code inside the peer review board.
- General Comment: Inline comments made must be specified in the general comment.
- Example: Please check my comment on `file-name.ext` (css, js, html) on line:
  - 112
  - 321

##CSS Styling & Framework
- Tailwind CSS: Utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.
- CSS Styling: Do not write inline style or external styles that are not needed.

Version Control
##Issue Naming Convention
- Issue Naming: The issues must have the issue name followed by ‘:’ and then a description of the issue at hand.

## Merge Request
- Title: The issue name must be put in the title part.
- Description: The issue name must be followed by a description of what the issue is and how it should be fixed.
- Example: `homepage: Create the homepage with responsiveness.`

## Commit Message
- Common Commit Rules: Commits must be detailed, stating the changes made along with a short and meaningful description of the changes.
- Commit Prefixes:
  - Init: When you initialize the workspace on a new branch.
  - Add: When adding a new functionality on a branch.
  - Finish: When the entire branch is finished (the last commit before merging the branch).
  - Fix: When fixing something on the bugfix/hotfix branch.
  - Merge: When merging your branch into a parent branch.
- Example: `Merge: merging into the release branch with the bugfix/homepage branch`


- Note : 
Everytime you come back to work you have to run : npx tailwindcss -i ./src/css/input.css -o/src/css/output.css --watch