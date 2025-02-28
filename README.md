# Innoscript Case Study

## Overview

Welcome to the Innoscript Case Study! This project is a simple login page that navigates to a news feed. Please note that the login page does not check for credentials; it is purely a demonstration to showcase navigation to the news feed. The news feed allows users to filter articles by author, date, language, and keywords, providing a seamless and efficient way to access the information they are interested in. The application is built using modern web technologies and is designed to be responsive across all devices.

## Technologies Used

- **React (Next.js)**: A powerful React framework for building applications.
- **TypeScript**: A superset of JavaScript that enables static typing for improved code quality.
- **Tailwind CSS**: A utility-first CSS framework for designing aesthetically pleasing user interfaces.
- **Jest & React Testing Library**: Tools for testing React components and applications.
- **Docker**: Containerization platform for easy deployment and management of applications.

## Features

- **Login Page**: A simple user interface for user authentication (note: this page does not validate credentials).
- **News Feed**: After logging in, users can view a curated list of news articles.
- **Filter Options**: Users can filter the news feed based on:
  - Author
  - Date
  - Language
  - Keywords
- **Responsive Design**: The application is built with a responsive design, ensuring optimal user experience on all screen sizes.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rodolfoserralha/innoscripta
   ```

2. Navigate to the project directory:
   ```bash
   cd innoscripta
   ```

3. Run the application using Docker:
   ```bash
   docker-compose up --build -d
   ```

4. Access the application in your browser at `http://localhost:3000`.

## Running Tests

To run the tests for this application, you can execute the following command in the project directory:

```bash
npm run test
```

## Considerations

- **Time Constraints**: Unfortunately, I didn't have enough time to fully develop the project to my desired standards.
- **Custom Hook**: I aimed to create a custom hook to manage the logic for the container, but it didn't yield the intended effect within the component.
- **Routing Tests**: I intended to implement testing for the application routes, but time limitations prevented me from completing this feature.
- **Api Sources**: I was unable to integrate multiple API sources into the application due to time constraints, which could enhance the variety and depth of the news articles displayed. Additionally, there is an unused route in the project that was left incomplete due to time limitations.

## Acknowledgments

Thank you for checking out the Innoscript Case Study. I appreciate your understanding regarding the project's limitations, and I hope you find it an insightful demonstration of the technologies used!