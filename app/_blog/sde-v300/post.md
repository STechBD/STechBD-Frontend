---
title: S Database Explorer (SDE) v3.0.0
slug: sde-v300
created:
  - date: 16-07-2023
    time: 23:12:09
updated:
  - date: 16-07-2023
    time: 23:12:09
author:
  - user: AAShemul 
    name: Md. Ashraful Alam Shemul
    title: CEO of S Technologies
    url: https://github.com/AAShemul
    image: https://github.com/AAShemul.png
  - user: STechBD
    name: S Technologies Team
    title: Team of S Technologies
    url: https://www.stechbd.net
    image: https://github.com/STechBD.png
description: S Database Explorer (SDE) v3.0.0 is released.
category:
  - Product
  - Announcement
topic:
  - SDE
  - S Database Explorer
  - PHP
  - MySQL
  - Database
image: https://i.imgur.com/mErPwqL.png
---

We are excited to announce the release of S Database Explorer (SDE), a simple and lightweight MySQL database explorer library based on PHP and PDO. SDE is a free and open-source database management library that provides a user-friendly interface to manage your MySQL database efficiently. With its extensive features and easy-to-use methods, SDE simplifies the process of creating, updating, deleting, and selecting records in your MySQL database.

<!-- truncate -->

## Key Features

- Create table: Easily create tables in your MySQL database.
- Insert record: Insert new records with customizable fields.
- Update record: Update existing records with specified criteria.
- Delete record: Delete records based on specific conditions.
- Select record: Retrieve single records from your database.
- Select all records: Fetch all records from a table.
- Select records with a where clause: Filter records using a custom WHERE clause.
- Select records with where clause and limit: Limit the number of records returned.
- Select records with where clause, limit, and offset: Fetch records with pagination.
- Select records with where clause, limit, offset, and order by: Sort and filter records simultaneously.
- Run custom query: Execute custom SQL queries for advanced database operations.

## Change Log

### Version 3.0.0 (July 16, 2023)

This major release brings significant improvements and new features to SDE. Here’s what’s new:

- Added support for PHP 7.4 or higher, ensuring compatibility with the latest PHP versions.
- Replaced MySQLi with PDO, enhancing database connectivity and security.
- Renamed the custom query method to run() for better clarity and consistency.
- Renamed the last insert item method to last() to improve usability.
- Renamed the number of rows count method to count() for better understanding.
- Added JSON output method, allowing you to retrieve query results in JSON format.
- Introduced the sum() method to calculate the sum of a column in a table.

## Getting Started

To get started with S Database Explorer (SDE), follow these simple steps:

1. Install SDE using Composer:

	```bash
	composer require stechbd/sde
	```

2. Autoload the library in your PHP file:

	```php
	require_once __DIR__ . '/vendor/autoload.php';
	```

3. Connect to your database:

	```php
	$sde = new STechBD\SDE('name', 'username', 'password', 'host', 'prefix');
	```

4. Use the various methods provided by SDE to perform database operations, such as inserting, updating, deleting, and selecting records.
For detailed usage instructions, including examples and code snippets, refer to the [documentation](https://docs.stechbd.net/S-Database-Explorer/).

## License and Security

**S Database Explorer (SDE)** is an open-source library released under the GPLv3 license.
It promotes collaboration and encourages contributions from the community.
If you encounter any security issues, please reach out to us at [product@stechbd.net](mailto:product@stechbd.net).

## Future Plans

We have an exciting roadmap for S Database Explorer (SDE). Our future plans include:

1. Create and manage databases.
2. Alter and drop tables.
3. Truncate and rename tables.
4. Add, rename, and drop columns.
5. Add and drop indexes, foreign keys, and unique keys.
6. Add and drop primary keys.
7. Manage auto-increment values.
8. Stay tuned for these upcoming features that will further enhance the capabilities of SDE.

## About S Technologies

**S Technologies** is a research-based technology company in Bangladesh.
It was founded in 2013.
It provides services like domain registration, web hosting, web servers, software development, AI model development, software as a service (SasS), UI/UX design, SEO, business solutions, etc.
**S Technologies** has been working in research of new technologies especially in artificial intelligence, and developing new products.

## Support and Contact

If you have any general issues or questions related to S Database Explorer (SDE), feel free to contact our support team at STechBD.Net/support. If you discover any bugs or would like to suggest improvements, please use the GitHub issue tracker.

Connect with us through our various channels:

- [Home Page](https://www.stechbd.net/project/SDE/)
- [Documentation](https://docs.stechbd.net/SDE/)
- [GitHub Issues](https://github.com/STechBD/SDE/issues)
- [Composer Package](https://packagist.org/packages/stechbd/sde)
- [Email](mailto:product@stechbd.net)
- [Support Page](https://www.stechbd.net/support)
- [Contact Form](https://www.stechbd.net/contact)
- [Facebook](https://www.facebook.com/STechBD.Net)
- [Twitter](https://twitter.com/STechBD_Net)
- [LinkedIn](https://www.linkedin.com/company/STechBD)

## Hire Us

Looking for professional web or app development services? Hire us for:

- [AI App Development](https://www.stechbd.net/ai-development)
- [Web App Development](https://www.stechbd.net/web-development)
- [Android App Development](https://www.stechbd.net/android-app-development)
- [iOS App Development](https://www.stechbd.net/ios-app-development)

## Contribute

Join us in improving S Database Explorer (SDE) by contributing to our GitHub repository: STechBD/SDE. We welcome your pull requests and appreciate your valuable contributions.

# More

- [Privacy Policy](https://www.stechbd.net/privacy)
- [Terms & Conditions](https://www.stechbd.net/terms)
- [Refund Policy](https://www.stechbd.net/refund-policy)
- [Software License Agreement](https://www.stechbd.net/software-license-agreement)
