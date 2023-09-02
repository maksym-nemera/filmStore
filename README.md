# Film catalog

This repository contains the source code and assets for the test project.

## Description

In this project, you can add movies to the list that will be stored in the database and displayed on the main page of the project.

## Features

- Easy addition of new movies:
  - click **Create new entry** in the right up corner
    ![content_manager-page](https://github.com/maksym-nemera/filmStore/assets/81112084/c5827abf-c6d2-4b28-83e6-cddfe1239f82)
  - add required data, add photos in **cover** that should be in _/backend/public/uploads_, and then take the link to each photo and add to images JSON data
    ![add-new-film](https://github.com/maksym-nemera/filmStore/assets/81112084/b9b9d820-7d89-405d-b0d6-c4fb1f20030b)
  - Click save and then publish in the right up corner
    ![save-and-publish](https://github.com/maksym-nemera/filmStore/assets/81112084/920e0177-f3f3-48b3-8ca0-ace63619ad6b)
  - check it out on the front side on [http://localhost:4321/](http://localhost:4321/) <br>
    ![list-of-films](https://github.com/maksym-nemera/filmStore/assets/81112084/72188f85-20d1-46f5-afbf-8801a3394b2f)

## Endpoints

The base URL for the API is: **[BASE_URL](http://localhost:1337/)**

If you need to, you can take my information to test strapi in practice:

- login: maksym.nemera@gmail.com
- password: Admin12345

<table>
    <tr>
        <th>
        	Method
        </th>
        <th>
        	Endpoint
        </th>
        <th>
        	Description
        </th>
        <th>
        	Body
        </th>
    </tr>
    	<tr>
        <th colspan="4">Films</th>
    	</tr>
    <tr>
        <td>
        	GET
        </td>
        <td>
        	<a href="http://localhost:1337/api/films">
        		/api/films
          </a>
        </td>
        <td>
        	Get an object with data containing a list of all products and meta for pagination.
        </td>
        <td>
        	NULL
        </td>
    </tr>
    	<tr>
        <th colspan="4">Categories</th>
    	</tr>
    <tr>
        <td>
        	GET
        </td>
        <td>
        	<a href="http://localhost:1337/api/categories">
        		/api/categories
          </a>
        </td>
        <td>
        	Get an object with data containing a list of all categories and meta for pagination.
        </td>
        <td>
        	NULL
        </td>
    </tr>
    	<tr>
        <th colspan="4">Images</th>
    	</tr>
    <tr>
        <td>
        	GET
        </td>
        <td>
          <a href="http://localhost:1337/uploads/La_la_lend_poster2_7b82e8a32a.jpg">
          	/uploads/La_la_lend_poster2_7b82e8a32a.jpg
          </a>
        </td>
        <td>
        	Get the photo of a specific film.
        </td>
        <td>
        	NULL
        </td>
    </tr>
</table>

## Usage

Feel free to customize the content, styles, and functionality of the filmStore to suit your needs. You can modify the existing code or add new features as required.

## Tech stack

- Astro
- Strapi
- React
- Typescript
- Tailwind

## Contributing

If you would like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Clone the forked repository:
   ```shell
   git clone https://github.com/your-username/filmStore.git
   ```
3. Navigate to the project directory:
   ```shell
   cd filmStore
   ```
4. Create a new branch:
   ```shell
   git switch -c feature/your-feature
   ```
5. Install packages:
   ```shell
   npm i
   ```
6. Start the project **(will run both frontend and backend at the same time)**:
   ```hell
   npm run all:dev
   ```
7. Make your changes and test them locally.
8. Commit your changes:
   ```shell
   git commit -m 'Add some feature'
   ```
9. Push the branch to your forked repository:
   ```shell
   git push origin feature/your-feature
   ```
10. Open a pull request in this repository.

## Contact

If you have any questions, suggestions, or feedback, please feel free to reach out to me.

- Linkedin: [maksym-nemera](https://www.linkedin.com/in/maksym-nemera/)
- Email: [maksym.nemera@gmail.com](mailto:maksym.nemera@gmail.com)
- Telegram: [MaksymNemera](https://t.me/MaksymNemera)
