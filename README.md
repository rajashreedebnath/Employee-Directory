
# 🎯 Employee Directory Web Interface

A responsive, interactive Employee Directory web app built with **HTML**, **CSS**, **JavaScript**, and **Freemarker templates**. This project demonstrates modern front-end principles including modular code, **validation**, **dynamic filtering**, **sorting**, and responsive design.

---

## 🚀 Features

- ✨ Responsive **employee dashboard**
- 🧾 **Add/Edit** Employee Form with **validation**
- 🔎 **Search bar** (supports ENTER key)
- 📂 Sidebar **Filter**: by **First Name**, **Department**, **Role**
- ↕️ **Sorting**: by **First Name** or **Department**
- 📊 **Pagination** control: 10, 25, 50, 100 per page
- 📱 Fully responsive: **desktop**, **tablet**, and **mobile**

---
## 🛠️ Technologies Used

| 🧰 Tech         | 📝 Description                                   |
|----------------|--------------------------------------------------|
| HTML5          | Markup language for creating the structure       |
| CSS3           | Styling and layout of the UI                     |
| JavaScript     | Adds interactivity and dynamic functionality     |
| Freemarker     | Templating engine for static HTML generation     |
| In-Memory Data | All data is handled client-side (no backend)     |

---

## 🗂️ Project Structure

```bash
📁 Employee-Directory/
├── 🧠 app.js
├── 📦 freemarker.jar
├── 🧩 index.ftl
├── 🧱 index.html
├── ⚙️ render.class
├── 🖋️ render.java
├── 🎨 styles.css 
└── 📘 README.md
```

## 📸 Screenshots

### 📊 Dashboard Page
<img width="958" height="439" alt="Dashboard Page" src="https://github.com/user-attachments/assets/9bc5324c-121c-4802-88c2-072be77e8c6f" />

### 🧑‍💼 Add Employee Form

<img width="959" height="451" alt="Add Employee Form" src="https://github.com/user-attachments/assets/5a1e06fc-c698-47ae-8522-646cefd79fed" />

### 🧾 Sidebar Filter

<img width="959" height="446" alt="Sidebar Filter" src="https://github.com/user-attachments/assets/9431f04b-5790-4ff1-b1a1-fa70c006919a" />


## 🧰 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/rajashreedebnath/Employee-Directory.git
cd Employee-Directory
```

### 2. Generate Static HTML
- Requires Java and freemarker.jar in the root folder
- This creates index.html in the root or dist folder.

```bash
javac -cp freemarker.jar render.java
java -cp ".;freemarker.jar" render
```

### 3. Local Testing

- You can open index.html directly in a browser
or,

```bash
npx serve dist
```

## Usage Guide


🔍 Search Bar
 - Type name/email → Press ENTER to search

🎛️ Filter Sidebar
 - Opens with filter options (First Name, Department, Role)
 - Apply: filters results
 - Reset: clears filters and closes sidebar

➕ Add Employee
 - Opens modal form
 - Live validation: required fields, email format

📝 Edit/Delete
 - Edit existing employee info
 - Delete removes from the list

💡 Reflection

 - 🧗‍♂️ Challenges Faced
    - Keeping sidebar and search logic modular and separate
    - Making sidebar slide in/out smoothly
    - Client-side form validation
    - Sorting and paginating in-memory array data

 - 🌱 Future Improvements
    - Persistent storage (e.g. localStorage)
    - Backend integration (real DB)
    - Advanced filters (multi-select, date ranges)
    - Smooth animations & UI polish

---
