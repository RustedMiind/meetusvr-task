import Header from "./Header";

function MainLayout({ children }) {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Content */}
      {children}
      {/* Footer */}
    </div>
  );
}

export default MainLayout;
