export default function Header() {
  return (
    // site Header
    <header className="Header flex flex-col py-5">
      {/* logo & theme & likes */}
      <section className="first-part flex justify-between items-center">
        <div className="left-side flex justify-center items-center gap-x-6">
          <img className="hidden dark:inline-block w-64" src="https://shahindb.lol/wp-content/uploads/2023/09/logo-light.png" alt="site-logo" />
          <img className="inline-block dark:hidden w-64" src="https://shahindb.lol/wp-content/uploads/2023/09/logo-dark.png" alt="site-logo" />
          <p>theme</p>
          <p>like</p>
        </div>

        <div className="right-side flex justify-center items-center gap-x-6">
          <h1>notif</h1>
          <h1>user-info</h1>
        </div>
      </section>

      {/* notification & user-info */}
      <section className="second-part">
      </section>
    </header>
  );
}

{/* <img src="https://shahindb.lol/wp-content/uploads/2023/09/logo-light.png" alt="site-logo" className="w-32" /> */}