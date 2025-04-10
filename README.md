# React Food - Recipe Discovery Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-4.1.5-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Redux_Toolkit-1.6.1-purple?logo=redux" alt="Redux Toolkit">
</div>

## 🌍 Demo

Experience React Food in action:

- **Live Demo**: [react-food](https://andrey-golubenko.github.io/react-food)

## 📌 Core Features

- **Recipe Categories Exploration**
  - Browse through various food categories
  - Search functionality for categories
  - Detailed category descriptions
- **Meal Discovery**
  - Browse meals by category
  - Detailed meal information
  - Recipe instructions and ingredients
- **Recipe Details**
  - Complete cooking instructions
  - Ingredient lists with measurements
  - Video tutorials (when available)
- **Responsive Design**
  - Mobile-friendly interface
  - Lazy-loaded images
  - Smooth loading transitions

## 🛠️ Technology Stack

- **[React](https://reactjs.org/)** - UI development
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - State management
- **[React Router](https://reactrouter.com/)** - Navigation
- **[Materialize CSS](https://materializecss.com/)** - Styling
- **[TheMealDB API](https://www.themealdb.com/api.php)** - Recipe data

## 🔧 Project Structure

```plaintext
react-food/
├── src/
│   ├── components/         # React components
│   │   ├── Alert/          # Error alerts
│   │   ├── LoadableImage/  # Lazy loading images
│   │   ├── CategoryList    # Food categories
│   │   ├── MealList        # Meals in category
│   │   └── SingleMealItem  # Detailed recipe view
│   ├── pages/              # Route pages
│   │   ├── Home            # Main categories page
│   │   ├── Category        # Category meals
│   │   └── SingleMeal      # Recipe details
│   ├── store/              # Redux store setup
│   │   ├── store.ts        # Store configuration
│   │   └── foodSlice.ts    # Food related reducers
│   ├── hooks/              # Custom React hooks
│   ├── interfaces/         # TypeScript interfaces
│   └── config/             # API configuration
```

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/andrey-golubenko/react-food.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🌟 Features in Detail

### ➤ Category Exploration
- Browse through food categories
- Search categories by name
- View category descriptions
- Responsive grid layout

### ➤ Recipe Discovery
- Filter meals by category
- View meal thumbnails
- Click through to detailed recipes

### ➤ Recipe Details
- Complete ingredient lists
- Step-by-step instructions
- Embedded video tutorials
- High-quality food images

### ➤ User Interface
- Responsive navigation
- Loading indicators
- Error handling
- Image lazy loading
- Smooth transitions

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.