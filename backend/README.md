# booking-app (Backend)

## Setup

### Prerrequisites
- Node.js
- NPM
- MYSQL

### Create Database

```
CREATE DATABASE booking_app;
```

### Import database dump

```bash
mysql -u root -p -D booking_app
```

```
source /booking-app/backend/db.sql
```

### Install dependencies

```bash
npm install
```

### Set .env file

```
cp .env.example .env
```

set the vars according to your db access

### Run project
```
npm run dev
```
