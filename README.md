**Solo Sync** : Uniting Solo Developers for Collaborative Projects

## Overview

Solo Sync is a community-driven platform designed to empower solo developers by providing a space to share their projects, connect with like-minded developers, and form teams to complete projects collaboratively.

## Features

- **Project Sharing:** Developers can share their projects, detailing the problem they are solving and the technologies they are using.
- **Developer Profiles:** Each user has a profile showcasing their skills, projects, and availability.
- **Team Formation:** Developers can view other projects, offer to collaborate, and form teams to work on projects together.
- **Task Management:** Integrated task management to track the progress of projects and assign tasks within teams.
- **Category and Priority Tags:** Projects and tasks can be tagged with categories and priorities for better organization.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Django, Django REST framework
- **Database:** MySQL
- **Authentication:** Django's built-in authentication system
- **Hosting:** (Add your hosting details here if applicable)

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Django 3.0 or higher
- MySQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nadtheme1106/App-List.git
   cd App-List
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python -m venv env
   source env/bin/activate   # On Windows, use `env\Scripts\activate`
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up the database:**

   Update your `settings.py` with your MySQL configuration:

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'your_db_name',
           'USER': 'your_db_user',
           'PASSWORD': 'your_db_password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

5. **Apply migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create a superuser:**

   ```bash
   python manage.py createsuperuser
   ```

7. **Run the server:**

   ```bash
   python manage.py runserver
   ```

8. **Access the application:**

   Open your browser and go to `http://127.0.0.1:8000`

## Usage

- **Sign Up/Login:** Create an account or log in to access the platform.
- **Profile:** Update your profile with your skills and project preferences.
- **Create Project:** Share your project, detailing the problem statement and required skills.
- **Explore Projects:** Browse projects posted by other developers and offer to collaborate.
- **Team Collaboration:** Form teams, assign tasks, and track project progress.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Django and Django REST framework
- MySQL
- All contributors and users

---
