
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center md:items-center p-5 bg-black ">
        <div className="text-font lg:text-lg text-gray-200 font-poppins">
            Copyright &copy; {currentYear} all right reserved
        </div>
    </footer>
  )
}

export default Footer