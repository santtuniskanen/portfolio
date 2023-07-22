function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-ceneter">
      <div className="text-lg text-ternary-dark">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/santtuniskanen/portfolio"
          target="__blank"
          className="hover:underline hover:text-indigo-600 ml-1 duration-500"
        >
          DevOps Portfolio
        </a>
        .
        <a
          href="https://santtuniskanen.com"
          target="__blank"
          className="text-secondary-dark font-medium uppercase hover:underline hover:text-indigo-600 ml-1 duration-500"
          >
           Santtu Niskanen
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
