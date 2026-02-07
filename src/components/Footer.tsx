const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Rimnoma Serge Ouedraogo. All rights reserved.</p>
          <p className="text-xs">
            Built with care for GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
