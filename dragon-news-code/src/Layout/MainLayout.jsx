import { Outlet } from "react-router-dom";
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div>
            <Header/>
             <main>
                <section ClassName="left section" > hello Toukir</section>
                <section ClassName="main section">
                    <Outlet/>
                </section>
                <section ClassName="right section"></section>
             </main>
            
        </div>
    );
};

export default MainLayout;