export const Layout = () => {
  console.log("Layout rendered ✅");

  return (
    <div>
      <h1>LAYOUT</h1>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
