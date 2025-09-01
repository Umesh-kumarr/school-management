
import AddSchoolPage from "./addSchool/page";
import HomePage from "./homePage";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      {/* <Navbar/> */}
      <div className="container mt-24 mx-auto px-10 py-4">
         <HomePage/>

         <AddSchoolPage/>
        
         </div>
         {/* <Footer/> */}
    </main>
  );
}