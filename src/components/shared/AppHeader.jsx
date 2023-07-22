import logo from '../../images/Lizard-Silhouette.svg';

const AppHeader= () => {

  return (
    <div className="flex justify-between items-center px-4 sm:px-0">
      <div>
        <img
        src={logo}
        className="w-36"
        alt="logo salamander"
        />
      </div>
    </div>
  );
}

export default AppHeader;
