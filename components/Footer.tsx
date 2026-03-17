export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} Reba Digital Solutions
      </div>
    </footer>
  );
}
