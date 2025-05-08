# Skyline Shine Website Recreation

This project is a recreation of the Skyline Shine website (original URL: https://blueberry-goby-a5bn.squarespace.com/) built using Next.js and Tailwind CSS.

## Project Structure

-   `/public/images/`: Contains all the images extracted from the original website.
-   `/src/app/`: Contains the page components for the website (e.g., `page.tsx` for Homepage, `services/page.tsx` for Services page, etc.).
-   `/src/app/layout.tsx`: The main layout file that includes the Header and Footer.
-   `/src/components/`: Contains reusable components like `header.tsx` and `footer.tsx`.
-   `/src/globals.css`: Contains global styles and Tailwind CSS imports.
-   `tailwind.config.ts`: Tailwind CSS configuration file.
-   `next.config.mjs`: Next.js configuration file.

## Getting Started

To run this project locally, you will need Node.js and pnpm (or npm/yarn) installed.

1.  **Extract the Zip File:**
    Unzip the provided `skyline-shine-recreation-source.zip` file to a directory of your choice.

2.  **Navigate to Project Directory:**
    Open your terminal and navigate into the project folder:
    ```bash
    cd path/to/skyline-shine-recreation
    ```

3.  **Install Dependencies:**
    Install the necessary project dependencies using pnpm (recommended, as used during development):
    ```bash
    pnpm install
    ```
    Alternatively, if you use npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Run the Development Server:**
    Start the Next.js development server:
    ```bash
    pnpm dev
    ```
    Or with npm/yarn:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5.  **Build for Production:**
    To create a production build:
    ```bash
    pnpm build
    ```
    The build artifacts will be stored in the `.next` directory.

## Notes

-   The contact form on the Contact page currently logs the form data to the console and shows an alert. For a live website, you would need to implement a backend service or integrate with an email service provider to handle form submissions.
-   The styling aims to match the original website as closely as possible using Tailwind CSS.
-   All images have been saved to the `/public/images/` directory and are referenced from there.

