# 🏗️ Kiến Trúc Tối Ưu - React + Tailwind CSS

## 📁 Cấu Trúc Thư Mục

```
src/
├── components/
│   ├── ui/                    # 🎨 UI Components có thể tái sử dụng
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   ├── Textarea.jsx
│   │   ├── Container.jsx
│   │   ├── Section.jsx
│   │   └── index.js
│   ├── Header.jsx             # 🧭 Layout Components
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── FeatureCard.jsx
│   ├── Services.jsx
│   ├── ServiceCard.jsx
│   ├── Contact.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── index.js
├── pages/                     # 📄 Page Components
│   └── home/
│       └── HomePage.jsx
├── styles/                    # 🎨 Style Files
│   ├── main.css
│   └── component.css
└── App.jsx                    # 🚀 Root Component
```

## 🎯 Nguyên Tắc Thiết Kế

### 1. **Component Hierarchy**
- **UI Components**: Cơ bản, có thể tái sử dụng (Button, Input, Card...)
- **Layout Components**: Tổ chức layout (Header, Hero, Features...)
- **Page Components**: Kết hợp layout components thành trang hoàn chỉnh

### 2. **Separation of Concerns**
- **UI Logic**: Tách biệt trong UI components
- **Business Logic**: Tách biệt trong layout components
- **Page Logic**: Tách biệt trong page components

### 3. **Reusability**
- UI components có thể sử dụng ở mọi nơi
- Layout components có thể tái sử dụng cho các trang khác
- Styles được tổ chức theo component

## 🎨 UI Components

### **Button.jsx**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>
```
- **Variants**: primary, secondary, outline, ghost, danger
- **Sizes**: sm, md, lg
- **Features**: Hover effects, focus states, disabled state

### **Card.jsx**
```jsx
<Card padding="md" shadow="lg" hover>
  Content here
</Card>
```
- **Padding**: none, sm, md, lg
- **Shadow**: none, sm, md, lg, xl
- **Features**: Hover effects, customizable

### **Input.jsx**
```jsx
<Input 
  label="Email" 
  type="email" 
  error={errors.email}
  required 
/>
```
- **Features**: Label, error handling, validation, focus states

### **Container.jsx**
```jsx
<Container size="lg" padding>
  Content here
</Container>
```
- **Sizes**: sm, md, lg, xl, full
- **Features**: Responsive padding, max-width control

### **Section.jsx**
```jsx
<Section padding="lg" background="white" id="about">
  Content here
</Section>
```
- **Padding**: none, sm, md, lg, xl
- **Background**: white, gray, dark, primary, gradient

## 🎨 Style System

### **main.css**
- Tailwind directives
- Global styles
- Custom utilities
- Import component styles

### **component.css**
- Component-specific styles
- Layout utilities
- Animation classes
- Responsive helpers

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Grid System**
```css
.grid-responsive {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.grid-features {
  @apply grid md:grid-cols-3 gap-8;
}
```

## 🔄 State Management

### **Local State**
- Form state với validation
- UI state (menu toggle, modal)
- Component-specific state

### **Props Interface**
- Type-safe props
- Default values
- Validation

## 🚀 Performance Optimization

### **Code Splitting**
- Lazy loading cho pages
- Dynamic imports
- Bundle optimization

### **Memoization**
- React.memo cho components
- useMemo cho expensive calculations
- useCallback cho event handlers

## 🎯 Best Practices

### **1. Component Composition**
```jsx
// ✅ Good
<Section background="white">
  <Container>
    <Card hover>
      <Button variant="primary">Action</Button>
    </Card>
  </Container>
</Section>

// ❌ Bad
<div className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
        Action
      </button>
    </div>
  </div>
</div>
```

### **2. Props Design**
```jsx
// ✅ Good - Flexible props
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  // Implementation
};

// ❌ Bad - Hardcoded styles
const Button = ({ children }) => {
  return (
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
      {children}
    </button>
  );
};
```

### **3. Style Organization**
```css
/* ✅ Good - Component-based */
.feature-card {
  @apply text-center p-6 hover-lift;
}

.feature-icon {
  @apply w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4;
}

/* ❌ Bad - Inline styles */
<div className="text-center p-6 transition-transform duration-200 hover:-translate-y-1">
  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
```

## 🔧 Development Workflow

### **1. Tạo UI Component mới**
```bash
# 1. Tạo component trong src/components/ui/
# 2. Export trong src/components/ui/index.js
# 3. Sử dụng trong layout components
```

### **2. Tạo Layout Component mới**
```bash
# 1. Tạo component trong src/components/
# 2. Sử dụng UI components
# 3. Export trong src/components/index.js
# 4. Sử dụng trong pages
```

### **3. Tạo Page mới**
```bash
# 1. Tạo thư mục trong src/pages/
# 2. Kết hợp layout components
# 3. Import trong App.jsx hoặc router
```

## 📈 Scalability

### **Mở rộng UI Components**
- Thêm variants mới
- Thêm sizes mới
- Thêm features mới

### **Mở rộng Layout**
- Thêm sections mới
- Thêm pages mới
- Thêm routes mới

### **Mở rộng Styles**
- Thêm theme support
- Thêm dark mode
- Thêm animations

## 🎨 Theme System

### **Color Palette**
```css
:root {
  --primary: #3b82f6;
  --secondary: #6b7280;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
}
```

### **Typography**
```css
.text-heading {
  @apply text-3xl md:text-4xl font-bold text-gray-900;
}

.text-body {
  @apply text-base text-gray-600;
}
```

## 🔍 Testing Strategy

### **Unit Tests**
- UI components
- Utility functions
- Form validation

### **Integration Tests**
- Layout components
- Page components
- User interactions

### **E2E Tests**
- Complete user flows
- Cross-browser testing
- Performance testing 