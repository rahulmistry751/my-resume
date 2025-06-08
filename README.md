# My Resume CLI

A beautiful, interactive command-line resume built with TypeScript and Node.js. Display your professional information in a stylish terminal format with colors, emojis, and elegant formatting.

## ✨ Features

- 🎨 **Beautiful CLI Output** - Styled with colors, borders, and emojis
- 📱 **Responsive Design** - Adapts to different terminal sizes
- 🔧 **TypeScript** - Fully typed for better development experience
- 🧪 **Comprehensive Testing** - Unit tests with Vitest
- 📦 **Easy to Customize** - Simple data structure for quick updates
- 🚀 **NPM Package Ready** - Can be published as an executable package

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Styling**: Chalk (colors) + Boxen (borders)  
- **Testing**: Vitest
- **Build**: TypeScript Compiler

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## 💻 Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### As Global Package
```bash
npm install -g .
my-resume
```

## 🧪 Testing

Run all tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

Run tests with UI:
```bash
npm run test:ui
```

## 📁 Project Structure

```
my-resume/
├── src/
│   ├── index.ts          # Main entry point with ResumeRenderer class
│   ├── resume.ts         # Resume data
│   └── types.ts          # TypeScript interfaces
├── __tests__/
│   ├── resume-renderer.test.ts  # ResumeRenderer class tests
│   └── resume.test.ts           # Resume data validation tests
├── dist/                 # Compiled JavaScript (generated)
├── coverage/            # Test coverage reports (generated)
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── README.md
```

## ⚙️ Configuration

### Customizing Your Resume

Edit `src/resume.ts` to update your personal information:

```typescript
export const resume: Resume = {
  name: "Your Name",
  title: "Your Professional Title",
  contact: {
    email: "your.email@example.com",
    phone: "+1234567890",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    location: "Your City, Country"
  },
  // ... rest of your data
};
```

### Adding New Sections

1. Update the `Resume` interface in `src/types.ts`
2. Add the data to `src/resume.ts`
3. Create a new method in the `ResumeRenderer` class
4. Add the method call to the `render()` method
5. Write tests for the new functionality

## 🎨 Customization

### Colors and Styling

The resume uses Chalk for styling. You can customize colors in `src/index.ts`:

```typescript
// Header styling
chalk.bold.cyan(`Your Header Text`)

// Section titles
chalk.bold.green("SECTION NAME")

// Content styling  
chalk.yellow(`Content text`)
```

### Border Styles

Modify the boxen configuration in the `render()` method:

```typescript
boxen(fullResume, {
  padding: 1,
  margin: 1,
  borderStyle: "double", // Options: single, double, round, singleDouble, etc.
  borderColor: "cyan"    // Any valid chalk color
})
```

## 🧪 Testing Strategy

The project includes comprehensive tests covering:

- **Unit Tests**: Individual method functionality
- **Integration Tests**: Component interaction
- **Data Validation**: Resume data structure and content
- **Error Handling**: Edge cases and error scenarios

### Test Coverage Areas

- ✅ Resume data validation
- ✅ ResumeRenderer class methods
- ✅ Output formatting
- ✅ Error handling
- ✅ Edge cases (missing optional fields)

## 📦 Publishing as NPM Package

To publish your resume as an installable NPM package:

1. **Update package.json**
   ```json
   {
     "name": "@yourusername/my-resume",
     "version": "1.0.0",
     "bin": {
       "my-resume": "./dist/index.js"
     }
   }
   ```

2. **Build and publish**
   ```bash
   npm run build
   npm publish
   ```

3. **Install globally**
   ```bash
   npm install -g @yourusername/my-resume
   my-resume
   ```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run the compiled resume |
| `npm run dev` | Run in development mode with tsx |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate test coverage report |
| `npm run test:ui` | Run tests with Vitest UI |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rahul Santosh Mistry**
- Email: [rahulmistry751@gmail.com](mailto:rahulmistry751@gmail.com)
- LinkedIn: [rahul-mistry-xl](https://linkedin.com/in/rahul-mistry-xl)
- GitHub: [rahulmistry751](https://github.com/rahulmistry751)

## 🎯 Roadmap

- [ ] Add interactive mode with inquirer
- [ ] Export resume to PDF format
- [ ] Add more theme options
- [ ] Integration with LinkedIn API
- [ ] Web version generator
- [ ] Multiple language support

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed description
3. Include your Node.js version and operating system

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

---

*Built with ❤️ using TypeScript and Node.js*